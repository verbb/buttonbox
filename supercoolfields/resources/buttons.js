function supercoolfieldsButtonsUpdate($e) {
  $('label', $e).removeClass('active');
  $('input:checked', $e).parent('label').addClass('active');
}

$(function(){

  // clicks
  $(document).on('change', '.supercoolfields-buttons', function(){
    supercoolfieldsButtonsUpdate($(this));
  });

});