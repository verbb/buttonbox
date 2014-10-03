function supercoolfieldsInitTextSize(selector) {

  // cache elem
  var $elem = $(selector);


  // hide select
  var $select = $elem.find('select');


  // find and bind the trigger and menu
  var $menu = $elem.find('.supercoolfields-textsize__menu'),
      $btn = $elem.find('.supercoolfields-textsize__btn');

  $btn.on('click', function(e){

    e.preventDefault();

    if ( $menu.is(':visible') ) {

      $menu.hide();

    } else {

      var topVal = ($elem.find('.supercoolfields-textsize__option.sel').parent('li').prevAll().length * -28) + 9;

      $menu.css({
        top : topVal + 'px'
      }).show();

    }

  });


  // bind the options inside the menu and click the appropriate option in the actual select
  $elem.find('.supercoolfields-textsize__option').on('click', function(e){

    $select.val($(this).data('sc-value'));

    $menu.hide();

    var $newSelectedOption = $elem.find('option:selected'),
        btnInnerHtml = '<span class="supercoolfields-textsize__label" style="font-size: '+$newSelectedOption.data('sc-pxval')+'px;">'+$newSelectedOption.text()+'</span>';

    $btn.html(btnInnerHtml);

    $elem.find('.supercoolfields-textsize__option').removeClass('sel');
    $(this).addClass('sel');

  });

}
