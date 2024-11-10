import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  if (!restaurant.menu) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mb-12 p-8 transition transform hover:scale-105 duration-300">
        <div className="flex items-center gap-6">
          <img
            src={IMG_CDN_URL + restaurant.info.cloudinaryImageId}
            alt="Restaurant"
            className="w-28 h-28 object-cover rounded-lg shadow-md transition duration-300 hover:scale-110 hover:shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">{restaurant.info.name}</h2>
            <p className="text-gray-600 text-md">{restaurant.info.areaName}, {restaurant.info.city}</p>
            <p className="text-sm text-gray-500 mt-1">⭐ {restaurant.info.avgRating} | {restaurant.info.costForTwo} for two</p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-cyan-300 pb-4">Menu</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.menu.map((item, index) => (
            <li
              key={`${item?.card?.info?.id}-${index}`}
              className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg shadow-md transition duration-300 hover:bg-gradient-to-br hover:from-cyan-200 hover:to-cyan-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-lg font-medium text-gray-700 tracking-tight">{item?.card?.info?.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
