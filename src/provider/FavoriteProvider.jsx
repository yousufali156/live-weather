import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

function FavoriteProvider({ children }) {
  const [favoriteList, setFavoriteList] = useLocalStorage("city");

  function removeFavorite(city) {
    const remaining = favoriteList.filter((item) => item.city !== city);
    setFavoriteList(remaining);
  }

  function addFavorite({ city, latitude, longitude }) {
    setFavoriteList([
      ...favoriteList,
      {
        city,
        latitude,
        longitude,
      },
    ]);
  }

  return (
    <FavoriteContext.Provider
      value={{ favoriteList, removeFavorite, addFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
