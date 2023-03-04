import React, { createContext, useReducer } from "react";

interface viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface InitialState {
  viewport: viewport;
  cities: any[];
  weather: any;
}

interface Action {
  type: "setViewport" | "setWeather" | "setCities";
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
    default:
      throw new Error(`unkwon ${action.type}`);
  }
}

const initialState: InitialState = {} as InitialState;

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
