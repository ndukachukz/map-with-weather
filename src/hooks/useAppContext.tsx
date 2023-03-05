import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { useMap } from "react-map-gl";
import config from "../config";
import { AppContext } from "../context/AppContext";

const useAppContext = () => {
  const {
    cities,
    dispatch,
    viewport,
    weather,
    selectedCity,
    showWeatherPopup,
  } = useContext(AppContext);

  const { map } = useMap();

  function setViewPort(params: typeof viewport) {
    dispatch({
      type: "setViewport",
      payload: {
        viewport: params,
      },
    });
  }

  function setCities(params: typeof cities) {
    dispatch({
      type: "setCities",
      payload: {
        cities: params,
      },
    });
  }

  function setWeather(params: typeof weather) {
    dispatch({
      type: "setWeather",
      payload: {
        weather: params,
      },
    });
  }

  function setSelectedCity(city: typeof selectedCity) {
    dispatch({
      type: "setSelectedCity",
      payload: {
        selectedCity: city,
      },
    });
  }

  async function handleCityClick(city: typeof selectedCity) {
    setSelectedCity(city);
    dispatch({
      type: "setShowWeatherPopup",
      payload: {
        showWeatherPopup: false,
      },
    });
    try {
      /*       https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${viewport?.latitude}&lon=${viewport?.longitude}&appid=${config.OPENWEATHER_TOKEN}`
      );

      console.log("CITY WEATHER DATA => ", data);
      setWeather(data);
      map?.flyTo({ center: [city?.longitude, city?.latitude] });
    } catch (error: any) {
      console.error("CITY WEATHER DATA => ", error.message);
    }
  }

  return {
    cities,
    dispatch,
    viewport,
    weather,
    selectedCity,
    setViewPort,
    setCities,
    setWeather,
    handleCityClick,
    setSelectedCity,
    map,
    showWeatherPopup,
  };
};

export default useAppContext;
