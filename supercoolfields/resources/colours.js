function supercoolfieldsInitColours(selector) {

  // cache elem
  var $elem = $(selector);


  // hide select
  var $select = $elem.find('select');


  // find and bind the trigger and menu
  var $menu = $elem.find('.supercoolfields-colours__menu'),
      $btn = $elem.find('.supercoolfields-colours__btn');

  $btn.on('click', function(e){

    e.preventDefault();

    if ( $menu.is(':visible') ) {
      $menu.hide();
    } else {
      $menu.show();
    }

  });


  // bind the options inside the menu and click the appropriate option in the actual select
  $elem.find('.supercoolfields-colours__option').on('click', function(e){

    $select.val($(this).data('sc-value'));

    $menu.hide();

    var $newSelectedOption = $elem.find('option:selected'),
        btnInnerHtml = '<div class="supercoolfields-colours__block" style="background:'+$newSelectedOption.attr('value')+';"></div>'+$newSelectedOption.text();

    $btn.html(btnInnerHtml);

    $elem.find('.supercoolfields-colours__option').removeClass('sel');
    $(this).addClass('sel');

  });




  // how to manage clicking off?
  //
  // $(document).on('click', function(e){
  //   if ( !$(this).parentsUntil('.supercoolfields-colours').length ) {
  //     $menu.hide();
  //   }
  // });

}
