<?php
namespace verbb\buttonbox\gql\types;

use craft\gql\base\ObjectType;

use GraphQL\Type\Definition\ResolveInfo;

class Position extends ObjectType
{
    // Protected Methods
    // =========================================================================

    protected function resolve(mixed $source, array $arguments, mixed $context, ResolveInfo $resolveInfo): mixed
    {
        return $source->{$resolveInfo->fieldName};
    }
}
