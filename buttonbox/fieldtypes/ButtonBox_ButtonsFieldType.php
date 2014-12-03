<?php
namespace Craft;

/**
 * ButtonBox_Buttons by Supercool
 *
 * Modified from the original DropdownFieldType class
 *
 * @package   ButtonBox
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */
class ButtonBox_ButtonsFieldType extends BaseOptionsFieldType
{
  // Public Methods
  // =========================================================================

  /**
   * @inheritDoc IComponentType::getName()
   *
   * @return string
   */
  public function getName()
  {
    return Craft::t('Button Box - Buttons');
  }

 /**
  * @inheritDoc IFieldType::getInputHtml()
  *
  * @param string $name
  * @param mixed  $value
  *
  * @return string
  */
  public function getInputHtml($name, $value)
  {

    $settings = $this->getSettings();
    $options = $this->getTranslatedOptions();

    // If this is a new entry, look for a default option
    if ($this->isFresh())
    {
      $value = $this->getDefaultValue();
    }

    craft()->templates->includeCssResource('buttonbox/css/buttonbox.css');
    craft()->templates->includeJsResource('buttonbox/js/buttonbox.js');
    craft()->templates->includeJs('new Craft.ButtonBoxButtons("'.craft()->templates->namespaceInputId($name).'");');

    return craft()->templates->render('buttonbox/buttons/field', array(
      'name'    => $name,
      'value'   => $value,
      'options' => $options,
      'displayAsGraphic' => $settings->displayAsGraphic,
      'displayFullwidth' => $settings->displayFullwidth
    ));
  }

  /**
   * @inheritDoc BaseElementFieldType::getSettingsHtml()
   *
   * @return string|null
   */
  public function getSettingsHtml()
  {

    $settings = $this->getSettings();
    $options = $this->getOptions();

    if (!$options)
    {
      // Give it a default row
      $options = array(
        array(
          'label' => '',
          'showLabel' => false,
          'value' => '',
          'imageUrl' => ''
        )
      );
    }

    $table = craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
      array(
        'label'        => $this->getOptionsSettingsLabel(),
        'instructions' => Craft::t('Image urls can be relative e.g. /admin/resources/buttonbox/images/align-left.png'),
        'id'           => 'options',
        'name'         => 'options',
        'addRowLabel'  => Craft::t('Add an option'),
        'cols'         => array(
          'label' => array(
            'heading'      => Craft::t('Option Label'),
            'type'         => 'singleline',
            'autopopulate' => 'value'
          ),
          'showLabel' => array(
            'heading'      => Craft::t('Show Label?'),
            'type'         => 'checkbox',
            'class'        => 'thin'
          ),
          'value' => array(
            'heading'      => Craft::t('Value'),
            'type'         => 'singleline',
            'class'        => 'code'
          ),
          'imageUrl' => array(
            'heading'      => Craft::t('Image URL'),
            'type'         => 'singleline'
          ),
          'default' => array(
            'heading'      => Craft::t('Default?'),
            'type'         => 'checkbox',
            'class'        => 'thin'
          ),
        ),
        'rows' => $options
      )
    ));

    $displayAsGraphic = craft()->templates->renderMacro('_includes/forms', 'checkboxField', array(
      array(
        'label' => Craft::t('Display as graphic'),
        'instructions' => Craft::t('This will take the height restrictions off the buttons to allow for larger images.'),
        'id' => 'displayAsGraphic',
        'name' => 'displayAsGraphic',
        'class' => 'displayAsGraphic',
        'value' => 1,
        'checked' => $settings->displayAsGraphic
      )
    ));

    $displayFullwidth = craft()->templates->renderMacro('_includes/forms', 'checkboxField', array(
      array(
        'label' => Craft::t('Display full width'),
        'instructions' => Craft::t('Allow the button group to be fullwidth, useful for allowing larger graphics to be more responsive.'),
        'id' => 'displayFullwidth',
        'name' => 'displayFullwidth',
        'class' => 'displayFullwidth',
        'value' => 1,
        'checked' => $settings->displayFullwidth
      )
    ));

    return $displayAsGraphic . $displayFullwidth . $table;
  }

  // Protected Methods
  // =========================================================================

  /**
   * @inheritDoc BaseOptionsFieldType::getOptionsSettingsLabel()
   *
   * @return string
   */
  protected function getOptionsSettingsLabel()
  {
    return Craft::t('Button Options');
  }

  /**
   * @inheritDoc BaseSavableComponentType::defineSettings()
   *
   * @return array
   */
  protected function defineSettings()
  {
    return array_merge(parent::defineSettings(), array(
      'displayAsGraphic' => AttributeType::Bool,
      'displayFullwidth' => AttributeType::Bool,
      'options' => array(AttributeType::Mixed, 'default' => array())
    ));
  }
}
