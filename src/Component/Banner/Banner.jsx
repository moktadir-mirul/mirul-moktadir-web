import React from "react";
import PortImg from "../../assets/portfolio-imgNbg.png";
import ShinyText from "../../ReactBits/ShinyText/ShinyText";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-10 flex justify-between">
      {/* Text Area */}
      <div className="space-y-5">
        {/* Theme Sentence */}
        <div className="flex gap-2 items-center justify-start">
          <div className="bg-gradient-to-r from-primary to-secondary w-4 h-4 rounded-full"></div>
          <h1 className="text-xl tracking-wide">
            Believe in crafting new experience, through coding
          </h1>
        </div>

        {/* Intro */}
        <div>
          <ShinyText
            text="I'm Mirul Moktadir"
            disabled={false}
            speed={3}
            className="custom-class text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          />
        </div>
      </div>

      {/* Image Area */}
      <div>
        <div className="overflow-hidden bg-gradient-to-r from-primary to-secondary p-5 rounded-full">
          <div className=" flex items-center justify-center bg-green-950 rounded-full">
            <img className="w-40 h-40" src={PortImg} alt="Mirul Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
