/**
 * @author    Supercool Ltd <josh@supercooldesign.co.uk>
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @see       http://supercooldesign.co.uk
 */

(function($){


/**
 * ButtonBoxButtons Class
 */
Craft.ButtonBoxButtons = Garnish.Base.extend(
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
 * ButtonBoxHovers Class
 */
Craft.ButtonBoxHovers = Garnish.Base.extend(
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
    Garnish.$win.trigger('load');

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

    var $target = $(ev.currentTarget);
    $target.addClass('hover');
    $target.prevAll('label').addClass('hover');

  }

});


/**
 * ButtonBoxFancyOptions Class
 */
Craft.ButtonBoxFancyOptions = Garnish.Base.extend(
{

  id: null,

  $elem: null,
  $select: null,
  $menu: null,
  $btn: null,

  init: function(id)
  {

    this.id = id;
    this.$elem = $('#'+this.id);
    this.$select = this.$elem.find('select');
    this.$btn = this.$elem.find('.buttonbox__btn');

    var menuBtn = new Garnish.MenuBtn(this.$btn);
    this.$menu = menuBtn.menu.$container;
    menuBtn.menu.settings.onOptionSelect = $.proxy(this, 'onMenuOptionSelect');

  },

  onMenuOptionSelect: function(option)
  {
    var $option = $(option),
        newVal = $option.data('buttonbox-value');

    this.$select.val(newVal);

    this._updateField();

    // update selected option in menu
    this.$menu.find('.sel').removeClass('sel');
    $option.addClass('sel');

  },

  _updateField: function()
  {

    // get newly selected option from the <select>
    var $newSelectedOption = this.$select.find('option:selected');


    // work out what kind of field it is and make button markup
    if ( this.$elem.hasClass('buttonbox-textsize') )
    {

      var btnInnerHtml = '<span style="font-size: '+$newSelectedOption.data('buttonbox-pxval')+'px;">'+$newSelectedOption.text()+'</span>';

    }
    else if ( this.$elem.hasClass('buttonbox-colours') )
    {

      var btnInnerHtml = '<div class="buttonbox-colours__block" style="background:'+$newSelectedOption.data('buttonbox-csscolour')+';"></div><div class="buttonbox-colours__label">'+$newSelectedOption.text()+'</div>';

    }

    // update button
    this.$btn.html(btnInnerHtml);

  }

});


})(jQuery);
