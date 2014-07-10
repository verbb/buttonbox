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

class SupercoolFieldsVariable
{

  public function embed($url, $scripts = true)
  {

    if ( $html = craft()->supercoolFields_oembed->get($url, $scripts) ) {
      return $html;
    } else {
      return $url;
    }

  }

}
