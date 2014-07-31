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

class SupercoolFields_EmbedService extends BaseApplicationComponent
{

  private $settings = '';


  public function __construct()
  {
    // get plugin settings
    $plugin = craft()->plugins->getPlugin('supercoolFields');
    $this->settings = $plugin->getSettings();
  }


  public function get($url, $scripts = true, $twig = true)
  {

    $apiUrl = '';
    $provider = '';

    if ( $this->settings['embedlyApiKey'] != '' ) {
      $embedlyApiKey = $this->settings['embedlyApiKey'];
    } else {
      $embedlyApiKey = false;
    }


    // switch on the provider
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

      // add these params to the html after curling ?
      // &modestbranding=1&rel=0&showinfo=0&autoplay=0
    } elseif ( strpos($url, 'flickr') !== false ) { // flickr

      $provider = 'flickr';
      $apiUrl = 'https://www.flickr.com/services/oembed?url='.$url.'&format=json';

    } elseif ( strpos($url, 'soundcloud') !== false ) { // soundcloud

      $provider = 'soundcloud';
      $apiUrl = 'https://soundcloud.com/oembed?url='.$url.'&format=json';

    } elseif ( strpos($url, 'instagr') !== false ) { // instagram

      $provider = 'instagram';
      $apiUrl = 'https://api.instagram.com/oembed?url='.$url;

    } elseif ( strpos($url, 'pinterest') !== false && $embedlyApiKey ) { // pinterest

      $provider = 'pinterest';
      $apiUrl = 'https://api.embed.ly/1/oembed?key='.$embedlyApiKey.'&url='.$url;

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
    if ( $provider === 'flickr' || $provider === 'instagram' || $provider === 'pinterest' ) {

      if ( isset($decodedJSON['url']) && $decodedJSON['type'] == 'photo' ) {
        $data = '<img src="'.$decodedJSON['url'].'" width="'.$decodedJSON['width'].'" height="'.$decodedJSON['height'].'" class="embed  embed--'.$provider.'">';
      } else {
        return false;
      }

    } else {

      if ( isset($decodedJSON['html']) && ( ctype_space($decodedJSON['html']) === false || $decodedJSON['html'] !== '' ) ) {
        $data = '<div class="embed  embed--'.$provider.'">'.$decodedJSON['html'].'</div>';
      }

    }


    // thanks to https://github.com/A-P/Embedder for this bit!
    // set the encode html to output properly in Twig
    $charset = craft()->templates->getTwig()->getCharset();
    $twig_html = new \Twig_Markup($data, $charset);


    // check we haven't any errors or 404 etc
    if ( !isset($data) || strpos($data, '<html') !== false || isset($decodedJSON['errors']) || strpos($data, 'Not Found') !== false ) {
      return false;
    } else {
      if ( $twig && $twig_html ) {
        return $twig_html;
      } else {
        return $data;
      }
    }

  }

}
