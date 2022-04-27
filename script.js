require(["esri/Map","esri/views/MapView"],
 function(Map,MapView) {
     const map = new Map({
  basemap: "hybrid"
});

// Set the basemap after the map instance is created
map.basemap = "topo-vector";