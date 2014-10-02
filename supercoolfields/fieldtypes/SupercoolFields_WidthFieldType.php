<?php
namespace Craft;

/**
 * SupercoolFields by Supercool
 *
 * Modified from the original DropdownFieldType class
 *
 * @package   SupercoolFields
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */
class SupercoolFields_WidthFieldType extends BaseOptionsFieldType
{
	// Public Methods
	// =========================================================================

	/**
	 * @inheritDoc IComponentType::getName()
	 *
	 * @return string
	 */
	public function getName()
	{
		return Craft::t('Width');
	}

 /**
  * @inheritDoc IFieldType::getInputHtml()
  *
  * @param string $name
  * @param mixed  $value
  *
  * @return string
  */
  public function getInputHtml($name, $value)
  {
    $options = $this->getTranslatedOptions();

    // If this is a new entry, look for a default option
    if ($this->isFresh())
    {
      $value = $this->getDefaultValue();
    }

    craft()->templates->includeCssResource('supercoolfields/width.css');
    craft()->templates->includeJsResource('supercoolfields/width.js');

    // ping all the elems here to work with Matrix etc
    craft()->templates->includeJs("supercoolfieldsWidthUpdate($('.supercoolfields-width'));");

    return craft()->templates->render('supercoolfields/width/field', array(
      'name'    => $name,
      'value'   => $value,
      'options' => $options
    ));
  }

	// Protected Methods
	// =========================================================================

	/**
	 * @inheritDoc BaseOptionsFieldType::getOptionsSettingsLabel()
	 *
	 * @return string
	 */
	protected function getOptionsSettingsLabel()
	{
		return Craft::t('Width Options');
	}
}
