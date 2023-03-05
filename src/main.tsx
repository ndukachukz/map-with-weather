import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapProvider } from "react-map-gl";

import { AppContextProvier } from "./context/";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MapProvider>
    <AppContextProvier>
      <App />
    </AppContextProvier>
  </MapProvider>
);
