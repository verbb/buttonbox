<?php
namespace verbb\buttonbox\models;

use verbb\buttonbox\fields\VisualChoice;

use craft\base\Model;

class OptionSet extends Model
{
    // Properties
    // =========================================================================

    public ?string $uid = null;
    public string $name = '';
    public string $handle = '';
    public array $options = [];
    public string $presentation = 'segmented';
    public int $columns = 3;
    public string $iconSize = 'medium';
    public string $imageSize = 'auto';
    public string $imageFit = 'cover';
    public array $appearance = [];


    // Public Methods
    // =========================================================================

    public function validateOptions(): void
    {
        $field = $this->createField();
        $field->validate(['options']);

        foreach ($field->getErrors('options') as $error) {
            $this->addError('options', $error);
        }
    }

    public function validateAppearance(): void
    {
        $field = $this->createField();
        $field->validate(['appearance']);
        $this->addErrors(['appearance' => $field->getErrors('appearance')]);
    }

    public function createField(): VisualChoice
    {
        return new VisualChoice([
            'options' => $this->options,
            'presentation' => $this->presentation,
            'columns' => $this->columns,
            'iconSize' => $this->iconSize,
            'imageSize' => $this->imageSize,
            'imageFit' => $this->imageFit,
            'appearance' => $this->appearance,
        ]);
    }

    public function toConfig(): array
    {
        return [
            'name' => $this->name,
            'handle' => $this->handle,
            'options' => $this->options,
            'presentation' => $this->presentation,
            'columns' => $this->columns,
            'iconSize' => $this->iconSize,
            'imageSize' => $this->imageSize,
            'imageFit' => $this->imageFit,
            'appearance' => $this->appearance,
        ];
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        return [
            [['uid'], 'match', 'pattern' => '/^[a-f0-9-]{36}$/'],
            [['name', 'handle'], 'trim'],
            [['name', 'handle'], 'required'],
            [['name', 'handle'], 'string', 'max' => 255],
            [['handle'], 'match', 'pattern' => '/^[a-zA-Z][a-zA-Z0-9_\-]*$/'],
            [['presentation'], 'in', 'range' => VisualChoice::PRESENTATIONS],
            [['columns'], 'integer', 'min' => 1, 'max' => 6],
            [['iconSize'], 'in', 'range' => ['small', 'medium', 'large']],
            [['imageSize'], 'in', 'range' => ['auto', 'small', 'medium', 'large']],
            [['imageFit'], 'in', 'range' => ['contain', 'cover']],
            [['options'], 'validateOptions', 'skipOnEmpty' => false],
            [['appearance'], 'validateAppearance', 'skipOnEmpty' => false],
        ];
    }
}
