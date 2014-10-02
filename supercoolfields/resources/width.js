function supercoolfieldsWidthUpdate($e) {
  $('label', $e).removeClass('active');

  $('input:checked', $e).parent('label').addClass('active');
  $('input:checked', $e).parent('label').prevAll('label').addClass('active');
}

function supercoolfieldsWidthRemoveHover($e) {
  $('label', $e).removeClass('supercoolfields-width--hover');
}

function supercoolfieldsWidthUpdateHover($e) {
  supercoolfieldsWidthRemoveHover($e.parent('.supercoolfields-width--hover'));

  $e.addClass('supercoolfields-width--hover');
  $e.prevAll('label').addClass('supercoolfields-width--hover');
}


$(function(){

  // hovers
  $(document).on('mouseenter', '.supercoolfields-width label', function(){
    supercoolfieldsWidthUpdateHover($(this));
  });

  $(document).on('mouseleave', '.supercoolfields-width label', function(){
    supercoolfieldsWidthRemoveHover($(this).parent('.supercoolfields-width'));
  });


  // clicks
  $(document).on('change', '.supercoolfields-width', function(){
    supercoolfieldsWidthUpdate($(this));
  });

});
