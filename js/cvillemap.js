// Docs: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
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
    var pinIcon = {
        url: pinUrl,
    };

    // Breakfast
    var coordTaco = {lat: 38.024793, lng: -78.482911};
    var markerTacos = new google.maps.Marker({
        position: new google.maps.LatLng(coordTaco),
        map: map1,
        icon: {
            url: pinUrl,
            labelOrigin: new google.maps.Point(70,labelVerticalOffset)
        },
        label: {
            text: 'Brazo\'s Tacos',
            fontSize: "16px",
            fontWeight: "bold"
        }
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
        icon: pinIcon
    });
    google.maps.event.addListener(markerBodosCorner , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Bodo\'s Bagels',
        position: coordBodosCorner,
        });
        infowindow.open(map1);
    });

    // Lunch
    var coordAce = {lat: 38.038023, lng: -78.484906};
    var markerAce = new google.maps.Marker({
        position: new google.maps.LatLng(coordAce),
        map: map1,
        icon: {
            url: pinUrl,
            labelOrigin: new google.maps.Point(105,labelVerticalOffset)
        },
        label: {
            text: 'Ace Biscuit & Barbecue',
            fontSize: "16px",
            fontWeight: "bold"
        }
    });
    google.maps.event.addListener(markerAce , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Ace Biscuit & Barbecue',
        position: coordAce,
        });
        infowindow.open(map1);
    });

    var coordPeterChang = {lat: 38.055223, lng: -78.500523};
    var markerPeterChang = new google.maps.Marker({
        position: coordPeterChang,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerPeterChang , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Peter Chang China Grill',
        position: coordPeterChang,
        });
        infowindow.open(map1);
    });

    // Drinks
    var coordWhiskeyJar = {lat: 38.031402, lng: -78.482780};
    var markerWhiskeyJar = new google.maps.Marker({
        position: coordWhiskeyJar,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerWhiskeyJar , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'The Whisky Jar',
        position: coordWhiskeyJar,
        });
        infowindow.open(map1);
    });

    var coordSkyBar = {lat: 38.029750, lng: -78.478614};
    var markerSkyBar = new google.maps.Marker({
        position: coordSkyBar,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerSkyBar , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Skybar',
        position: coordSkyBar,
        });
        infowindow.open(map1);
    });

    // Favorites
    var coordMcCormick = {lat: 38.032971, lng: -78.522385};
    var markerMcCormick = new google.maps.Marker({
        position: coordMcCormick,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerMcCormick , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'McCormick Observatory',
        position: coordMcCormick,
        });
        infowindow.open(map1);
    });

    // What to see
    var coordMarket = {lat: 38.029585, lng: -78.481659};
    var markerMarket = new google.maps.Marker({
        position: coordMarket,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerMarket , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Farmer\s Market',
        position: coordMarket,
        });
        infowindow.open(map1);
    });

    var coordTimberlake = {lat: 38.029999, lng: -78.479346};
    var markerTimberlake = new google.maps.Marker({
        position: coordTimberlake,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerTimberlake , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'Timberlake\'s Drug Store',
        position: coordTimberlake,
        });
        infowindow.open(map1);
    });

    var coordUva = {lat: 38.035247, lng: -78.503638};
    var markerUva = new google.maps.Marker({
        position: coordUva,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerUva , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'UVa Lawn and Rotunda',
        position: coordUva,
        });
        infowindow.open(map1);
    });

    var coordCarterMnt = {lat: 37.991448, lng: -78.471768};
    var markerCarterMnt = new google.maps.Marker({
        position: coordCarterMnt,
        map: map1,
        icon: pinIcon
    });
    google.maps.event.addListener(markerCarterMnt , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
        content:'CarterMnt Lawn and Rotunda',
        position: coordCarterMnt,
        });
        infowindow.open(map1);
    });

}
