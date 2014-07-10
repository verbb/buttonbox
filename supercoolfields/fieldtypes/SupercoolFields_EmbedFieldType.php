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

class SupercoolFields_EmbedFieldType extends BaseFieldType
{

  public function getName()
  {
    return Craft::t('Embed');
  }

  public function getInputHtml($name, $value)
  {

    craft()->templates->includeCssResource('supercoolfields/embed.css');
    craft()->templates->includeJsResource('supercoolfields/embed.js');

    $settings = $this->getSettings();

    return craft()->templates->render('supercoolfields/embed/field', array(
      'name'  => $name,
      'value' => $value
    ));

  }

}
