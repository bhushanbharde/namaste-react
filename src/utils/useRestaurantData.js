import { useEffect, useState } from "react";
import { API_URL } from "./constants";


const useRestaurantData = () => {
  const [resList, setResList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setResList(json);
  };

  return resList;
};

export default useRestaurantData;
