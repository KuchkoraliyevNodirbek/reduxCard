import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/products-reducer";

export const Card = ({ name, price, count, img, id }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 m-2 w-64">
      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h1 className="text-lg font-semibold mt-2">{name}</h1>
      <strong className="block text-xl mt-1">{price}$</strong>
      <p className="mt-1 text-gray-600">Count {count}</p>
      <button
        onClick={buyProduct}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buy
      </button>
    </div>
  );
};
