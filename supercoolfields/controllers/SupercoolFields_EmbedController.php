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

class SupercoolFields_EmbedController extends BaseController
{

  public function actionGet()
  {
    // Only ajax post requests
    $this->requirePostRequest();
    $this->requireAjaxRequest();


    $url = craft()->request->getPost('url');
    $html = craft()->supercoolFields_embed->get($url, true, false);

    if ( $html ) {
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
