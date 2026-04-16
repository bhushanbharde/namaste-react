import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConext from "../utils/UserConext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserConext);
  
  //Subcribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between items-center shadow-2xl px-20 py-2">
      <div className="">
        <img src={LOGO_URL} alt="" className="w-[60]" />
      </div>
      <div className="">
        <ul className="flex items-center">
          <li className="mx-5">
            Online
            {onlineStatus ? (
              <i className="fa-solid fa-circle text-[15px] mx-1 text-green-600"></i>
            ) : (
              <i className="fa-solid fa-circle text-[15px] mx-1 text-red-600"></i>
            )}
          </li>
          <li className="mx-5 hover:text-amber-600">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-5 hover:text-amber-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-5 hover:text-amber-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-5 hover:text-amber-600">
            <Link to="/notes">Notes</Link>
          </li>
          <li className="hidden">
            <button
              className="bg-amber-500 rounded-lg px-4 py-2 w-20 hover:cursor-pointer hover:bg-amber-600"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="mx-5">
            <i className="fa-solid fa-user font-bold mr-1"></i>
            {loggedInUser}
          </li>
          <li className="mx-5">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping font-2xl"></i>(
              {cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
