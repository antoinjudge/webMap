<!DOCTYPE html>
<html>
<body>

<h1>My First Google Map</h1>

<div id="map" style="width:100%;height:600px;"></div>

<script>

/* var locations = [
    {lat: 54.950268, lng: -7.716929},
    {lat: 51.907973, lng: -8.170307},
    {lat: 53.698354, lng: -7.612216},
    {lat: 53.220726, lng: -6.659567},
    {lat: 52.271516, lng: -9.688785},
    {lat: 53.362061, lng: -6.273342}
    
  ] */
  
  var locations = [
      ['Bondi Beach',  54.950268,  -7.716929, 4],
      ['Coogee Beach', 51.907973,  -8.170307, 5],
      ['Cronulla Beach', 53.698354,  -7.612216, 3],
      ['Manly Beach',53.220726,  -6.659567, 2],
      ['Maroubra Beach', 52.271516,  -9.688785, 1]
    ];

function initMap() {
	
	
	
	 /* var myLatLng = {lat: 53.3279, lng: -6.2209}; 
	 var newLatLng = {lat:52.655648 , lng: -7.256561}; 
	 var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; */
	
	var map=new google.maps.Map(document.getElementById("map"),{
		center: new google.maps.LatLng( 53.3279,  -6.2209),
	    zoom:7
	  });
	
	
	var infowindow = new google.maps.InfoWindow();
	
	var marker;
	var i;
	
	  for (i = 0; i < locations.length; i++) {  
	        marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map
	      }); 
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
	            return function() {
	              infowindow.setContent(locations[i][0]);
	              infowindow.open(map, marker);
	            }
	          })(marker, i));
	  }
	
	
	
	 /* var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
	var marker = new google.maps.Marker({
        position: newLatLng,
        map: map,
        title: 'Hello World!'
      });  */
	
}



</script>
	

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEnxdGDWoTCeeeZl2H1nwkRbw5alUFJ00&callback=initMap"></script>

</body>
</html>