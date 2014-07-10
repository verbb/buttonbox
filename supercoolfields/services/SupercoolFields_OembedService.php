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

class SupercoolFields_OembedService extends BaseApplicationComponent
{

  public function get($url, $scripts = true)
  {

    // make api url
    $apiUrl = '';

    if ( strpos($url, 'vimeo') !== false ) { // vimeo

      $provider = 'vimeo';
      $apiUrl = 'https://vimeo.com/api/oembed.json?url='.$url.'&byline=false&title=false&portrait=false&autoplay=false';

    } elseif ( strpos($url, 'twitter') !== false ) { // twitter

      $provider = 'twitter';
      if ( $scripts ) {
        $apiUrl = 'https://api.twitter.com/1/statuses/oembed.json?url='.$url;
      } else {
        $apiUrl = 'https://api.twitter.com/1/statuses/oembed.json?url='.$url.'&omit_script=true';
      }

    } elseif ( strpos($url, 'youtu') !== false ) { // youtube

      $provider = 'youtube';
      $apiUrl = 'https://www.youtube.com/oembed?url='.$url.'&format=json';

      // add these params to the html after curling
      // &modestbranding=1&rel=0&showinfo=0&autoplay=0

    }

    // create curl resource
    $ch = curl_init();

    // set url
    curl_setopt($ch, CURLOPT_URL, $apiUrl);

    //return the transfer as a string
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    // $output contains the output string
    $output = curl_exec($ch);

    // close curl resource to free up system resources
    curl_close($ch);


    // decode returned json
    $decodedJSON = json_decode($output, true);

    // see if we have any html
    if ( isset($decodedJSON['html']) ) {
      $output = '<div class="oembed  oembed--'.$provider.'">'.$decodedJSON['html'].'</div>';
    } else {
      return false;
    }


    // thanks to https://github.com/A-P/Embedder for this bit!
    // set the encode html to output properly in Twig
    $charset = craft()->templates->getTwig()->getCharset();
    $twig_html = new \Twig_Markup($output, $charset);
    // end thanks

    if ( $twig_html !== '' ) {
      return $twig_html;
    } else {
      return false;
    }

  }

}
