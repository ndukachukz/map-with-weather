import React from "react";
import useAppContext from "./useAppContext";

const useViewPort = () => {
  const { viewport, weather, cities, dispatch, selectedCity } = useAppContext();

  function setViewPort(params: typeof viewport) {
    dispatch({
      type: "setViewport",
      payload: {
        viewport: params,
        cities,
        weather,
        selectedCity,
      },
    });
  }

  React.useEffect(() => {
    dispatch({
      type: "setViewport",
      payload: {
        viewport: {
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        },
        cities,
        weather,
        selectedCity,
      },
    });
  }, [viewport]);

  return { setViewPort, viewport };
};

export default useViewPort;
