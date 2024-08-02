// components/Drawer.js
import React from "react";
import { Card2 } from "./card2";

export const Drawer = ({ isOpen, onClose, productList }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="fixed right-0 top-0 h-full w-[500px] bg-white shadow-lg overflow-y-auto p-5">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
        >
          &times;
        </button>
        {productList.map((item) => (
          <Card2 key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
