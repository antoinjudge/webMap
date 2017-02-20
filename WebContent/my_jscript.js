


var locations = [
    ['Bondi Beach',  54.950268,  -7.716929, 4],
    ['Coogee Beach', 51.907973,  -8.170307, 5],
    ['Cronulla Beach', 53.698354,  -7.612216, 3],
    ['Manly Beach',53.220726,  -6.659567, 2],
    ['Maroubra Beach', 52.271516,  -9.688785, 1]
  ];

function initMap() {
	
	
	
	
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
	

	
}


