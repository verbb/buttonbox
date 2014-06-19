<?php
namespace Craft;

/**
 * SupercoolFields by Supercool
 *
 * @package   SupercoolFields
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */

class SupercoolFields_ColumnsFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Columns');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('supercoolfields/columns.css');

    $settings = $this->getSettings();

    return craft()->templates->render('starsupercoolfields/columns/field', array(
      'name'  => $name,
      'value' => $value,
      'numColumns' => $settings['numColumns']
    ));
  }

  public function getSettingsHtml()
  {
    return craft()->templates->render('supercoolfields/columns/field-settings', array(
      'settings' => $this->getSettings()
    ));
  }

  protected function defineSettings()
  {
    return array(
      'numColumns' => array(AttributeType::Number, 'min' => 2, 'default' => 5)
    );
  }

}
