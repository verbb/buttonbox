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

class SupercoolFields_OembedController extends BaseController
{

  public function actionGet()
  {
    // Only ajax post requests
    $this->requirePostRequest();
    $this->requireAjaxRequest();


    $url = craft()->request->getPost('url');

    if ( $html = craft()->supercoolFields_oembed->get($url) ) {
      $this->returnJson(array(
        'success' => true,
        'html' => $html
      ));
    } else {
      $this->returnJson(array(
        'success' => false
      ));
    }

  }

}
