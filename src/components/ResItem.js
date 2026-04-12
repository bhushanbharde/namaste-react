import { CDN_URL } from "../utils/constants";

const ResItem = (props) => {
  console.log(props);
  const { name, imageId, description, price } = props.menu.card.info;
  return (
    <div className="flex align-center my-2 py-4 border-t border-t-gray-200">
      <div className="w-9/12">
        <p className="text-lg">{name}</p>
        <p className="text-md">₹ {price / 100}</p>
        <p className="text-gray-500 font-light text-md line-clamp-2 mt-2">
          {description}
        </p>
      </div>
      <div className="w-3/12 ml-4">
        <img src={CDN_URL + imageId} alt="menu_img" />
      </div>
    </div>
  );
};

export default ResItem;
