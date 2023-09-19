# Buttons
The following options can be configured when creating the field.

### Display as graphic
Toggle this on and Button Box will not restrict the height of the buttons to allow for larger images. For example you might want to allow the user to choose a layout:

### Display full width 
If you check this Button Box will allow the button group to flow full width, useful for allowing larger graphics to be more responsive.

## Buttons 

- **Option label:** The name of your option (e.g. ‘Male’, ‘Female’, ‘On’, ‘Off’, ‘Cat’, or ‘Dog’)
- **Show label?:** Hide the label on output.
- **Value:** This appears in your template.
- **Image URL:** The path to your image. Image URLs are relative to your `@webroot` e.g. `/images/align-left.png` is `http://site.test/images/align-left.png`. Icons work best when they are 30 x 20px or less.
- **Default:** Optionally choose one row to define as your default option for users.

## Colours (with a 'U')
Create a select drop-down of colours.

- **Option Label:** Name of your colour (e.g. 'Grey', 'Orange', or 'Mountain Honey Dew')
- **Value:** This appears in your template and will most likely be a CSS class name
- **Valid CSS Colour:** This creates the preview colour and just needs to be valid CSS (i.e. CSS colour names, Hex, RGB or RGBA values should all work for you).
- **Default:** Optionally choose one row to define as your default option for users.

## Text Size
Give your users some preset text sizes.

- **Option label:** Give your size a name e.g. (e.g. ‘Normal’, ‘Large’, or ‘Small print’)
- **Value:** This appears in your template and will most likely be a CSS class name, but could be a pixel or em value should you be that way inclined.
- **Pixel Size:** This is the size the option will appear in your select menu – it does not necessarily need to correspond to the font-size you want to use on the front-end.
- **Default:** Optionally choose one row to define as your default option for users.

## Stars
Make your star ratings shine. Simply choose how many stars you’d like to make your rating. No fuss, that’s it!

(N.B. No half stars here. The laws of physics suggests that this is ridiculous)

## Width
Our idea for this is to allow users to select widths or columns on a layout – you’ll most likely want to use the values as classes in your templates to line up with your CSS grid system. You are of course free to use this as you see fit and the generic nature of a row of empty boxes suggests that it could be used for a lot more – let us know what you come up with.

Each row you add, creates an extra box.

- **Value:** This appears in your template and will most likely need to be a CSS class name.
- **Default:** Optionally choose one row to define as your default option for users.
