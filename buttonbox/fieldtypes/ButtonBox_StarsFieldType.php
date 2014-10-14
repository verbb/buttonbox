<?php
namespace Craft;

/**
 * ButtonBox_Stars by Supercool
 *
 * @package   ButtonBox
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */

class ButtonBox_StarsFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Button Box - Stars');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('buttonbox/css/buttonbox.css');
    craft()->templates->includeJsResource('buttonbox/js/buttonbox.js');
    craft()->templates->includeJs('new Craft.ButtonBoxHovers("'.craft()->templates->namespaceInputId($name).'");');

    $settings = $this->getSettings();

    return craft()->templates->render('buttonbox/stars/field', array(
      'name'  => $name,
      'value' => $value,
      'numStars' => $settings['numStars']
    ));
  }

  public function getSettingsHtml()
  {
    return craft()->templates->render('buttonbox/stars/settings', array(
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
