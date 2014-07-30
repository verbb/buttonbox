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

class SupercoolFieldsPlugin extends BasePlugin
{

  public function getName()
  {
    return Craft::t('SupercoolFields');
  }

  public function getVersion()
  {
    return '0.1';
  }

  public function getDeveloper()
  {
    return 'Supercool';
  }

  public function getDeveloperUrl()
  {
    return 'http://www.supercooldesign.co.uk';
  }

  protected function defineSettings()
  {
    return array(
      'embedlyApiKey' => array(AttributeType::String, 'required' => true)
    );
  }

  public function getSettingsHtml()
  {
    return craft()->templates->render('supercoolFields/settings', array(
      'settings' => $this->getSettings()
    ));
  }

}
