//$(function(){
function map(){
    var mapCanvas = document.getElementById('map'),
        mapOptions = {
    center: new google.maps.LatLng(55.523, -0.12345),
    zoom: 5
};
    var map = new google.maps.Map(mapCanvas,mapOptions);        
}
   
//});