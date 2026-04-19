import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props);
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="">
      <div className="">
        <img
          className="h-[170] w-full rounded-2xl object-cover"
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
          <i className="fa-solid fa-circle text-[5px] mx-2"></i>
          <p>{sla.deliveryTime} minutes</p>
        </div>

        <p className="text-gray-600 font-light py-1">{cuisines.join(", ")}</p>
        <p className="text-gray-600 font-light">{costForTwo}</p>
      </div>
    </div>
  );
};

// Higher order component (take a component and enhances it and then returns)
// Input RestaurantCard => output - PromotedWithLabel

export const PromotedWithLabel = (RestaurantCard) => {
  return (props) => {

    const discountInfo = props?.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute bg-blue-500 text-white text-[12px] px-3 py-1 rounded-tl-3xl">
          {`${discountInfo.header || ""} ${discountInfo.subHeader || ""}`}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
