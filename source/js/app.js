// toggle class active in welcome-banner
$('.welcome-btn').click(function() {
    $('.welcome-banner__wrap').toggleClass('active');
});

google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(50.436817, 30.491573),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"stylers":[{"hue":"#007fff"},{"saturation":89}]},{"featureType":"water","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]}],
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        // Определяем позицию маркера
        position: {
            lat: 50.449817,
            lng: 30.522973
        },
        map: map,
        icon: 'assets/img/marker.png'
    });
    var locations = [

    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') { description = ''; } else { description = locations[i][1]; }
        if (locations[i][2] == 'undefined') { telephone = ''; } else { telephone = locations[i][2]; }
        if (locations[i][3] == 'undefined') { email = ''; } else { email = locations[i][3]; }
        if (locations[i][4] == 'undefined') { web = ''; } else { web = locations[i][4]; }
        if (locations[i][7] == 'undefined') { markericon = ''; } else { markericon = locations[i][7]; }
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        link = '';
    }

}
