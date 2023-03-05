import React from "react";
import { cities as citiesArr } from "../../constants";
import { useAppContext } from "../../hooks";

const Drawer = () => {
  const { handleCityClick, cities, setCities, selectedCity, setSelectedCity } =
    useAppContext();

  function searchArray(searchString: string) {
    if (searchString.length === 0) {
      return citiesArr;
    }
    const searchStringLower = searchString.toLowerCase();
    return cities?.filter((city) =>
      city.name.toLowerCase().includes(searchStringLower)
    );
  }

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs mb-5"
          onChange={(e) => setCities(searchArray(e.target.value))}
          onInput={(e) => {
            if (!selectedCity) return;
            setSelectedCity(null);
          }}
        />
        {cities?.map((city, i) => (
          <li key={i} onClick={() => handleCityClick(city)}>
            <p>{city.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
