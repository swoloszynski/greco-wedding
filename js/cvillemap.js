// Docs: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
google.maps.event.addDomListener(window, 'load', init);
function init() {
    var map1Options = {
        zoom: 15,
        center: new google.maps.LatLng(38.030489, -78.491537), // Charlottesville
        clickableIcons: true,
        styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    };

    var mapElement = document.getElementById('cvillemap1');
    var map1 = new google.maps.Map(mapElement, map1Options);

    var iconBase = 'img/icons/';
    var coordTaco = {lat: 38.024793, lng: -78.482911};
    var markerTacos = new google.maps.Marker({
        position: new google.maps.LatLng(coordTaco),
        map: map1,
        icon: iconBase + 'pin.png',
    });
    google.maps.event.addListener(markerTacos , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Brazo\'s Tacos',
        position: coordTaco,
        });
        infowindow.open(map1);
    });

    var coordBodosCorner = {lat: 38.035776, lng: -78.500627};
    var markerBodosCorner = new google.maps.Marker({
        position: coordBodosCorner,
        map: map1,
        icon: iconBase + 'pin.png',
    });
    google.maps.event.addListener(markerBodosCorner , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Bodo\'s Bagels',
        position: coordBodosCorner,
        });
        infowindow.open(map1);
    });

}
