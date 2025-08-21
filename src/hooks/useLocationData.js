import { useContext } from "react";
import { LocationContext } from "../context";

function useLocationData() {
  return useContext(LocationContext);
}
export default useLocationData;
