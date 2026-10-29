<?php
namespace verbb\buttonbox\gql\types;

use craft\gql\base\ObjectType;

use GraphQL\Type\Definition\ResolveInfo;

class VisualSurface extends ObjectType
{
    // Protected Methods
    // =========================================================================

    protected function resolve(mixed $source, array $arguments, mixed $context, ResolveInfo $resolveInfo): mixed
    {
        return $source->{$resolveInfo->fieldName};
    }
}
