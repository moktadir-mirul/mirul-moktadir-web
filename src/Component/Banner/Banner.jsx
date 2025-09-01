import React from "react";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      {/* Text Area */}
      <div>
        <div className="flex gap-1 items-center">
          <div className="bg-gradient-to-r from-primary to-secondary w-4 h-4 rounded-full"></div>
          <h1 className="text-lg">Building the Web, One Pixel at a Time.</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
