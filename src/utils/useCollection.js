import { useEffect, useState } from "react";

const useCollection = (collectionId) => {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6363467&lng=73.7343905&collection=" +
        collectionId +
        "&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    setCollection(json);
  };

  return collection;
};

export default useCollection;