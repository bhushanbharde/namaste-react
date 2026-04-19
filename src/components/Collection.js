import { useEffect, useState } from "react";
import useCollection from "../utils/useCollection";
import RestaurantCard from "./RestaurantCard";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router";


const Collection = () => {
  const { collectionId } = useParams();
  
  const [metaData, setMetaData] = useState([]);
  const collect = useCollection(collectionId);
  // console.log(collect);
  const data = collect?.data?.cards;

  const restaurants = data?.filter(
    (restaurant) =>
      restaurant?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  // console.log(restaurants);

  useEffect(() => {
    const metaData = collect?.data?.cards[0]?.card.card;
    setMetaData(metaData);
  }, [collect]);
  
  // console.log(metaData);
  //   if (collect == null) return <h1 className="text-3xl">Loading...</h1>;
  if (data == null) return <Shimmer />;

  return (
    <div className="px-40 py-4">
      <h1 className="mt-10 text-4xl font-semibold">{metaData?.title}</h1>
      <p className="text-gray-700 text-lg font-light mt-2">
        {metaData?.description}
      </p>

      <div className="flex my-4">
        <h3 className="border border-gray-300 mr-2 text-sm font-light px-3 py-2 rounded-2xl">
          Filter
        </h3>
        <h3 className="border border-gray-300 mr-2 text-sm font-light px-3 py-2 rounded-2xl">
          Sort By
        </h3>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Restaurants to Explore</h2>
      <div className="grid grid-cols-4 gap-8">
        {restaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.card.card.info.id}
            key={restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant.card.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
