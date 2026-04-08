import Header from "./Header";
import { useRouteError } from "react-router";

const Error = () => {

  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Oops...!</h1>
        <h2>{ err.status}: {err.statusText}</h2>
      </div>
    </div>
  );
};

export default Error;
