<?php
namespace verbb\buttonbox\fieldlayoutelements;

use craft\fieldlayoutelements\CustomField;

class ActionLinksField extends CustomField
{
    // Public Methods
    // =========================================================================

    public function alwaysRefresh(): bool
    {
        // Entry-dependent destinations must refresh after drafts and element changes.
        return true;
    }
}
