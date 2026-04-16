import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useEffect, useState } from "react";
import { CDN_URL, OFFER_ICON, OFFER_ICON_1 } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo == null) return <Shimmer />;

  const menuData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuData.filter(
    (res) =>
      res.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const resAddress = resInfo.cards.find(
    (res) =>
      res?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
    loyaltyDiscoverPresentationInfo,
    logoCtx,
    totalRatingsString,
  } = resAddress.card.card.info;

  return (
    <div className="py-10 px-80">
      <h1 className="text-3xl font-semibold mb-8">{name}</h1>
      <div className="bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)] rounded-b-4xl px-4 pb-4">
        <div className="border border-[#e4e3ec] rounded-3xl bg-white">
          <div className="p-5 ">
            <div className="flex items-center ">
              <i className="fa-solid fa-star text-green-600 mr-1"></i>
              <span>
                {avgRating} ({totalRatingsString} ratings)
              </span>
              <i className="fa-solid fa-circle text-[4px] mx-2 text-gray-500"></i>

              <span>{costForTwoMessage}</span>
            </div>
            <p className="underline text-[#ff5200] pt-2 text-sm">
              {cuisines.join(", ")}
            </p>
            <ul className="text-sm pt-2 font-semibold ">
              <li className="pt-1">
                Outlet
                <span className="text-gray-500 font-light ml-5">
                  {areaName}
                </span>
              </li>
              <li className="pt-1 lowercase">
                <span>{sla.slaString}</span>
              </li>
            </ul>
          </div>
          <div className="rounded-b-[20px] text-[#ff5200] text-[14px] border-t border-[#e1e0e8] px-5 py-[14] bg-[linear-gradient(278deg,rgba(255,237,239,0.9)_6.25%,rgba(255,255,255,0)_33.99%,rgba(255,255,255,0)_93.75%)]">
            <div className="flex items-center">
              <img className="w-12 mr-3" src={CDN_URL + loyaltyDiscoverPresentationInfo?.logoCtx?.logo} />
              <span>{loyaltyDiscoverPresentationInfo.freedelMessage}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold my-5">Deals for you</h2>
      <div className="flex items-center">
        <div className="flex items-center justify-start min-w-62.5 px-5 py-3 border border-gray-300 rounded-3xl mr-5">
          <img src={OFFER_ICON} className="w-[50] mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Items at 195</h3>
            <span className="text-sm text-gray-500">ON SELECT ITEMS</span>
          </div>
        </div>

        <div className="flex items-center justify-start min-w-62.5 px-5 py-3 border border-gray-300 rounded-3xl mr-5">
          <img src={OFFER_ICON_1} className="w-[50] mr-4" />
          <div>
            <h3 className="text-lg font-semibold">20% Off</h3>
            <span className="text-sm text-gray-500">USE TRYNEW</span>
          </div>
        </div>

        <div className="flex items-center justify-start min-w-62.5 px-5 py-3 border border-gray-300 rounded-3xl mr-5">
          <img src={OFFER_ICON} className="w-[50] mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Flat Rs.50 off</h3>
            <span className="text-sm text-gray-500">USE FLAT50</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <h3 className="py-4 text-center mt-8">
          <i className="mx-2 fa-regular fa-circle-left"></i>
          MENU
          <i className="mx-2 fa-regular fa-circle-right"></i>
        </h3>
        <div>
          <input
            type="search"
            className="my-4 px-4 py-3 rounded-xl bg-gray-200 w-full"
            placeholder="Search for dishes"
          />
        </div>
        <div>
          {categories.map((category, index) => (
            <ResCategory
              key={category.card.card.categoryId}
              data={category}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
