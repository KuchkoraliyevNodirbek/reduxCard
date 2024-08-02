import React, { useState } from "react";
import { products } from "./data/data";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { useSelector } from "react-redux";
import { Drawer } from "./components/drawer";

function App() {
  const { productList } = useSelector((state) => state.product);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div className="mx-auto w-[1200px]">
        <Header />
        <div className="flex">
          <div className="flex w-full flex-wrap">
            {products.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <button
            onClick={toggleDrawer}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 ml-4 mt-4"
          >
            Toggle Drawer
          </button>
        </div>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          productList={productList}
        />
      </div>
    </>
  );
}

export default App;
