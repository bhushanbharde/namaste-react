import { CDN_URL } from "../utils/constants";

const Bannner = (props) => {
  const cuisines = props.data;
  // console.log(cuisines);

  return (
    <div className="banner">
      <h2>What's on your mind?</h2>
      <div className="banner-img">
        {cuisines.map((item) => (
          <img key={item.id} src={CDN_URL + item.imageId} alt={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Bannner;
