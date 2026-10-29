// Craft owns asset search, pagination and source visibility. Resolve only the selected image.
export function chooseAssetImage(trigger, onSelect) {
    if (trigger.disabled) return;
    const modal = Craft.createElementSelectorModal('craft\\elements\\Asset', {
        criteria: { kind: 'image' },
        multiSelect: false,
        closeOtherModals: false,
        triggerElement: trigger,
        onSelect: async (elements) => {
            if (!elements.length || !trigger.isConnected) return;
            trigger.disabled = true;
            try {
                const { data } = await Craft.sendActionRequest('POST', 'buttonbox/option-sets/asset-image', { data: { id: elements[0].id } });
                if (trigger.isConnected) onSelect(data.url);
            } catch (error) {
                Craft.cp.displayError(error.response?.data?.message || Craft.t('buttonbox', 'Image unavailable. Choose an image with a public URL.'));
            } finally {
                trigger.disabled = false;
            }
        },
        onHide: () => modal.destroy(),
    });
}
