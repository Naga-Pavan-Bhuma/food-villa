import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  
  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurant(json?.data?.cards?.[2]?.card?.card?.info || {});
      
      setMenu(
        Object.values(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {})
          .flatMap((card) => card?.card?.card?.itemCards || [])
      );
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
if(!menu){
  return <Shimmer/>
}

  return (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="Restaurant" />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <div>
          <ul>
            {menu.map((item, index) => (
              <li key={`${item?.card?.info?.id}-${index}`}>
                {item?.card?.info?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
