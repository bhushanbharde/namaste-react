import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Link } from "react-router";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    //click button
    //dispatch(action)
    //call reducer function
    dispatch(clearCart());
  }

  if (cartItems.length == 0) {
    return (
      <div className="px-60 py-20 text-center">
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
        <p className="text-gray-500 font-sm my-2 font-light">
          You can go to home page to view more restaurants
        </p>
        <button className="px-4 py-2 mt-4 bg-[#ff5200] text-white hover:cursor-pointer uppercase">
          <Link to="/">See restaurants near you</Link>
        </button>
      </div>
    );
  }
  return (
    <div className="px-60 py-20">
      <div className="flex items-center justify-between border-b border-b-gray-200 pb-3">
        <h1 className="text-3xl font-bold ">Cart</h1>
        <button
          onClick={handleClearCart}
          className="px-4 py-2 bg-black text-white hover:cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
      <div>
        <ItemList menu={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
