import { useState,useEffect } from "react";
import { FETCH_CARD_URL } from "../Config";
const useRestaurantCards = () => {
  const [restaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render");
  async function getRestaurants() {
    const data = await fetch(FETCH_CARD_URL);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return restaurants;
};
export default useRestaurantCards;
