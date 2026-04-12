import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useEffect, useState } from "react";
import { OFFER_ICON, OFFER_ICON_1 } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo == null) return <Shimmer />;

  const categories = resInfo.filter(
    (res) =>
      res.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const resAddress = resInfo.find(
    (res) =>
      res?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
  );

  const {name, area} = resAddress.card.card

  console.log(categories);
  return (
    <div className="py-10 px-80">
      <h1 className="text-3xl font-semibold mb-8">
        {name}
      </h1>
      <div className="bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)] rounded-b-4xl px-4 pb-4">
        <div className="border border-[#e4e3ec] rounded-3xl bg-white">
          <div className="p-5 ">
            <div className="flex items-center ">
              <i className="fa-solid fa-star text-green-600 mr-1"></i>
              <span>4.5 (400 ratings)</span>
              <i className="fa-solid fa-circle text-[4px] mx-2 text-gray-500"></i>

              <span>400 for two</span>
            </div>
            <p className="underline text-[#ff5200] pt-2 text-sm">
              North Indian
            </p>
            <ul className="text-sm pt-2">
              <li className="pt-1">
                Outlet
                <span className="text-gray-500 font-light">Wakad</span>
              </li>
              <li className="pt-1">
                <span>30 mins</span>
              </li>
            </ul>
          </div>
          <div className="rounded-b-[20px] text-[#ff5200] text-[14px] border-t border-[#e1e0e8] px-5 py-[14] bg-[linear-gradient(278deg,rgba(255,237,239,0.9)_6.25%,rgba(255,255,255,0)_33.99%,rgba(255,255,255,0)_93.75%)]">
            <span>Free delivery on orders above ₹99</span>
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

      <div>
        <label>MENU</label>
        <div>
          {categories.map((item) => (
            <ResCategory key={item.card.card.categoryId} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
