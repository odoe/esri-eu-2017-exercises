import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import LayerList from "esri/widgets/LayerList";
import Legend from "esri/widgets/Legend";
import Search from "esri/widgets/Search";

// Create a basic map
const map = new WebMap({
  portalItem: {
    id: "0b6539c487c046e191724db0afa88939"
  }
});

// Create a MapView that displays map data
const view = new MapView({
  container: "viewDiv",
  map
});

// Wait for view to load and add widgets
view.then(() => {
  const layerList = new LayerList({ view });
  const legend = new Legend({ view });
  const search = new Search({ view });
  view.ui.add([search, layerList], "top-right");
  view.ui.add(legend, "bottom-left");
});
