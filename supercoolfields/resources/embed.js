var supercoolfieldsDelay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


function supercoolfieldsEmbedRefresh($input) {
  var $spinner = $input.parent().find('.spinner'),
      $error   = $input.parent().find('.error'),
      $success = $input.parent().find('.success');
  $spinner.removeClass('hidden');
  $error.addClass('hidden');
  $success.addClass('hidden');

  var url = $input.val(),
      $target = $input.parent().find('.supercoolfields-embed-preview'),
      request = $.ajax({
        url: '/actions/supercoolFields/embed/get',
        type: 'POST',
        data: { url : url },
        dataType: 'json'
      });

  request.done(function(msg) {
    if ( msg.success ) {
      $target.html(msg.html);
      $spinner.addClass('hidden');
      $error.addClass('hidden');
      $success.removeClass('hidden');
    } else {
      $spinner.addClass('hidden');
      $error.removeClass('hidden');
      $success.addClass('hidden');
    }
  });

  request.fail(function(jqXHR, textStatus) {
    $spinner.addClass('hidden');
    $error.removeClass('hidden');
    $success.addClass('hidden');
  });

}


$(function(){

  $(document).on('keyup', '.supercoolfields-embed input', function(e){
    var $t = $(this);
    supercoolfieldsDelay(function(){
      supercoolfieldsEmbedRefresh($t);
    }, 1000 );
  });

  $(window).on('load', function(){

    $('.supercoolfields-embed input').each(function(i, elem){
      supercoolfieldsEmbedRefresh($(elem));
    });

  });
});
