import { WeatherContext } from "../context";
import useGetWeather from "../hooks/useGetWeather";

function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useGetWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
