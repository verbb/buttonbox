<?php
namespace verbb\buttonbox\console\controllers;

use verbb\buttonbox\ButtonBox;

use craft\helpers\Console;

use yii\console\Controller;
use yii\console\ExitCode;

class ConvertController extends Controller
{
    // Properties
    // =========================================================================

    public bool $apply = false;


    // Public Methods
    // =========================================================================

    public function options($actionID): array
    {
        return array_merge(parent::options($actionID), ['apply']);
    }

    public function optionAliases(): array
    {
        return array_merge(parent::optionAliases(), ['a' => 'apply']);
    }

    public function actionIndex(?string $handle = null): int
    {
        $plans = ButtonBox::$plugin->getConversions()->getPlans($handle);

        if (!$plans) {
            $this->stdout("No matching legacy Button Box fields were found.\n", Console::FG_YELLOW);

            return ExitCode::OK;
        }

        foreach ($plans as $plan) {
            $this->_printPlan($plan);
        }

        return array_filter($plans, fn(array $plan) => $plan['status'] === 'blocked') ? ExitCode::UNSPECIFIED_ERROR : ExitCode::OK;
    }

    public function actionField(string $handle): int
    {
        $plans = ButtonBox::$plugin->getConversions()->getPlans($handle);

        if (!$plans) {
            $this->stderr("No legacy Button Box field with the handle “{$handle}” was found.\n", Console::FG_RED);

            return ExitCode::DATAERR;
        }

        $plan = $plans[0];
        $this->_printPlan($plan);

        if ($plan['status'] !== 'ready') {
            return ExitCode::UNSPECIFIED_ERROR;
        }

        if (!$this->apply) {
            $this->stdout("Preview only. Re-run with --apply to save this conversion.\n", Console::FG_YELLOW);

            return ExitCode::OK;
        }

        ButtonBox::$plugin->getConversions()->convert($handle);
        $this->stdout("Converted “{$handle}”.\n", Console::FG_GREEN);

        return ExitCode::OK;
    }


    // Private Methods
    // =========================================================================

    private function _printPlan(array $plan): void
    {
        $color = $plan['status'] === 'ready' ? Console::FG_GREEN : Console::FG_RED;
        $this->stdout("{$plan['field']}: {$plan['status']}\n", $color);
        $this->stdout("  {$plan['source']} → {$plan['target']}\n");

        foreach ($plan['warnings'] as $warning) {
            $this->stdout("  Warning: {$warning}\n", Console::FG_YELLOW);
        }

        foreach ($plan['blockers'] as $blocker) {
            $this->stdout("  Blocker: {$blocker}\n", Console::FG_RED);
        }

        foreach ($plan['placements'] ?? [] as $placement) {
            $this->stdout("  Placement: layout {$placement['layoutId']}, {$placement['tab']}\n");
        }
    }
}
