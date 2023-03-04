import { useContext } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import config from "./config/index";
import { Layout } from "./components";
import { AppContext } from "./context/AppContext";

function App() {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="App">
      <Layout>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={config.MAPBOX_TOKEN}
        />
      </Layout>
    </div>
  );
}

export default App;
