<?php
namespace Craft;

/**
 * ButtonBox_TextSize by Supercool
 *
 * @package   ButtonBox
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */

class ButtonBox_TextSizeFieldType extends BaseOptionsFieldType
{
	/**
	 * Returns the type of field this is.
	 *
	 * @return string
	 */
	public function getName()
	{
		return Craft::t('Button Box - Text Size');
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

		craft()->templates->includeCssResource('buttonbox/css/buttonbox.css');
		craft()->templates->includeJsResource('buttonbox/js/buttonbox.js');

		craft()->templates->includeJs('new Craft.ButtonBoxFancyOptions("'.craft()->templates->namespaceInputId($name).'");');

		return craft()->templates->render('buttonbox/textsize/field', array(
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
					'label' => '',
					'value' => '',
					'pxVal' => ''
				)
			);
		}

		return craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label'        => $this->getOptionsSettingsLabel(),
				'instructions' => Craft::t('Pixel Size is optional and should be a single number.'),
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
						'heading'      => Craft::t('Value'),
						'type'         => 'singleline',
						'class'        => 'code'
					),
					'pxVal' => array(
						'heading'      => Craft::t('Pixel Size'),
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


	/**
	 * Returns the default field value.
	 *
	 * @return array|string|null
	 */
	protected function getDefaultValue()
	{

		$options = $this->getOptions();

		foreach ($options as $option)
		{

			if ( !empty($option['default']) )
			{
				return $option['value'];
			}

		}

		return $options[0]['value'];

	}


}
