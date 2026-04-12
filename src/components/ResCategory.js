import { OFFER_ICON, OFFER_ICON_1 } from "../utils/constants";
import ResItem from "./ResItem";

const ResCategory = (props) => {
  console.log(props);

  const { title, itemCards } = props.data?.card?.card;

  return (
    <div className="overflow-hidden">
      <div className="border border-amber-600 p-10 my-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold py-2">
            {title} ({itemCards.length})
          </h1>
          <span className="transition-transform duration-300">
            <i className="fa-solid fa-angle-up "></i>
          </span>
        </div>

        <div className="">
          {itemCards.map((item) => (
            <ResItem key={item.card.info.id} menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
