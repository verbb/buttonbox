/**
 * @author    Supercool Ltd <josh@supercooldesign.co.uk>
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @see       http://supercooldesign.co.uk
 */

(function($){


/**
 * SupercoolFieldsButtons Class
 */
Craft.SupercoolFieldsButtons = Garnish.Base.extend(
{

  id: null,
  $elem: null,

  init: function(id)
  {

    this.id = id;
    this.$elem = $('#'+this.id);

    this.addListener(this.$elem, 'change', 'update');

  },

  update: function()
  {

    this.$elem.find('label').removeClass('active');
    this.$elem.find('input:checked').parent('label').addClass('active');

  }

});


/**
 * SupercoolFieldsStars Class
 */
Craft.SupercoolFieldsStars = Garnish.Base.extend(
{

  id: null,
  $elem: null,
  $labels: null,

  init: function(id)
  {

    this.id = id;
    this.$elem = $('#'+this.id);
    this.$labels = this.$elem.find('label');

    this.addListener(this.$labels, 'mouseenter', 'updateHover');
    this.addListener(this.$labels, 'mouseleave', 'removeHover');
    this.addListener(this.$elem, 'click', 'update');
    this.addListener(Garnish.$win, 'load', 'update');

  },

  update: function()
  {

    this.$elem.find('label').removeClass('active');

    this.$elem.find('input:checked').parent('label').addClass('active');
    this.$elem.find('input:checked').parent('label').prevAll('label').addClass('active');

  },

  removeHover: function()
  {
    this.$elem.find('label').removeClass('hover');
  },

  updateHover: function(ev)
  {

    this.removeHover();

    $(ev.target).addClass('hover');
    $(ev.target).prevAll('label').addClass('hover');

  }

});


})(jQuery);
