import { CDN_URL } from "../utils/constants";

const ResItem = (props) => {
  // console.log(props);
  const { name, imageId, description, price } = props.menu.card.info;
  return (
    <div className="flex align-center my-2 pt-3 pb-8 border-b border-b-gray-200">
      <div className="w-9/12">
        <p className="text-lg">{name}</p>
        <p className="text-md">₹ {price / 100}</p>
        <p className="text-gray-500 font-light text-md line-clamp-2 mt-2">
          {description}
        </p>
      </div>
      <div className="w-3/12 ml-4 relative">
        <img
          src={CDN_URL + imageId}
          alt="menu_img"
          className="rounded-2xl object-cover aspect-square w-38"
        />
        <button className="px-9 py-2 border border-gray-200 rounded-lg absolute -bottom-4 right-2/6 mx-auto bg-white text-green-600">ADD</button>
      </div>
    </div>
  );
};

export default ResItem;
