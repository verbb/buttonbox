(() => {
    // A classic entry also works in Craft slide-outs; ESM caches the shared runtime.
    const url = new URL('input.js', document.currentScript.src);
    Craft.ButtonBoxReady ??= import(/* @vite-ignore */ url.href);
})();
