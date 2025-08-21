import { useEffect, useState } from "react";
import useLocationData from "./useLocationData";

function useGetWeather() {
  const { location } = useLocationData();
  const [weatherData, setWeatherData] = useState({
    city: "",
    country: "",
    status: "",
    dt: "",
    latitude: "",
    longitude: "",
    temp: "",
  });
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);

  async function fetchWeather(latitude, longitude) {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setWeatherData({
        city: data?.name,
        country: data?.sys?.country,
        status: data?.weather[0]?.main,
        dt: data?.dt,
        temp: data?.main?.temp,
        latitude: data?.coord?.lat,
        longitude: data?.coord?.lon,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        status: false,
        message: "",
      });
    }
  }

  useEffect(() => {
    setLoading({
      status: true,
      message: "Finding location...",
    });
    if (location.latitude && location.longitude) {
      fetchWeather(location.latitude, location.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeather(latitude, longitude);
      });
    }
  }, [location.latitude, location.longitude]);

  return { weatherData, loading, error };
}

export default useGetWeather;
