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
    craft()->templates->includeJsResource('supercoolfields/columns.js');

    $settings = $this->getSettings();

    return craft()->templates->render('supercoolfields/columns/field', array(
      'name'  => $name,
      'value' => $value,
      'gridSize' => $settings['gridSize'],
      'totalColumns' => $settings['totalColumns']
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
      'gridSize' => array(AttributeType::Number, 'min' => 1, 'default' => 3),
      'totalColumns' => array(AttributeType::Number, 'min' => 2, 'default' => 12)
    );
  }

}
