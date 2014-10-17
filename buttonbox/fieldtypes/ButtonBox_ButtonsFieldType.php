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
      'options' => $options
    ));
  }

  /**
   * @inheritDoc BaseElementFieldType::getSettingsHtml()
   *
   * @return string|null
   */
  public function getSettingsHtml()
  {
    $options = $this->getOptions();

    if (!$options)
    {
      // Give it a default row
      $options = array(
        array(
          'label' => 'Align Left',
          'showLabel' => false,
          'value' => 'left',
          'imagePath' => '/admin/resources/buttonbox/images/align-left.png',
          'default' => true
        ),
        array(
          'label' => 'Align Center',
          'showLabel' => false,
          'value' => 'center',
          'imagePath' => '/admin/resources/buttonbox/images/align-center.png'
        ),
        array(
          'label' => 'Align Right',
          'showLabel' => false,
          'value' => 'right',
          'imagePath' => '/admin/resources/buttonbox/images/align-right.png'
        )
      );
    }

    return craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
      array(
        'label'        => $this->getOptionsSettingsLabel(),
        'instructions' => Craft::t('Define the available options.'),
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
          'imagePath' => array(
            'heading'      => Craft::t('Image Path'),
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
    return array(
      'options' => array(AttributeType::Mixed, 'default' => array())
    );
  }
}
