import React from "react";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:pl-20 pt-5 lg:pr-16">
      <div className="w-[45%] flex flex-col ">
        <div className="text-4xl font-bold text-gray-700 ">
          Explore
          <span className="text-gray-500"> Profiles</span>, Discover
          <span className="text-gray-500"> Locations </span>
        </div>
        <div className="font-semibold text-gray-600 text-xl pt-5">
          Discover geographic connections with every profile
        </div>
      </div>
      <div className="w-[58%] flex items-center justify-end">
        <img className="w-[]" src="/images/mapVector.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
