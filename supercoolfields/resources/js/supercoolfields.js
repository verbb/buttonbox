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

})(jQuery);
