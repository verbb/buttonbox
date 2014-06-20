function supercoolfieldsColumnsUpdate($e) {
  $('label', $e).removeClass('supercoolfields-columns-active');

  $('input:checked', $e).parent('label').addClass('supercoolfields-columns-active');
  $('input:checked', $e).parent('label').prevAll('label').addClass('supercoolfields-columns-active');
}

function supercoolfieldsColumnsRemoveHover($e) {
  $('label', $e).removeClass('supercoolfields-columns-hover');
}

function supercoolfieldsColumnsUpdateHover($e) {
  supercoolfieldsColumnsRemoveHover($e.parent('.supercoolfields-columns'));

  $e.addClass('supercoolfields-columns-hover');
  $e.prevAll('label').addClass('supercoolfields-columns-hover');
}


$(function(){

  // hovers
  $('.supercoolfields-columns label').on('mouseenter', function(){
    supercoolfieldsColumnsUpdateHover($(this));
  }).on('mouseleave', function(){
    supercoolfieldsColumnsRemoveHover($(this).parent('.supercoolfields-columns'));
  });

  // clicks
  $('.supercoolfields-columns').on('change', function(){
    supercoolfieldsColumnsUpdate($(this));
  });


  // on load state
  $(window).on('load',function(){
    $('.supercoolfields-columns').each(function(){
      supercoolfieldsColumnsUpdate($(this));
    });
  });

});
