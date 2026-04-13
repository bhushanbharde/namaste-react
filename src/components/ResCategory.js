import { useState } from "react";
import { OFFER_ICON, OFFER_ICON_1 } from "../utils/constants";
import MenuItem from "./MenuItem";

const ResCategory = (props) => {
  // console.log(props);

  const { title, itemCards } = props.data?.card?.card;
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem)
  }

  return (
    <div className="overflow-hidden">
      <div className="py-1 my-4">
        <div
          className="flex justify-between items-center cursor-pointer border-b-14 border-b-gray-200"
          onClick={handleClick}
        >
          <h1 className="text-xl font-semibold py-2">
            {title} ({itemCards.length})
          </h1>
          <span className="">
            <i className="fa-solid fa-angle-up "></i>
          </span>
        </div>

        <div className="">
          {itemCards.map(
            (item) =>
              showItem && <MenuItem key={item.card.info.id} menu={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
