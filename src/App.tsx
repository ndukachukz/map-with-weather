import Map, { Marker, Popup } from "react-map-gl";

import config from "./config/index";
import { Layout } from "./components";
import { useAppContext } from "./hooks/";
import markerImg from "./assets/map-marker.svg";

function App() {
  const {
    viewport,
    weather,
    selectedCity,
    setSelectedCity,
    showWeatherPopup,
    dispatch,
  } = useAppContext();

  const showPopup = selectedCity && showWeatherPopup;

  return (
    <Layout>
      <Map
        initialViewState={viewport}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={config.MAPBOX_TOKEN}
        id="map"
      >
        {selectedCity && (
          <Marker
            latitude={selectedCity.latitude}
            longitude={selectedCity.longitude}
            onClick={() =>
              dispatch({
                type: "setShowWeatherPopup",
                payload: {
                  showWeatherPopup: true,
                },
              })
            }
          >
            <img src={markerImg} style={{ width: 100, height: 70 }} />
          </Marker>
        )}

        {showPopup && (
          <Popup
            latitude={selectedCity.latitude}
            longitude={selectedCity.longitude}
            onClose={() => {
              dispatch({
                type: "setShowWeatherPopup",
                payload: {
                  showWeatherPopup: false,
                },
              });
            }}
            closeOnClick={false}
          >
            <div>
              <h2>{selectedCity?.name}</h2>
              {weather ? (
                <>
                  <p>Temperature: {weather.current.temp}°F</p>
                  <p>Conditions: {weather.current.weather[0].description}</p>
                </>
              ) : (
                <p>Loading weather...</p>
              )}
            </div>
          </Popup>
        )}
      </Map>
    </Layout>
  );
}

export default App;
