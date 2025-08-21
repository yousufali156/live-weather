import { useState } from "react";
import logo from "../../assets/images/logo.png";
import useFavoriteData from "../../hooks/useFavoriteData";
import { useLocationData } from "../../hooks";

function Header() {
  const [show, setShow] = useState(false);
  const { favoriteList } = useFavoriteData();
  const { setLocation } = useLocationData();
  const [inputLocation, setInputLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${inputLocation}&format=json`
      );

      if (!response.ok) throw new Error("Invalid city");

      const result = await response.json();

      if (result.length > 0) {
        const { lat, lon, display_name } = result[0];
        setLocation({
          city: display_name,
          latitude: lat,
          longitude: lon,
        });
        setInputLocation("");
      } else {
        setErrorMsg("No results found");
        setLocation({ city: "", latitude: "", longitude: "" });
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Try again.");
      console.error(error);
    }
  }

  return (
    <header className="w-full bg-white shadow p-3">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="logo flex justify-center md:justify-start">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* Search + Fav */}
        <div className="action flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full md:w-auto gap-2"
          >
            <input
              id="input-text"
              type="search"
              placeholder="Type any valid city name"
              onChange={(e) => setInputLocation(e.target.value)}
              value={inputLocation}
              className="border px-3 py-2 rounded-md w-full sm:w-64"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

          {errorMsg && (
            <p className="text-red-500 text-sm md:ml-2">{errorMsg}</p>
          )}

          {/* Favorites */}
          <div id="fav-list" className="relative">
            <button
              id="fav-list-btn"
              onClick={() => setShow(!show)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition w-full md:w-auto"
            >
              Favorite List
            </button>
            {show && (
              <ul className="absolute md:static left-0 mt-2 md:mt-0 bg-white shadow rounded-md w-full sm:w-64 z-10">
                {favoriteList.length > 0 ? (
                  favoriteList.map((item) => (
                    <li
                      onClick={() =>
                        setLocation({
                          city: item.city,
                          latitude: item.latitude,
                          longitude: item.longitude,
                        })
                      }
                      key={`${item.city}-${item.latitude}-${item.longitude}`}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {item.city}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">
                    No Favorite list
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
