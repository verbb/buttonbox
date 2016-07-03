
// Configure all triggers, based on type
function configureTriggers() {
  var $select, $checkbox, $textarea;
  $('#types-ButtonBox_Triggers-options tbody tr').each(function (i, tr) {
    // Get row elements
    $select   = $(tr).find('td.triggerType select');
    $checkbox = $(tr).find('td.newWindow input');
    $textarea = $(tr).find('td.triggerValue textarea');
    // Configure row
    if ('js' == $select.val()) {
      $checkbox.hide();
      $textarea.attr('placeholder', 'myFunction();');
    } else {
      $checkbox.show();
      $textarea.attr('placeholder', 'http://www.example.com');
    }
  });
}

// On page load
$(function () {
  configureTriggers();
  // When a trigger type changes
  $('#types-ButtonBox_Triggers-options').on('change', 'td.triggerType select', function () {
    configureTriggers();
  });
  // When a new row is added
  $('#types-ButtonBox_Triggers-options-field div.btn.add.icon').on('click', function () {
    configureTriggers();
  });
});