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

  public function get($url)
  {

    // make api url
    $apiUrl = '';

    if ( strpos($url, 'vimeo') !== false ) { // vimeo

      $provider = 'vimeo';
      $apiUrl = 'https://vimeo.com/api/oembed.json?url='.$url.'&byline=false&title=false&portrait=false&autoplay=false';

    } elseif ( strpos($url, 'twitter') !== false ) { // twitter

      $provider = 'twitter';
      $apiUrl = 'https://api.twitter.com/1/statuses/oembed.json?url='.$url;
      //.'&omit_script=true' - not sure why but when using this with twitter api seperate its not working

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

    // output the html part
    $output = ( isset($decodedJSON['html']) ? $decodedJSON['html'] : '' );

    if ( $output !== '' ) {
      return '<div class="oembed  oembed--'.$provider.'">'.$output.'</div>';
    } else {
      return false;
    }

  }

}
