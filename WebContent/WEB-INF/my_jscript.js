$(document).ready(function(){ 
  var map = new GMap2(document.getElementById('map')); 
  var burnsvilleMN = new GLatLng(44.797916,-93.278046); 
  map.setCenter(burnsvilleMN, 8); 
});