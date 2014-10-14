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
    this.$menu = this.$elem.find('.menu');
    this.$btn = this.$elem.find('.buttonbox__btn');

    this.addListener(this.$btn, 'click', 'toggleMenu');

    this.addListener(this.$menu.find('a'), 'click', 'onOptionClick');


  },

  toggleMenu: function(ev)
  {

    ev.preventDefault();

    if ( this.$menu.is(':visible') ) {

      this.$menu.hide();

    } else {

      this.$menu.css({ top : '9px' }).show();

      var topVal = (this.$elem.offset().top - this.$elem.find('.sel').offset().top) + 6;

      this.$menu.css({ top : topVal+'px' });

    }

  },

  onOptionClick: function(ev)
  {

    var $target = $(ev.currentTarget),
        newVal = $target.data('buttonbox-value');
        console.log(newVal);
    this.$select.val(newVal);

    this.$menu.hide();

    this._updateField($target);

  },

  _updateField: function($sel)
  {

    // get newly selected option
    var $newSelectedOption = this.$elem.find('option:selected');


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

    // update selected fake-option
    this.$elem.find('.sel').removeClass('sel');
    $sel.addClass('sel');

  }

});


})(jQuery);
