<?php
/**
 * ButtonBox plugin for Craft CMS 3.x
 *
 * ButtonBox
 *
 * @link      http://supercooldesign.co.uk
 * @copyright Copyright (c) 2017 Supercool
 */

namespace supercool\buttonbox\fields;

use supercool\buttonbox\ButtonBox as ButtonBoxPlugin;
use supercool\buttonbox\assetbundles\buttonbox\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\fields\BaseOptionsField;
use craft\fields\data\OptionData;
use craft\fields\data\SingleOptionFieldData;
use craft\helpers\Db;
use yii\db\Schema;
use craft\helpers\Json;
use craft\helpers\Template;

/**
 *
 * @author    Supercool
 * @package   TableMaker
 * @since     1.0.0
 */

class TextSize extends BaseOptionsField
{
    // Public Properties
    // =========================================================================


    // Static Methods
    // =========================================================================
    
    public $options;

    /**
     * Returns the display name of this class.
     *
     * @return string The display name of this class.
     */
    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Text Size');
    }

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();
        return $rules;
    }

    /**
     * Returns the column type that this field should get within the content table.
     */
    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    /**
     * Normalizes the field’s value for use.
     *
     * This method is called when the field’s value is first accessed from the element. For example, the first time
     * `entry.myFieldHandle` is called from a template, or right before [[getInputHtml()]] is called. Whatever
     * this method returns is what `entry.myFieldHandle` will likewise return, and what [[getInputHtml()]]’s and
     * [[serializeValue()]]’s $value arguments will be set to.
     *
     * @param mixed                 $value   The raw field value
     * @param ElementInterface|null $element The element the field is associated with, if there is one
     *
     * @return mixed The prepared field value
     */
    public function normalizeValue($value, ElementInterface $element = null)
    {
        if ( !$value )
        {
            $value = $this->defaultValue();
        }

        // Normalize to an array
        $selectedValues = (array)$value;

        $value = reset($selectedValues) ?: null;
        $label = $this->optionLabel($value);
        $value = new SingleOptionFieldData($label, $value, true);

        $options = [];

        if ($this->options) {
            foreach ($this->options as $option) {
                $selected = in_array($option['value'], $selectedValues, true);
                $options[] = new OptionData($option['label'], $option['value'], $selected);
            }
        }

        $value->setOptions($options);

        return $value;
    }

    /**
     * Modifies an element query.
     *
     * This method will be called whenever elements are being searched for that may have this field assigned to them.
     *
     * If the method returns `false`, the query will be stopped before it ever gets a chance to execute.
     *
     * @param ElementQueryInterface $query The element query
     * @param mixed                 $value The value that was set on this field’s corresponding [[ElementCriteriaModel]] param, if any.
     *
     * @return null|false `false` in the event that the method is sure that no elements are going to be found.
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        return parent::serializeValue($value, $element);
    }

    /**
     * Returns the component’s settings HTML.
     *
     * @return string|null
     */
    public function getSettingsHtml()
    {
        $options = $this->translatedOptions();

        if (!$options)
        {
            // Give it a default row
            $options = array(
                array(
                    'label' => '',
                    'value' => '',
                    'pxVal' => ''
                )
            );
        }

        return Craft::$app->getView()->renderTemplateMacro('_includes/forms', 'editableTableField', array(
            array(
                'label'        => $this->optionsSettingLabel(),
                'instructions' => Craft::t('buttonbox', 'Pixel Size is optional and should be a single number.'),
                'id'           => 'options',
                'name'         => 'options',
                'addRowLabel'  => Craft::t('buttonbox', 'Add an option'),
                'cols'         => array(
                    'label' => array(
                        'heading'      => Craft::t('buttonbox', 'Option Label'),
                        'type'         => 'singleline',
                        'autopopulate' => 'value'
                    ),
                    'value' => array(
                        'heading'      => Craft::t('buttonbox', 'Value'),
                        'type'         => 'singleline',
                        'class'        => 'code'
                    ),
                    'pxVal' => array(
                        'heading'      => Craft::t('buttonbox', 'Pixel Size'),
                        'type'         => 'number'
                    ),
                    'default' => array(
                        'heading'      => Craft::t('buttonbox', 'Default?'),
                        'type'         => 'checkbox',
                        'class'        => 'thin'
                    ),
                ),
                'rows' => $options
            )
        ));

    }

    /**
     * Returns the field’s input HTML.
     *
     * @param ElementInterface|null $element The element the field is associated with, if there is one
     *
     * @return string The input HTML.
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $name = $this->handle;
        $options = $this->translatedOptions();

        // If this is a new entry, look for a default option
        if ($this->isFresh($element))
        {
            $value = $this->defaultValue();
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxFancyOptions("'.Craft::$app->getView()->namespaceInputId($name).'");');

        return Craft::$app->getView()->renderTemplate('buttonbox/_components/fields/textsize/input', [
            'name'         => $name,
            'value'        => $value,
            'options'      => $options
        ]);

    }

    // Protected Methods
    // =========================================================================
    
    protected function optionsSettingLabel() : string
    {
        return Craft::t('buttonbox', 'Text Size Options');
    }

    /**
     * Override this method to return custom default value
     * 
     * @return string 
     */
    protected function defaultValue()
    {

        $options = $this->translatedOptions();

        foreach ($options as $option)
        {

            if ( !empty($option['default']) )
            {
                return $option['value'];
            }

        }

        return $options[0]['value'];

    }

    /**
     * Override this method to add cssColour and default value to the options
     * 
     * @return array 
     */
    protected function translatedOptions(): array
    {
        $translatedOptions = [];

        foreach ($this->options as $option) {
            $translatedOptions[] = [
                'label' => Craft::t('site', $option['label']),
                'value' => $option['value'],
                'pxVal' => $option['pxVal'],
                'default' => $option['default']
            ];
        }

        return $translatedOptions;
    }

}
