import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    const restList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    const resInfo = restList.find((res) => res.info.id == Number(resId));
    setResInfo(resInfo);
  };

  return resInfo;
};

export default useRestaurantMenu;
