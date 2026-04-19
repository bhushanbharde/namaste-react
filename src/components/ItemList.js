import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";

const ItemList = (props) => {

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //dispatch an action
    dispatch(addItems(item));
  }

  const items = props.menu;
  const { name, imageId, description, price } = items;
  // console.log(props.menu);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between align-center my-2 pt-3 pb-8 border-b border-b-gray-200"
        >
          <div className="w-full">
            <p className="text-lg">{item.card.info.name}</p>
            <p className="text-md">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="text-gray-500 font-light text-md line-clamp-2 mt-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-50 ml-10 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="menu_img"
              className="rounded-2xl object-cover aspect-square w-full"
            />
            <button
              onClick={() => handleAddItems(item)}
              className="px-9 py-2 border border-gray-200 rounded-lg absolute -bottom-4 right-6 mx-auto bg-white text-green-600 hover:cursor-pointer hover:bg-gray-200"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
