/////////////////////
// Google Maps API //
/////////////////////

var office;
var map;
var marker;

function initialize() {
    office = new google.maps.LatLng(39.576707, -106.094231);

    var mapOptions = {
        zoom: 15,
        center: office,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<p>Summit TV Offices</p><p>619 Main St, Frisco, CO 80443</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: office,
        map: map,
        title: '619 Main St, Frisco, CO 80443'
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);