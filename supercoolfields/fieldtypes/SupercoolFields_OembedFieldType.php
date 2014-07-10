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

class SupercoolFields_OembedFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Oembed');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('supercoolfields/oembed.css');
    craft()->templates->includeJsResource('supercoolfields/oembed.js');
    // craft()->templates->includeJsFile('//platform.twitter.com/widgets.js');

    $settings = $this->getSettings();

    return craft()->templates->render('supercoolfields/oembed/field', array(
      'name'  => $name,
      'value' => $value
    ));
  }

  // public function getSettingsHtml()
  // {
  //   return craft()->templates->render('supercoolfields/stars/field-settings', array(
  //     'settings' => $this->getSettings()
  //   ));
  // }

}
