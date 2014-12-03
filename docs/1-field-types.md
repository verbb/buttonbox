---
title:  "Field types"
---

# Field Types

We’ve currently got five field-types.

1. [Buttons](#buttons)
2. [Colours](#colours)
3. [Text Size](#text-size)
4. [Stars](#starts)
5. [Width](#width)

## Buttons

Make your own button group with optional labels and icons. We’ve provided you with a set of icons for common use cases but any image can be used.

### Display as graphic

Toggle this on and Button Box will not restrict the height of the buttons to allow for larger images. For example you might want to allow the user to choose a layout:

![graphical buttons](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/graphic-buttons.jpg)

### Display full width

If you check this Button Box will allow the button group to flow full width, useful for allowing larger graphics to be more responsive.

### Button Options

![all the buttons](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/buttons-with-settings.jpg)

* __Option label:__ The name of your option (e.g. ‘Male’, ‘Female’, ‘On’, ‘Off’, ‘Cat’, or ‘Dog’ )
* __Show label?:__ Hide the label on output.
* __Value:__ This appears in your template.
* __Image URL:__ The path to your image. Image urls can be relative e.g. /admin/resources/buttonbox/images/align-left.png. Icons work best when they are 30 x 20px or less.
* __Default:__ Optionally choose one row to define as your default option for users.


#### Provided images

We have provided you with a set of images for useful things like alignment and columns. These can be found in `/buttonbox/resources/images` and can be referenced directly from the Image URL column in the field settings using the following pattern: `/<cpTrigger>/resources/buttonbox/images/<filename>` where `<cpTrigger>` is whatever the config value [`cpTrigger`](http://buildwithcraft.com/docs/config-settings#cpTrigger) is set to (default: ‘admin’) and `<filename>` is one of the following:

* ![align center](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/align-center.png) align-center.png
* ![align left](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/align-left.png) align-left.png
* ![align right](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/align-right.png) align-right.png
*  ![grid](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/grid.png) grid.png
* ![slider](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/slider.png) slider.png
* ![bold text](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-bold.png) text-bold.png
* ![light text](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-light.png) text-light.png
* ![text box](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-box.png) text-box.png
*  ![text](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text.png) text.png
* ![1 column](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/col-1.png) col-1.png
* ![2 columns](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/col-2.png) col-2.png
* ![3 columns](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/col-3.png) col-3.png
* ![1 text column](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-col-1.png) text-col-1.png
* ![2 text columns](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-col-2.png) text-col-2.png
* ![3 text columns](http://plugins.supercooldesign.co.uk/admin/resources/buttonbox/images/text-col-3.png) text-col-3.png

## Colours (with a 'U')

Create a select drop-down of colours.

![text size](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/colours.jpg)

* __Option Label:__ Name of your colour (e.g. 'Grey', 'Orange', or 'Mountain Honey Dew')
* __Value:__ This appears in your template and will most likely be a CSS class name
* __Valid CSS Colour:__ This creates the preview colour and just needs to be valid CSS (i.e. CSS colour names, Hex, RGB or RGBA values should all work for you).
* __Default:__ Optionally choose one row to define as your default option for users.


## Text Size

Give your users some preset text sizes.

![text size](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/text-size.jpg)

* __Option label:__ Give your size a name e.g. (e.g. ‘Normal’, ‘Large’, or ‘Small print’)
* __Value:__ This appears in your template and will most likely be a CSS class name, but could be a pixel or em value should you be that way inclined.
* __Pixel Size:__ This is the size the option will appear in your select menu – it does not necessarily need to correspond to the  font-size you want to use on the front-end.
* __Default:__ Optionally choose one row to define as your default option for users.


## Stars

Make your star ratings shine.
Simply choose how many stars you’d like to make your rating. No fuss, that’s it!

![star rating](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/star-rating.jpg)

(N.B. No half stars here. The laws of physics suggests that this is ridiculous)


## Width

Our idea for this is to allow users to select widths or columns on a layout – you’ll most likely want to use the values as classes in your templates to line up with your CSS grid system.
You are of course free to use this as you see fit and the generic nature of a row of empty boxes suggests that it could be used for a lot more – let us know what you come up with.

![width](http://s3-eu-west-1.amazonaws.com/supercoolplugins/Button-Box/width.jpg)

Each row you add, creates an extra box.
* __Value:__ This appears in your template and will most likely need to be a CSS class name.
* __Default:__ Optionally choose one row to define as your default option for users.
