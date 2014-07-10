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
  $('.supercoolfields-hovers label').on('mouseenter', function(){
    supercoolfieldsHoversUpdateHover($(this));
  }).on('mouseleave', function(){
    supercoolfieldsHoversRemoveHover($(this).parent('.supercoolfields-hovers'));
  });

  // clicks
  $('.supercoolfields-hovers').on('change', function(){
    supercoolfieldsHoversUpdate($(this));
  });


  // on load state
  $(window).on('load',function(){
    $('.supercoolfields-hovers').each(function(){
      supercoolfieldsHoversUpdate($(this));
    });
  });

});
