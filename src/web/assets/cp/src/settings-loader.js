(() => {
    // A classic entry also works in Craft slide-outs; ESM caches the shared runtime.
    const url = new URL('settings.js', document.currentScript.src);
    Craft.ButtonBoxSettingsReady ??= import(/* @vite-ignore */ url.href);
})();
