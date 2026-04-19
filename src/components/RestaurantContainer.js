import { Link } from "react-router";
import RestaurantCard, { PromotedWithLabel } from "./RestaurantCard";

const RestaurantContainer = (props) => {
  // console.log(props);

  const filteredRestaurants = props.data;
  // const filteredRestaurants = Array.isArray(props.data) ? props.data : [];
  // console.log(filteredRestaurants);
  const RestaurantCardPromoted = PromotedWithLabel(RestaurantCard);

  return (
    <div className="grid grid-cols-4 gap-8">
      {filteredRestaurants.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
        >
          {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader ? (
            <RestaurantCardPromoted resData={restaurant} />
          ) : (
            <RestaurantCard resData={restaurant} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
