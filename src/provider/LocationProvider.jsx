import { useState } from "react";
import { LocationContext } from "../context";

function LocationProvider({ children }) {
  const [location, setLocation] = useState({
    city: "",
    latitude: "",
    longitude: "",
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;
