<?php
namespace verbb\buttonbox\gql\resolvers;

use craft\gql\base\Resolver;

use GraphQL\Type\Definition\ResolveInfo;

class WidthResolver extends Resolver
{
    // Static Methods
    // =========================================================================

    public static function resolve(mixed $source, array $arguments, mixed $context, ResolveInfo $resolveInfo): mixed
    {
        $value = $source->{$resolveInfo->fieldName};

        return !empty($arguments['label']) ? $value->label : $value->value;
    }
}
