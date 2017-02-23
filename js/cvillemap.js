// Docs: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var makeMapMarker = function (map, coord, labelText, labelHorizOffset, labelVertOffset = 35) {
    return new google.maps.Marker({
        position: new google.maps.LatLng(coord),
        map: map,
        clickable: false,
        icon: {
            url: 'img/pin.png',
            labelOrigin: new google.maps.Point(
                labelHorizOffset,
                labelVertOffset
            )
        },
        label: {
            text: labelText,
            fontSize: '16px',
            fontWeight: 'bold'
        }
    });
};

google.maps.event.addDomListener(window, 'load', init);
function init() {
    var map1Options = {
        zoom: 15,
        // Charlottesville
        center: new google.maps.LatLng(38.032505, -78.488573),
        clickableIcons: true,
        styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    };

    var mapElement = document.getElementById('cvillemap1');
    var map1 = new google.maps.Map(mapElement, map1Options);

    // Breakfast
    var coordTaco = {lat: 38.024793, lng: -78.482911};
    var labelTaco = 'Brazo\'s Tacos';
    var markerTacos = makeMapMarker(map1, coordTaco, labelTaco, 70);

    var coordBodosCorner = {lat: 38.035776, lng: -78.500627};
    var labelBodosCorner = 'Bodo\'s Bagels';
    var markerBodosCorner = makeMapMarker(map1, coordBodosCorner,
        labelBodosCorner, 70, 30);

    // Lunch
    var coordAce = {lat: 38.038023, lng: -78.484906};
    var labelAce = 'Ace Biscuit & Barbecue';
    var markerAce = makeMapMarker(map1, coordAce, labelAce, 107);

    var coordPeterChang = {lat: 38.055223, lng: -78.500523};
    var labelPeterChang = 'Peter Chang China Grill';
    var markerPeterChang = makeMapMarker(map1, coordPeterChang,
        labelPeterChang, 105);

    // Drinks
    var coordWhiskeyJar = {lat: 38.031402, lng: -78.482780};
    var labelWhiskeyJar = 'The Whiskey Jar';
    var markerWhiskeyJar = makeMapMarker(map1, coordWhiskeyJar,
        labelWhiskeyJar, -50, 28);

    var coordSkyBar = {lat: 38.029750, lng: -78.478614};
    var labelSkyBar = 'Skybar';
    var markerSkyBar = makeMapMarker(map1, coordSkyBar, labelSkyBar, 45, 32);

    // Favorites
    var coordMcCormick = {lat: 38.032971, lng: -78.522385};
    var labelMcCormick = 'McCormick Observatory';
    var markerMcCormick = makeMapMarker(map1, coordMcCormick, labelMcCormick,
        110);

    // What to see
    var coordMarket = {lat: 38.029585, lng: -78.481659};
    var labelMarket = 'Farmer\'s Market';
    var markerMarket = makeMapMarker(map1, coordMarket, labelMarket, -49, 30);

    var coordTimberlake = {lat: 38.029999, lng: -78.479346};
    var labelTimberlake = 'Timberlake\'s Drug Store';
    var markerTimberlake = makeMapMarker(map1, coordTimberlake,
        labelTimberlake, -78, 22);

    var coordUva = {lat: 38.035247, lng: -78.503638};
    var labelUva = 'The Lawn';
    var markerUva = makeMapMarker(map1, coordUva, labelUva, 55);

    var coordCarterMnt = {lat: 37.991448, lng: -78.471768};
    var labelCarterMnt = 'Carter Mountain Orchard';
    var markerCarterMnt = makeMapMarker(map1, coordCarterMnt, labelCarterMnt,
        110, 30);

}
