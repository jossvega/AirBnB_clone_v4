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
    /*$('div.amenities h4').text(Object.values(myArray).join(', '));
    $('.filters h4').css({
      display: 'inline-block',
      width: '200px',
      height: '16px',
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis'
    });*/
  });
});
