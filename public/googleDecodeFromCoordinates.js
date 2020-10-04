let data = [
  {
    "Latitude": 21.323601,
    "Longitude": -158.088593,
    "UTC": "2020-09-21T23:00",
    "Parameter": "PM2.5",
    "Unit": "UG/M3",
    "AQI": 6,
    "Category": 1
  },
  {
    "Latitude": 21.392834,
    "Longitude": -157.969131,
    "UTC": "2020-09-21T23:00",
    "Parameter": "PM2.5",
    "Unit": "UG/M3",
    "AQI": 16,
    "Category": 1
  },
  {
    "Latitude": 21.3039,
    "Longitude": -157.8711,
    "UTC": "2020-09-21T23:00",
    "Parameter": "PM2.5",
    "Unit": "UG/M3",
    "AQI": 13,
    "Category": 1
  },
  {
    "Latitude": 21.310301,
    "Longitude": -157.858093,
    "UTC": "2020-09-21T23:00",
    "Parameter": "PM2.5",
    "Unit": "UG/M3",
    "AQI": 5,
    "Category": 1
  }
]

let map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: { lat: 40.731, lng: -73.997 }
});

let geocoder = new google.maps.Geocoder;
let infowindow = new google.maps.InfoWindow;
geocodeLatLng(geocoder, map, infowindow);

function geocodeLatLng(geocoder, map, infowindow) {
  // let input = document.getElementById('latlng').value;
  let latlng = { lat: data[0].Latitude, lng: data[0].Longitude };
  geocoder.geocode({ 'location': latlng }, function (results, status) {
    if (status === 'OK') {
      if (results[0]) {
        map.setZoom(11);
        let marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[0].formatted_address);
        console.log(results[0])
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}