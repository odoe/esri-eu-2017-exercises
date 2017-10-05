import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

// Create a basic map
const map = new EsriMap({
  basemap: "osm"
});

// Create a MapView that displays map data
const view = new MapView({
  container: "viewDiv",
  center: [13.4, 52.52],
  zoom: 11,
  map
});

view.then(() => console.log("view ready"));
