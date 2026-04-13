import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import restaurantMenuData from "./restaurantData.json"

const useRestaurantMenu = (resId) => {
  const [resMenu, setResInfo] = useState(null);
  // console.log(restaurantMenuData);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const categories = restaurantMenuData?.cardGroupMap?.REGULAR?.cards;
    setResInfo(restaurantMenuData);
  };

  return resMenu;
};

export default useRestaurantMenu;
