<?php
namespace verbb\buttonbox\fields;

use Craft;
use craft\base\InlineEditableFieldInterface;
use craft\base\SortableFieldInterface;

class VisualChoice extends BaseVisualOptionsField implements InlineEditableFieldInterface, SortableFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Visual Choice');
    }

    public static function icon(): string
    {
        return '@verbb/buttonbox/icon-mask.svg';
    }
}
