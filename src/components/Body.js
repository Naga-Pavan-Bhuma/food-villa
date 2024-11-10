import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantCards from "../utils/useRestaurantCards";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const restaurants = useRestaurantCards();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    if (restaurants && Array.isArray(restaurants)) {
      setFilteredRestaurants(restaurants);
    }
  }, [restaurants]);

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-red-500">Check your Internet connection</h1>
      </div>
    );
  } else {
    if (!restaurants || restaurants.length === 0) return <Shimmer />;
    
    return (
      <>
        <div className="flex items-center justify-center space-y-6 py-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full py-3 px-5 rounded-full text-gray-800 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-200 ease-in-out"
              onClick={() => {
                const data = filterData(searchText, restaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRestaurants.length === 0 ? (
              <h2 className="col-span-full text-center text-2xl font-medium text-gray-600">
                No Restaurants Found
              </h2>
            ) : (
              filteredRestaurants.map((restaurant) => (
                <Link
                  to={`/restaurant/${restaurant.info.id}`}
                  key={restaurant.info.id}
                >
                  <RestaurantCard restaurant={restaurant} />
                </Link>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Body;
