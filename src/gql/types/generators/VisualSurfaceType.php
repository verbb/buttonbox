<?php
namespace verbb\buttonbox\gql\types\generators;

use verbb\buttonbox\gql\types\VisualSurface;

use Craft;
use craft\gql\base\ObjectType;
use craft\gql\GqlEntityRegistry;

use GraphQL\Type\Definition\Type;

class VisualSurfaceType
{
    // Static Methods
    // =========================================================================

    public static function generate(): ObjectType
    {
        $typeName = 'ButtonBoxVisualSurface';

        return GqlEntityRegistry::getOrCreate($typeName, fn() => new VisualSurface([
            'name' => $typeName,
            'fields' => fn() => Craft::$app->getGql()->prepareFieldDefinitions([
                'mode' => Type::string(),
                'value' => Type::string(),
                'from' => Type::string(),
                'to' => Type::string(),
                'angle' => Type::float(),
                'radius' => Type::float(),
                'size' => Type::float(),
                'aspectRatio' => Type::string(),
            ], $typeName),
        ]));
    }
}
