import { CDN_URL } from "../utils/constants";

const Bannner = (props) => {
  const cuisines = props.data;
  // console.log(cuisines);

  return (
    <div>
      <h3>What's on your mind?</h3>
      <div>
        {cuisines.map((item) => {
          <img src={CDN_URL + item.imageId} alt="" />
        })}
      </div>
    </div>
  );
};

export default Bannner;
