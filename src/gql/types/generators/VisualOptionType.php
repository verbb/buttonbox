<?php
namespace verbb\buttonbox\gql\types\generators;

use verbb\buttonbox\gql\types\VisualOption;

use Craft;
use craft\gql\base\ObjectType;
use craft\gql\GqlEntityRegistry;

use GraphQL\Type\Definition\Type;

class VisualOptionType
{
    // Static Methods
    // =========================================================================

    public static function generate(): ObjectType
    {
        $typeName = 'ButtonBoxVisualOption';

        return GqlEntityRegistry::getOrCreate($typeName, fn() => new VisualOption([
            'name' => $typeName,
            'fields' => fn() => Craft::$app->getGql()->prepareFieldDefinitions([
                'label' => Type::string(),
                'value' => Type::string(),
                'selected' => Type::nonNull(Type::boolean()),
                'valid' => Type::nonNull(Type::boolean()),
                'icon' => Type::string(),
                'color' => Type::string(),
                'description' => Type::string(),
                'imageUrl' => Type::string(),
                'imageAlt' => Type::string(),
                'category' => Type::string(),
                'disabled' => Type::nonNull(Type::boolean()),
                'explanation' => Type::string(),
                'surface' => VisualSurfaceType::generate(),
            ], $typeName),
        ]));
    }
}
