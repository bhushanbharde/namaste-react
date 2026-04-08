import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { OFFER_ICON, OFFER_ICON_1 } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.636490590050606&lng=73.73401521762636&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      const restList =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      const resInfo = restList.find((res) => res.info.id == Number(resId));
      setResInfo(resInfo);
      console.log(resInfo);
    } catch (err) {
      console.error(err);
    }
  };

  if (resInfo == null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    sla,
    costForTwo,
    areaName,
  } = resInfo.info;

  return (
    <div className="container-fluid">
      <h1>{name}</h1>
      <div className="menu-card-outer">
        <div className="menu-card">
          <div style={{ padding: "20px" }}>
            <div className="menu-heading">
              <i
                className="fa-solid fa-star"
                style={{ marginRight: "3px", color: "green" }}
              ></i>
              <span>
                {avgRatingString} ({totalRatingsString} ratings)
              </span>
              <i
                className="fa-solid fa-circle"
                style={{
                  color: "#888",
                  fontSize: "4px",
                  margin: "0px 5px 0px 5px",
                }}
              ></i>

              <span>{costForTwo}</span>
            </div>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <ul>
              <li>
                Outlet <span style={{ color: "#888" }}>{areaName}</span>{" "}
              </li>
              <li>
                <span>{sla.slaString}</span>
              </li>
            </ul>
            {/* <p>{sla.slaString}</p>
            <p>{areaName}</p> */}
          </div>
          <div className="div-hr">
            <span>Free delivery on orders above ₹99</span>
          </div>
        </div>
      </div>

      <br />
      <h2>Deals for you</h2>
      <div className="deals">
        <div className="offer-card">
          <img src={OFFER_ICON} />
          <div>
            <h3>Items at 195</h3>
            <span>ON SELECT ITEMS</span>
          </div>
        </div>

        <div className="offer-card">
          <img src={OFFER_ICON_1} />
          <div>
            <h3>20% Off Upto ₹50</h3>
            <span>USE TRYNEW</span>
          </div>
        </div>

        <div className="offer-card">
          <img src={OFFER_ICON} />
          <div>
            <h3>Flat Rs.50 off</h3>
            <span>USE FLAT50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
