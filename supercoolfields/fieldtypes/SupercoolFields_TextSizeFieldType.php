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

/**
 *
 */
class SupercoolFields_TextSizeFieldType extends BaseOptionsFieldType
{
	/**
	 * Returns the type of field this is.
	 *
	 * @return string
	 */
	public function getName()
	{
		return Craft::t('Text Size');
	}


	/**
	 * Returns the field's input HTML.
	 *
	 * @param string $name
	 * @param mixed  $value
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

		craft()->templates->includeCssResource('supercoolfields/css/supercoolfields.css');
		craft()->templates->includeJsResource('supercoolfields/js/supercoolfields.js');

		craft()->templates->includeJs('new Craft.SupercoolFieldsFancyOptions("'.craft()->templates->namespaceInputId($name).'");');

		return craft()->templates->render('supercoolfields/textsize/field', array(
			'name'    => $name,
			'value'   => $value,
			'options' => $options
		));
	}


	/**
	* @inheritDoc BaseElementFieldType::getSettingsHtml()
	*
	* @return string|null
	*/
	public function getSettingsHtml()
	{
		$options = $this->getOptions();

		if (!$options)
		{
			// Give it a default row
			$options = array(
				array(
					'label' => 'Small',
					'value' => 'small',
					'pxVal' => '13'
				),
				array(
					'label' => 'Medium',
					'value' => 'medium',
					'pxVal' => '16',
					'default' => true
				),
				array(
					'label' => 'Large',
					'value' => 'large',
					'pxVal' => '24'
				),
				array(
					'label' => 'Mega',
					'value' => 'mega',
					'pxVal' => '36'
				)
			);
		}

		return craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label'        => $this->getOptionsSettingsLabel(),
				'instructions' => Craft::t('Define the available options.'),
				'id'           => 'options',
				'name'         => 'options',
				'addRowLabel'  => Craft::t('Add an option'),
				'cols'         => array(
					'label' => array(
						'heading'      => Craft::t('Option Label'),
						'type'         => 'singleline',
						'autopopulate' => 'value'
					),
					'value' => array(
						'heading'      => Craft::t('CSS Class'),
						'type'         => 'singleline',
						'class'        => 'code'
					),
					'pxVal' => array(
						'heading'      => Craft::t('Pixel Value'),
						'type'         => 'number'
					),
					'default' => array(
						'heading'      => Craft::t('Default?'),
						'type'         => 'checkbox',
						'class'        => 'thin'
					),
				),
				'rows' => $options
			)
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
		return Craft::t('Text Size Options');
	}


	/**
	* @inheritDoc BaseSavableComponentType::defineSettings()
	*
	* @return array
	*/
	protected function defineSettings()
	{
		return array(
			'options' => array(AttributeType::Mixed, 'default' => array())
		);
	}

}
