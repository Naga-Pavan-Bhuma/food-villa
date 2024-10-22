import { IMG_CDN_URL } from "../Config";
const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } =
    restaurant.info;
  return (
    <div className="card">
      <img alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
export default RestaurantCard;