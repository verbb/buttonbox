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


/**
 * SupercoolFieldsFancyOptions Class
 */
Craft.SupercoolFieldsFancyOptions = Garnish.Base.extend(
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
    this.$menu = $elem.find('.menu');
    this.$btn = $elem.find('.btn');

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

    var newVal = $(ev.target).data('sc-value');

    this.$select.val(newVal);

    this.$menu.hide();


    this.updateField();

  },

  updateField: function()
  {

    // if textSize
    var $newSelectedOption = $elem.find('option:selected'),
        btnInnerHtml = '<span class="supercoolfields-textsize__label" style="font-size: '+$newSelectedOption.data('sc-pxval')+'px;">'+$newSelectedOption.text()+'</span>';

      $btn.html(btnInnerHtml);

      $elem.find('.supercoolfields-textsize__option').removeClass('sel');
      $(this).addClass('sel');

    // if colours
    var $newSelectedOption = $elem.find('option:selected'),
        btnInnerHtml = '<div class="supercoolfields-colours__block" style="background:'+$newSelectedOption.attr('value')+';"></div><div class="supercoolfields-colours__label">'+$newSelectedOption.text()+'</div>';

    $btn.html(btnInnerHtml);

    $elem.find('.supercoolfields-colours__option').removeClass('sel');
    $(this).addClass('sel');

  }

});


})(jQuery);
