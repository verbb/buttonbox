function supercoolfieldsHoversUpdate($e) {
  $('label', $e).removeClass('supercoolfields-hovers-active');

  $('input:checked', $e).parent('label').addClass('supercoolfields-hovers-active');
  $('input:checked', $e).parent('label').prevAll('label').addClass('supercoolfields-hovers-active');
}

function supercoolfieldsHoversRemoveHover($e) {
  $('label', $e).removeClass('supercoolfields-hovers-hover');
}

function supercoolfieldsHoversUpdateHover($e) {
  supercoolfieldsHoversRemoveHover($e.parent('.supercoolfields-hovers'));

  $e.addClass('supercoolfields-hovers-hover');
  $e.prevAll('label').addClass('supercoolfields-hovers-hover');
}


$(function(){

  // hovers
  $(document).on('mouseenter', '.supercoolfields-hovers label', function(){
    supercoolfieldsHoversUpdateHover($(this));
  });

  $(document).on('mouseleave', '.supercoolfields-hovers label', function(){
    supercoolfieldsHoversRemoveHover($(this).parent('.supercoolfields-hovers'));
  });

  // clicks
  $(document).on('change', '.supercoolfields-hovers', function(){
    supercoolfieldsHoversUpdate($(this));
  });


  // on load state
  $(window).on('load',function(){
    $('.supercoolfields-hovers').each(function(){
      supercoolfieldsHoversUpdate($(this));
    });
  });

});
