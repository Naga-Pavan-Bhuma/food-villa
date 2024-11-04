import { useState,useEffect } from "react";
const useRestaurantCards = () => {
  const [restaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render");
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return restaurants;
};
export default useRestaurantCards;
