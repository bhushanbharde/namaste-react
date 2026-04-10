import { useEffect, useState } from "react";
import Bannner from "./Banner";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const json = useRestaurantData();

  useEffect(() => {
    const resList = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  setCuisines(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    if (resList) {
      setListOfRestaurants(resList);
      setFilteredRestaurants(resList);
    }
  }, [json]);

  if (!listOfRestaurants.length) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>You are offline!</h1>;
  }

  return (
    <div className="px-40 py-14">
      <div className="flex justify-between items-center">
        <div className="flex">
          <input
            className="px-4 py-1 mr-4 border border-gray-500 rounded-lg w-90"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-600 rounded-lg text-white px-4 py-2 hover:bg-blue-700 hover:cursor-pointer"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="top-rated">
          <button
            className="bg-blue-600 rounded-lg text-white px-4 py-2 hover:bg-blue-700 hover:cursor-pointer"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <Bannner data={cuisines} />

      <hr className="mt-8 border-gray-300" />

      <h2 className="text-2xl font-semibold my-8">
        Restaurants with online food delivery in Pune
      </h2>

      <div className="grid grid-cols-4 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
