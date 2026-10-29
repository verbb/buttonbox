<?php
namespace verbb\buttonbox\gql\types\generators;

use verbb\buttonbox\gql\types\Position;

use Craft;
use craft\gql\base\ObjectType;
use craft\gql\GqlEntityRegistry;

use GraphQL\Type\Definition\Type;

class PositionType
{
    // Static Methods
    // =========================================================================

    public static function generate(): ObjectType
    {
        $typeName = 'ButtonBoxPosition';

        return GqlEntityRegistry::getOrCreate($typeName, fn() => new Position([
            'name' => $typeName,
            'fields' => fn() => Craft::$app->getGql()->prepareFieldDefinitions([
                'label' => Type::string(),
                'value' => Type::string(),
                'valid' => Type::nonNull(Type::boolean()),
                'horizontal' => Type::string(),
                'vertical' => Type::string(),
                'x' => Type::int(),
                'y' => Type::int(),
                'row' => Type::int(),
                'column' => Type::int(),
                'disabled' => Type::nonNull(Type::boolean()),
            ], $typeName),
        ]));
    }
}
