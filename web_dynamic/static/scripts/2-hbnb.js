const myArray = [];
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      const item = {};
      item.id = $(this).attr('data-id');
      item.name = $(this).attr('data-name');
      myArray[item.id] = item.name;
    } else {
      const item = {};
      item.id = $(this).attr('data-id');
      delete myArray[item.id];
    }
    $('div.amenities h4').text(Object.values(myArray).join(', '));
  });
});

// get status API local host 124.0.0.1
$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (`${data.status}` === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
