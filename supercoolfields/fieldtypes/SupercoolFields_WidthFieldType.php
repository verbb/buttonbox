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

class SupercoolFields_WidthFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Width');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('supercoolfields/width.css');
    craft()->templates->includeJsResource('supercoolfields/fields.js');

    $settings = $this->getSettings();

    if ( empty($value) ) {
      $value = $settings['defaultWidth'];
    }

    return craft()->templates->render('supercoolfields/width/field', array(
      'name'         => $name,
      'value'        => $value,
      'columns'      => $settings['columns']
    ));
  }

  public function getSettingsHtml()
  {
    return craft()->templates->render('supercoolfields/width/field-settings', array(
      'settings' => $this->getSettings()
    ));
  }

  protected function defineSettings()
  {
    return array(
      'columns' => array(AttributeType::Number, 'min' => 2, 'default' => 3),
      'defaultWidth' => array(AttributeType::Number, 'min' => 2, 'default' => 2)
    );
  }

}
