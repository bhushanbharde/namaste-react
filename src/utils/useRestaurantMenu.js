import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import restaurantMenuData from "./restaurantData.json"

const useRestaurantMenu = (resId) => {
  const [resMenu, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // console.log(restaurantMenuData);
    const categories = restaurantMenuData?.cardGroupMap?.REGULAR?.cards;

    // const categories = resCards.filter(
    //   (section) =>
    //     section?.card?.card?.["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // );

    // console.log(categories);
    setResInfo(categories);
  };

  return resMenu;
};

export default useRestaurantMenu;
