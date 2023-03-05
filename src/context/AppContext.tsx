import React, { createContext, useReducer } from "react";
import { cities } from "../constants";
import { Cities, City } from "../types";

interface viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface InitialState {
  viewport?: viewport;
  cities?: Cities;
  weather?: any;
  selectedCity?: City | null;
  showWeatherPopup?: boolean;
}

interface Action {
  type:
    | "setViewport"
    | "setWeather"
    | "setCities"
    | "setSelectedCity"
    | "setShowWeatherPopup";
  payload: InitialState;
}

function reducer(state: InitialState, action: Action): InitialState {
  state = structuredClone(state);
  switch (action.type) {
    case "setViewport":
      return {
        ...state,
        viewport: action.payload.viewport,
      };
    case "setWeather":
      return {
        ...state,
        weather: action.payload.weather,
      };
    case "setCities":
      return {
        ...state,
        cities: action.payload.cities,
      };

    case "setSelectedCity":
      return {
        ...state,
        selectedCity: action.payload.selectedCity,
      };
    case "setShowWeatherPopup":
      return {
        ...state,
        showWeatherPopup: action.payload.showWeatherPopup,
      };
    default:
      throw new Error(`unkwon ${action.type}`);
  }
}

const initialState: InitialState = {
  viewport: {
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  },
  selectedCity: null,
  weather: null,
  cities,
  showWeatherPopup: false,
} as InitialState;

type AppContext = InitialState & {
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContext>({} as AppContext);

const AppContextProvier = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvier;
