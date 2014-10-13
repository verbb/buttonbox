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

class SupercoolFields_StarsFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Stars');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('supercoolfields/css/supercoolfields.css');
    craft()->templates->includeJsResource('supercoolfields/js/supercoolfields.js');
    craft()->templates->includeJs('new Craft.SupercoolFieldsStars("'.craft()->templates->namespaceInputId($name).'");');

    $settings = $this->getSettings();

    return craft()->templates->render('supercoolfields/stars/field', array(
      'name'  => $name,
      'value' => $value,
      'numStars' => $settings['numStars']
    ));
  }

  public function getSettingsHtml()
  {
    return craft()->templates->render('supercoolfields/stars/settings', array(
      'settings' => $this->getSettings()
    ));
  }

  protected function defineSettings()
  {
    return array(
      'numStars' => array(AttributeType::Number, 'min' => 2, 'default' => 5)
    );
  }

}
