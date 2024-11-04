import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantCards from "../utils/useRestaurantCards";
import { filterData } from "../utils/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const restaurants = useRestaurantCards(); // Fetch restaurant data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Update filteredRestaurants when restaurants data is loaded
  useEffect(() => {
    if (restaurants && Array.isArray(restaurants)) {
      setFilteredRestaurants(restaurants);
    }
  }, [restaurants]);

  // Show Shimmer while restaurants data is still loading or not yet available
  if (!restaurants || restaurants.length === 0) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h2>No Restaurants Found</h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
