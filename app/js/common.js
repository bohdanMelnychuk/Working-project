"use strict"
function myMap(){
    var myCenter = new google.maps.LatLng(49.858742,24.020850);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
    center: myCenter,
    zoom: 5
};
    var  map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position:myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}