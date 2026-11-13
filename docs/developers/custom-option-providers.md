# Custom Option Providers

Use a PHP option provider when a Visual Choice or Visual Multi-Choice field’s choices come from application code. For example, a project module can supply a list of publishing channels from its own configuration. Use an [option set](../feature-tour/option-sets.md) when administrators should manage the shared choices in the control panel.

## Setting Up the Field

Create or edit a Visual Choice or Visual Multi-Choice field and set **Options Type** to **Dynamic (PHP)**. Choose its presentation and appearance, then save the field and add it to the relevant field layout.

Register a listener in an existing module or plugin using the [`defineVisualOptions` example](events.md#the-definevisualoptions-event). Change `publishingChannel` to your field’s handle and replace the example choices with the options your application supplies. Registering on `BaseVisualOptionsField` covers both visual field types. Checking the handle limits the listener to the intended field.

The listener assigns its choices to `$event->options`. It runs only for fields using Dynamic (PHP). Craft’s inherited [`defineOptions` event](events.md#the-defineoptions-event) can make a further adjustment after the provider has returned its choices.

## Defining the Choices

Return the same [option definition](option-data.md#defining-options) used by Custom options and option sets. Each choice needs a unique label and stable string value. Add descriptions, icons, colours, images or surface metadata when they help authors recognise the choice.

For the publishing-channel example, store identities such as `editorial`, `commerce` and `support`. Labels can change without changing those identities. Content stores the selected values, so keep the provider’s values deterministic across requests and environments.

If the provider stops returning a stored identity, the field retains that value as unavailable and reports a validation error on the next element save. Renaming or removing a choice therefore needs a plan for any existing selections.

## Handling Context

The event supplies the current field value and an element when one is available. Handle a null element: options can be resolved during field inspection or settings previews without an entry context. Keep the listener safe to call more than once and avoid changing content while supplying choices.

Dynamic options are supplied through PHP events, not Twig templates. The settings preview cannot provide an entry context, so verify any context-dependent choices while editing an entry. See the [event payload table](events.md#the-definevisualoptions-event) for property types and timing.

## Checking the Result

Open an entry containing the field and confirm the expected labels and visuals appear. Select a choice, save the entry and reopen it to check that the stored identity still resolves. For Visual Multi-Choice, also check the configured minimum and maximum selections.

Test an empty optional field and a stored value that the provider no longer returns. If the choices depend on the element, check representative entries and a field-settings preview so the null-context path is covered too.
