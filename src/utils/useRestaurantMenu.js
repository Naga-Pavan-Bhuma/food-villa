import { useState,useEffect } from "react"
import { FETCH_MENU_URL,FETCH_MENU_URL_BACK } from "../Config";
const useRestaurantMenu =(resId)=>{
    const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL+resId);//`${FETCH_MENU_URL}${resId}${FETCH_MENU_URL_BACK}`
      const json = await data.json();
      setRestaurant({
        info: json?.data?.cards?.[2]?.card?.card?.info || {},
        menu: Object.values(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {})
          .flatMap((card) => card?.card?.card?.itemCards || [])
      });
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
  return restaurant;
}
export default useRestaurantMenu;