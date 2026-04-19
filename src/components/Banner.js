import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const Bannner = (props) => {
  const cuisines = props.data;

  return (
    <div className="pt-10 pb-5">
      <h2 className="text-2xl font-semibold">What's on your mind?</h2>
      <div className="flex justify-between overflow-auto">
        {cuisines.map((item) => {
          const link = item?.action?.link;

          if (!link) return null;

          const collectionId = new URL(link).searchParams.get("collection_id");

          return (
            <Link to={"/collections/" + collectionId} key={item.id}>
              <img
                className="mr-36"
                src={CDN_URL + item.imageId}
                alt={item.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Bannner;
