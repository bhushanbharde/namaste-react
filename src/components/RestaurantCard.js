import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="">
      <div className="">
        <img
          className="h-[170] w-full rounded-3xl object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="px-2">
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <div className="flex items-center">
          <p>
            <i className="fa-solid fa-star mr-1 text-green-600"></i>
            {avgRating}
          </p>
          <i
            className="fa-solid fa-circle text-[5px] mx-2"
          ></i>
          <p>{sla.deliveryTime} minutes</p>
        </div>

        <p className="text-gray-600 font-light py-1">{cuisines.join(", ")}</p>
        <p className="text-gray-600 font-light">{costForTwo}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
