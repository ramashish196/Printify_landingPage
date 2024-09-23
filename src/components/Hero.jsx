import React from "react";
import { IoCheckmark, IoPlayCircleOutline } from "react-icons/io5";

import Card from "./Card";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-4/5 h-full mx-auto pt-4 justify-between">
        <div className="flex flex-col gap-5 pt-20">
          <h1 className="text-6xl font-semibold">Create and Sell</h1>
          <h1 className="text-6xl font-semibold">Custom Products</h1>

          <div className="flex items-center space-x-2">
            <IoCheckmark className="text-green-500" />
            <p className="text-lg font-semibold">100% Free to use</p>
          </div>

          <div className="flex items-center space-x-2">
            <IoCheckmark className="text-green-500" />
            <p className="text-lg font-semibold">900+ High-Quality Products</p>
          </div>

          <div className="flex items-center space-x-2">
            <IoCheckmark className="text-green-500" />
            <p className="text-lg font-semibold">
              Largest global print network
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-40 h-12 bg-green-400 border rounded-md shadow-md font-semibold hover:bg-green-500">
              Start for free
            </button>
            <div className="w-40 h-12 flex items-center gap-3 border rounded-md shadow-md font-semibold hover:text-green-600">
              <IoPlayCircleOutline className="text-xl" />
              <button className=" px-3 py-1">How it works?</button>
            </div>
          </div>
          <p className="text-lg text-green-600 font-semibold">
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div className="pt-10">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Hero;
