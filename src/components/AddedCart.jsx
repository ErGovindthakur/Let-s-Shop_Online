import React from "react";
import { useSelector } from "react-redux";
import { clearItems } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const AddedCart = () => {
  const cartItem = useSelector((store) => store.cart.cartItems);
  console.log(cartItem);

  const dispatch = useDispatch();
  const clearCartItemHandler = () => {
    dispatch(clearItems());
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="w-full flex justify-between">
        <h1>Here is your added items -: ({cartItem.length})</h1>
        <button
          onClick={clearCartItemHandler}
          className="text-white rounded-sm px-5 py-2 bg-violet-500"
        >
          Remove All
        </button>
      </div>
      {cartItem.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <button className="text-white rounded-md px-5 py-2 bg-red-500">
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddedCart;
