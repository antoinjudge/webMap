$(document).ready(function(){ 
  var map = new GMap2(document.getElementById('map')); 
  var burnsvilleMN = new GLatLng(44.797916,-93.278046); 
  map.setCenter(burnsvilleMN, 8); 
});


// setup 10 random points 
var bounds = map.getBounds(); 
var southWest = bounds.getSouthWest(); 
var northEast = bounds.getNorthEast(); 
var lngSpan = northEast.lng() - southWest.lng(); 
var latSpan = northEast.lat() - southWest.lat(); 
var markers = []; 
for (var i = 0; i<10; i++) { 
  var point = new GLatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()); 
  marker = new GMarker(point); 
  map.addOverlay(marker); 
  markers[i] = marker; 
}

 

$(markers).each(function(i,marker){ 
  GEvent.addListener(marker,"click", function(){ 
    map.panTo(marker.getLatLng()); 
  }); 
});

function displayPoint(marker, index){ 
  $("#message").hide(); 
  var moveEnd = GEvent.addListener(map,"moveend", function(){ 
    var markerOffset = map.fromLatLngToDivPixel(marker.getLatLng()); 
    $("#message") 
      .fadeIn() 
      .css({ top:markerOffset.y, left:markerOffset.x }); 
    GEvent.removeListener(moveEnd); 
  }); 
  map.panTo(marker.getLatLng()); 
}

