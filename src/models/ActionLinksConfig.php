<?php
namespace verbb\buttonbox\models;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Model;
use craft\helpers\Html;
use craft\helpers\UrlHelper;
use craft\web\View;

use Twig\Error\Error as TwigError;

class ActionLinksConfig extends Model
{
    // Constants
    // =========================================================================

    public const URL_TYPES = ['cp', 'site', 'url'];
    public const STYLES = ['default', 'primary', 'secondary', 'outline', 'dashed', 'transparent', 'link', 'none'];
    public const SIZES = ['xxs', 'xs', 'sm', 'default', 'lg', 'xl'];


    // Static Methods
    // =========================================================================

    public static function hasUnsafeScheme(string $url): bool
    {
        // Browsers remove tabs/newlines before parsing schemes. Reject controls
        // outright, including after object-template and alias resolution.
        return (bool)preg_match('/[\x00-\x1f\x7f]|^\s*(?:javascript|data|vbscript):/i', $url);
    }


    // Properties
    // =========================================================================

    public array $actions = [];
    public string $size = 'default';
    public string $alignment = 'start';
    public string $spacing = 'normal';


    // Public Methods
    // =========================================================================

    public function getSettingsActions(): array
    {
        $actions = $this->actions;

        foreach ($actions as &$action) {
            if (is_array($action)) {
                $action['displayUrl'] = $this->_resolveUrl((string)($action['url'] ?? ''), $action['urlType'] ?? 'url');
            }
        }

        return $actions;
    }

    public function render(?ElementInterface $element = null, bool $preview = false): string
    {
        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        $links = [];

        foreach ($this->actions as $action) {
            if (is_array($action) && ($link = $this->_actionHtml($action, $element, $preview)) !== null) {
                $links[] = $link;
            }
        }

        return Html::tag('div', implode('', $links), [
            'class' => ['buttonbox-action-links__actions', 'buttonbox-action-links--' . $this->alignment, 'buttonbox-action-links--' . $this->spacing],
        ]);
    }

    public function validateActions(): void
    {
        foreach ($this->actions as $index => $action) {
            if (!is_array($action)) {
                $this->addError('actions', Craft::t('buttonbox', 'Each action must be a link configuration.'));

                continue;
            }

            $label = trim((string)($action['label'] ?? ''));
            $url = trim((string)($action['url'] ?? ''));
            $urlType = (string)($action['urlType'] ?? 'url');
            $style = (string)($action['style'] ?? 'default');
            $imageUrl = trim((string)($action['imageUrl'] ?? ''));

            if ($label === '' || $url === '') {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} requires both a label and a path or URL.', [
                    'number' => $index + 1,
                ]));
            }

            if (!in_array($urlType, self::URL_TYPES, true)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} has an invalid URL type.', ['number' => $index + 1]));
            }

            if (!in_array($style, self::STYLES, true)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} has an invalid style.', ['number' => $index + 1]));
            }

            if (!in_array($action['iconPosition'] ?? 'start', ['start', 'end'], true)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} has an invalid icon position.', ['number' => $index + 1]));
            }

            if ($this->_hasInvalidTemplate($label) || $this->_hasInvalidTemplate($url)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} has invalid template syntax.', ['number' => $index + 1]));
            }

            if (self::hasUnsafeScheme($url)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} uses an unsafe URL scheme.', ['number' => $index + 1]));
            }

            if (self::hasUnsafeScheme($imageUrl)) {
                $this->addError('actions', Craft::t('buttonbox', 'Action {number} uses an unsafe image URL scheme.', ['number' => $index + 1]));
            }
        }
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        return [
            [['actions'], 'validateActions'],
            [['size'], 'in', 'range' => self::SIZES],
            [['alignment'], 'in', 'range' => ['start', 'center', 'end']],
            [['spacing'], 'in', 'range' => ['compact', 'normal', 'relaxed']],
        ];
    }


    // Private Methods
    // =========================================================================

    private function _actionHtml(array $action, ?ElementInterface $element, bool $preview): ?string
    {
        $label = trim((string)($action['label'] ?? ''));
        $url = trim((string)($action['url'] ?? ''));

        if ($label === '' || $url === '') {
            return null;
        }

        try {
            $label = Craft::$app->getView()->renderObjectTemplate(Craft::t('site', $label), $element);
            $url = Craft::$app->getView()->renderObjectTemplate($url, $element);
        } catch (TwigError $e) {
            // Configuration saved before validation, or a translation, can still reach this.
            ButtonBox::warning("Skipped an Action Links action with an invalid template: {$e->getMessage()}");

            return null;
        }

        $url = $this->_resolveUrl($url, $action['urlType'] ?? 'url');

        if (self::hasUnsafeScheme($url)) {
            ButtonBox::warning("Skipped an Action Links URL with an unsafe scheme: {$url}");

            return null;
        }

        $content = Html::encode($label);

        $imageUrl = ButtonBox::$plugin->getOptions()->resolveImageUrl(trim((string)($action['imageUrl'] ?? '')));

        if ($imageUrl !== '' && !self::hasUnsafeScheme($imageUrl)) {
            $content = Html::img($imageUrl, [
                'class' => 'buttonbox-action-links__image',
                'slot' => ($action['iconPosition'] ?? 'start'),
                'alt' => trim((string)($action['imageAlt'] ?? '')),
            ]) . $content;
        } elseif (!empty($action['icon'])) {
            $svg = ButtonBox::$plugin->getGallery()->resolveIconSvg($action['icon']);

            if ($svg) {
                $content = Html::modifyTagAttributes($svg, ['slot' => ($action['iconPosition'] ?? 'start'), 'fill' => 'currentColor', 'aria-hidden' => 'true']) . $content;
            }
        }

        $newWindow = (bool)($action['newWindow'] ?? false);
        $attributes = [
            'type' => 'button',
            'variant' => $action['style'] ?? 'default',
            'size' => $this->size,
        ];

        if (!$preview) {
            $attributes += [
                'href' => $url,
                'target' => $newWindow ? '_blank' : null,
                'rel' => $newWindow ? 'noopener noreferrer' : null,
            ];
        }

        return Html::tag('pk-button', $content, $attributes);
    }

    private function _hasInvalidTemplate(string $template): bool
    {
        if (!str_contains($template, '{')) {
            return false;
        }

        // Compile only, in the mode used to render, so saving settings doesn't run the template.
        $view = Craft::$app->getView();
        $templateMode = $view->getTemplateMode();
        $view->setTemplateMode(View::TEMPLATE_MODE_SITE);

        try {
            $view->getTwig()->createTemplate($view->normalizeObjectTemplate($template));

            return false;
        } catch (TwigError) {
            return true;
        } finally {
            $view->setTemplateMode($templateMode);
        }
    }

    private function _resolveUrl(string $url, string $type): string
    {
        return match ($type) {
            'cp' => UrlHelper::cpUrl(ltrim($url, '/')),
            'site' => UrlHelper::siteUrl(ltrim($url, '/')),
            default => $url,
        };
    }
}
