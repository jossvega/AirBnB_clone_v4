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

// get status API localhost 127.0.0.1
$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (`${data.status}` === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  data: '{}',
  ContentType: 'application/json',
  dataType: 'json',
  success: function (data) {
    $('section.places').append(
      data.map((place) => {
        return `<article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guests</div>
                    <div class="number_rooms">${place.number_rooms}Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
            </div>
            <div class="user">
                    <b>Owner:</b> ${place.user.first_name} ${place.user.last_name}
                  </div>
                  <div class="description">
                    ${place.description}
                  </div>
          </article>`;
      })
    );
  }
});
