import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurant=useRestaurantMenu(resId);

  if (!restaurant.menu) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>{restaurant.info.name}</h2>
        <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} alt="Restaurant" />
        <h3>{restaurant.info.areaName}</h3>
        <h3>{restaurant.info.city}</h3>
        <h3>{restaurant.info.avgRating}</h3>
        <h3>{restaurant.info.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant.menu.map((item, index) => (
            <li key={`${item?.card?.info?.id}-${index}`}>
              {item?.card?.info?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
