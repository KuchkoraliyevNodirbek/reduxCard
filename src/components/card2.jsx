import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAmount,
  removeProduct,
} from "../redux/products/products-reducer";

export const Card2 = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 m-2 w-64">
      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h1 className="text-lg font-semibold mt-2">{name}</h1>
      <strong className="block text-xl mt-1">{userPrice}$</strong>
      <p className="mt-1 text-gray-600">Count {count}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => changeProductPrice("add")}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          +
        </button>
        <strong className="mx-3 text-lg">{userCount}</strong>
        {userCount > 1 ? (
          <button
            onClick={() => changeProductPrice("remove")}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeProduct(id))}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};
