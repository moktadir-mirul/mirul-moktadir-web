import React from "react";
import PortImg from "../../assets/portfolio-imgNbg.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-10 flex justify-between">
      {/* Text Area */}
      <div>
        <div className="flex gap-1 items-center justify-between">
          <div className="bg-gradient-to-r from-primary to-secondary w-4 h-4 rounded-full"></div>
          <h1 className="text-lg">Believe in crafting new experience, through coding</h1>
        </div>
      </div>

      {/* Image Area */}
      <div>
        <div className="bg-gradient-to-r from-primary to-secondary p-5 rounded-full">
          <div className=" flex items-center justify-center bg-green-950 rounded-full">
            <img className="w-40 h-40" src={PortImg} alt="Mirul Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
