import { useContext } from "react";
import { WeatherContext } from "../context";

function useWeatherData() {
  return useContext(WeatherContext);
}

export default useWeatherData;
