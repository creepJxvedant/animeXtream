import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center relative w-screen h-screen bg-gray-900">
      <div className="relative w-28 h-28 -ml-24 sm:ml-0">
        <div className="absolute w-28 h-12 mt-16 ml-0 border-4 border-gray-200 box-border animate-box1"></div>
        <div className="absolute w-12 h-12 mt-0 ml-0 border-4 border-gray-200 box-border animate-box2"></div>
        <div className="absolute w-12 h-12 mt-0 ml-16 border-4 border-gray-200 box-border animate-box3"></div>
      </div>
      <div className="-ml-8 sm:ml-4 mt-2 left-1/2 top-3/4 text-white text-lg font-semibold absolute animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
