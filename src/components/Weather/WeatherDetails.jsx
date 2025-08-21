import sun from "../../assets/images/sun.png";
import bg from "../../assets/images/bg.jpg";
import { useWeatherData } from "../../hooks";
import { formatWeatherTimestamp } from "../../utilities";
import useFavoriteData from "../../hooks/useFavoriteData";

function WeatherDetails() {
  const { weatherData, loading } = useWeatherData();
  const { favoriteList, removeFavorite, addFavorite } = useFavoriteData();
  const { city, country, dt, status, temp, latitude, longitude } = weatherData;

  const favCity = favoriteList.find((item) => item.city == city);

  function handleAddFavorite() {
    addFavorite({
      city,
      latitude,
      longitude,
    });
  }
  function handleRemoveFavorite() {
    console.log(city);
    removeFavorite(city);
  }

  return (
    <div
      className="main"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
      }}
    >
      {loading.status ? (
        <p>{loading.message}</p>
      ) : (
        <div className="weather" id="weather">
          <div id="logo">
            <img src={sun} alt="sun" />
          </div>
          <div id="city-name">
            {city} ,{country}
          </div>
          <div id="date">{formatWeatherTimestamp(dt)}</div>
          <div>
            <span id="temperature">{temp} ℃</span>
            <span className="celcius" id="celcius"></span>
          </div>
          <div id="status">{status}</div>
          {!favCity ? (
            <button id="fav-btn" onClick={handleAddFavorite}>
              Add Favorite
            </button>
          ) : (
            <button id="fav-btn" onClick={handleRemoveFavorite}>
              remove Favorite
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
