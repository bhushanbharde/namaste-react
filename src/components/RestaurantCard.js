import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <div className="res-rating">
          <p>
            <i className="fa-solid fa-star" style={{ marginRight: "3px", color: "green" }}></i>
            {avgRating}
          </p>
          <i className="fa-solid fa-circle" style={{ fontSize: "5px",margin: "5px 5px 0px 0px" }}></i>
          {/* <p>|</p> */}
          <p>{sla.deliveryTime} minutes</p>
        </div>

        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
