// Docs: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var makeMapMarker = function (coord, map, markerIconUrl, labelHorizOffset, labelText, labelFontSize, labelFontWeight) {
    return new google.maps.Marker({
        position: new google.maps.LatLng(coord),
        map: map,
        icon: {
            url: markerIconUrl,
            labelOrigin: new google.maps.Point(labelHorizOffset,35)
        },
        label: {
            text: labelText,
            fontSize: labelFontSize,
            fontWeight: labelFontWeight
        }
    });
};

google.maps.event.addDomListener(window, 'load', init);
function init() {
    var map1Options = {
        zoom: 14,
        center: new google.maps.LatLng(38.040422, -78.495225), // Charlottesville
        clickableIcons: true,
        styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    };

    var mapElement = document.getElementById('cvillemap1');
    var map1 = new google.maps.Map(mapElement, map1Options);
    var pinUrl = 'img/pin.png';
    var labelVerticalOffset = 35;
    var labelFontSize = "16px";
    var labelFontWeight = "bold";
    var pinIcon = {
        url: pinUrl,
    };

    // Breakfast
    var coordTaco = {lat: 38.024793, lng: -78.482911};
    var labelTaco = 'Brazo\'s Tacos';
    var markerTacos = makeMapMarker(coordTaco, map1, pinUrl, 70, labelTaco,
        labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerTacos , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:labelTaco,
        position: coordTaco,
        });
        infowindow.open(map1);
    });

    var coordBodosCorner = {lat: 38.035776, lng: -78.500627};
    var labelBodosCorner = 'Bodo\'s Bagels';
    var markerBodosCorner = makeMapMarker(coordBodosCorner, map1, pinUrl, 70,
        labelBodosCorner, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerBodosCorner , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:labelBodosCorner,
        position: coordBodosCorner,
        });
        infowindow.open(map1);
    });

    // Lunch
    var coordAce = {lat: 38.038023, lng: -78.484906};
    var labelAce = 'Ace Biscuit & Barbecue';
    var markerAce = makeMapMarker(coordAce, map1, pinUrl, 107, labelAce,
        labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerAce , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelAce,
        position: coordAce,
        });
        infowindow.open(map1);
    });

    var coordPeterChang = {lat: 38.055223, lng: -78.500523};
    var labelPeterChang = 'Peter Chang China Grill';
    var markerPeterChang = makeMapMarker(coordPeterChang, map1, pinUrl, 107, labelPeterChang, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerPeterChang , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelPeterChang,
        position: coordPeterChang,
        });
        infowindow.open(map1);
    });

    // Drinks
    var coordWhiskeyJar = {lat: 38.031402, lng: -78.482780};
    var labelWhiskeyJar = 'The Whiskey Jar';
    var markerWhiskeyJar = makeMapMarker(coordWhiskeyJar, map1, pinUrl, 82,
        labelWhiskeyJar, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerWhiskeyJar , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelWhiskeyJar,
        position: coordWhiskeyJar,
        });
        infowindow.open(map1);
    });

    var coordSkyBar = {lat: 38.029750, lng: -78.478614};
    var labelSkyBar = 'Skybar';
    var markerSkyBar = makeMapMarker(coordSkyBar, map1, pinUrl, 47,
        labelSkyBar, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerSkyBar , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:labelSkyBar,
        position: coordSkyBar,
        });
        infowindow.open(map1);
    });

    // Favorites
    var coordMcCormick = {lat: 38.032971, lng: -78.522385};
    var labelMcCormick = 'McCormick Observatory';
    var markerMcCormick = makeMapMarker(coordMcCormick, map1, pinUrl, 110,
        labelMcCormick, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerMcCormick , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelMcCormick,
        position: coordMcCormick,
        });
        infowindow.open(map1);
    });

    // What to see
    var coordMarket = {lat: 38.029585, lng: -78.481659};
    var labelMarket = 'Farmer\'s Market';
    var markerMarket = makeMapMarker(coordMarket, map1, pinUrl, 81,
        labelMarket, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerMarket , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelMarket,
        position: coordMarket,
        });
        infowindow.open(map1);
    });

    var coordTimberlake = {lat: 38.029999, lng: -78.479346};
    var labelTimberlake = 'Timberlake\'s Drug Store';
    var markerTimberlake = makeMapMarker(coordTimberlake, map1, pinUrl, 110,
        labelTimberlake, labelFontSize, labelFontWeight);

    google.maps.event.addListener(markerTimberlake , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelTimberlake,
        position: coordTimberlake,
        });
        infowindow.open(map1);
    });

    var coordUva = {lat: 38.035247, lng: -78.503638};
    var labelUva = 'The Lawn';
    var markerUva = makeMapMarker(coordUva, map1, pinUrl, 55,
        labelUva, labelFontSize, labelFontWeight);
    google.maps.event.addListener(markerUva , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelUva,
        position: coordUva,
        });
        infowindow.open(map1);
    });

    var coordCarterMnt = {lat: 37.991448, lng: -78.471768};
    var labelCarterMnt = 'Carter Mountain Orchard';
    var markerCarterMnt = makeMapMarker(coordCarterMnt, map1, pinUrl, 110,
        labelCarterMnt, labelFontSize, labelFontWeight);

    google.maps.event.addListener(markerCarterMnt , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content: labelCarterMnt,
        position: coordCarterMnt,
        });
        infowindow.open(map1);
    });

}
