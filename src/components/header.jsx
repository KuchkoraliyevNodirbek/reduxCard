import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { totalCount } = useSelector((state) => state.product);

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-center">
        Total Products: {totalCount}
      </h1>
    </header>
  );
};
