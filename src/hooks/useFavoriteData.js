import { useContext } from "react";
import { FavoriteContext } from "../context";

function useFavoriteData() {
  return useContext(FavoriteContext);
}

export default useFavoriteData;
