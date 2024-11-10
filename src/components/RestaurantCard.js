import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } = restaurant.info;

  return (
    <div className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-48 overflow-hidden">
        <img
          alt={name}
          src={IMG_CDN_URL + cloudinaryImageId}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-44">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-cyan-600 line-clamp-2">
            {name}
          </h2>
          <p className="text-gray-500 mt-1 text-sm truncate">{locality}</p>
          <p className="text-gray-600 mt-1 text-sm line-clamp-1">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <span className="inline-block bg-cyan-500 text-white rounded-full px-3 py-1 text-xs font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-110">
            {avgRating} Stars
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
