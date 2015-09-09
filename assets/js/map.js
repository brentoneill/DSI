function initMap() {
  var myLatLng1 = {lat: 39.644863, lng: -78.761775};
  var myLatLng2 = {lat: 39.596348, lng: -77.805691};

  var map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 15,
    center: myLatLng1
  });

  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: myLatLng2
  });

  var marker = new google.maps.Marker({
    position: myLatLng1,
    map: map1,
    title: 'Document Solutions Inc.'
  });

  var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map2,
    title: 'Document Solutions Inc.'
  });
}
