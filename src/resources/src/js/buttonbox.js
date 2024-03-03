// ==========================================================================

// Table Maker Plugin for Craft CMS
// Author: Verbb - https://verbb.io/

// ==========================================================================

(function($) {

Craft.ButtonBoxButtons = Garnish.Base.extend({
    id: null,
    $elem: null,

    init: function(id) {
        this.id = id;
        this.$elem = $('#' + this.id);

        this.addListener(this.$elem, 'change', 'update');
    },

    update: function() {
        this.$elem.find('label').removeClass('active');
        this.$elem.find('input:checked').parent('label').addClass('active');
    },
});

Craft.ButtonBoxHovers = Garnish.Base.extend({
    id: null,
    $elem: null,
    $labels: null,
    $cancel: null,

    init: function(id) {
        this.id = id;
        this.$elem = $('#' + this.id);
        this.$labels = this.$elem.find('label');
        this.$cancel = this.$elem.find('.buttonbox-stars__cancel');

        this.addListener(this.$labels, 'mouseenter', 'updateHover');
        this.addListener(this.$labels, 'mouseleave', 'removeHover');
        this.addListener(this.$cancel, 'click', 'cancelStars');
        this.addListener(this.$elem, 'click', 'update');
        this.addListener(Garnish.$win, 'load', 'update');
        Garnish.$win.trigger('load');
    },

    cancelStars: function() {
        this.$elem.find('input').prop('checked', false);
        this.$elem.find('input:first').prop('checked', true);
    },

    update: function() {
        this.$elem.find('label').removeClass('active');

        this.$elem.find('input:checked').parent('label').addClass('active');
        this.$elem.find('input:checked').parent('label').prevAll('label').addClass('active');
    },

    removeHover: function() {
        this.$elem.find('label').removeClass('hover');
    },

    updateHover: function(ev) {
        this.removeHover();

        var $target = $(ev.currentTarget);
        $target.addClass('hover');
        $target.prevAll('label').addClass('hover');
    },
});


Craft.ButtonBoxFancyOptions = Garnish.Base.extend({
    id: null,
    $elem: null,
    $select: null,
    $menu: null,
    $btn: null,

    init: function(id) {
        this.id = id;
        this.$elem = $('#' + this.id);
        this.$select = this.$elem.find('select');
        this.$btn = this.$elem.find('.menubtn');

        // Give it a second to resolve properly, particularly for Matrix/Super Table/Neo blocks
        setTimeout(() => {
            var menuBtn = this.$btn.data('menubtn');

            if (menuBtn && menuBtn.menu) {
                this.$menu = menuBtn.menu.$container;

                if (this.$menu) {
                    menuBtn.menu.settings.onOptionSelect = $.proxy(this, 'onMenuOptionSelect');
                }
            }
        }, 100);
    },

    onMenuOptionSelect: function(option) {
        var $option = $(option),
        newVal = $option.data('buttonbox-value');

        // Update the jQuery value and attribute so that Craft detects a change
        this.$select.val(newVal);
        this.$select.attr('value', newVal);

        this._updateField();

        // update selected option in menu
        this.$menu.find('.sel').removeClass('sel');
        $option.addClass('sel');
    },

    _updateField: function() {
        // get newly selected option from the <select>
        var $newSelectedOption = this.$select.find('option:selected');

        // work out what kind of field it is and make button markup
        if (this.$elem.hasClass('buttonbox-textsize')) {
            var btnInnerHtml = '<span style="font-size: ' + $newSelectedOption.data('buttonbox-pxval') + 'px;">' + $newSelectedOption.text() + '</span>';
        } else if (this.$elem.hasClass('buttonbox-colours')) {
            var btnInnerHtml = '<div class="buttonbox-colours__block" style="background:' + $newSelectedOption.data('buttonbox-csscolour') + ';"></div><div class="buttonbox-colours__label">' + $newSelectedOption.text() + '</div>';
        }

        this.$btn.html(btnInnerHtml);
    },
});

})(jQuery);
