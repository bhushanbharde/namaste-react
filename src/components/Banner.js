import { CDN_URL } from "../utils/constants";

const Bannner = (props) => {
  const cuisines = props.data;

  return (
    <div className="pt-10 pb-5">
      <h2 className="text-2xl font-semibold">What's on your mind?</h2>
      <div className="flex overflow-auto">
        {cuisines.map((item) => (
          <img className="w-36 mr-5" key={item.id} src={CDN_URL + item.imageId} alt={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Bannner;
