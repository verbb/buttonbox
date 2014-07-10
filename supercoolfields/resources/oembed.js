var supercoolfieldsDelay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


function supercoolfieldsOembedRefresh($input) {
  var $spinner = $input.parent().find('.spinner'),
      $error = $input.parent().find('.error');
  $spinner.removeClass('hidden');
  $error.addClass('hidden');

  var url = $input.val(),
      $target = $input.parent().find('.supercoolfields-oembed-preview'),
      request = $.ajax({
        url: '/actions/supercoolFields/oembed/get',
        type: 'POST',
        data: { url : url },
        dataType: 'json'
      });

  request.done(function(msg) {
    if ( msg.success ) {
      $target.html(msg.html);
      $spinner.addClass('hidden');
    } else {
      $spinner.addClass('hidden');
      $error.removeClass('hidden');
    }
  });

  request.fail(function(jqXHR, textStatus) {
    $spinner.addClass('hidden');
    $error.removeClass('hidden');
  });

}


$(function(){

  $('.supercoolfields-oembed input').on('keyup', function(e){
    var $t = $(this);
    supercoolfieldsDelay(function(){
      supercoolfieldsOembedRefresh($t);
    }, 1000 );
  });

  $(window).on('load', function(){

    $('.supercoolfields-oembed input').each(function(i, elem){
      supercoolfieldsOembedRefresh($(elem));
    });

  });
});
