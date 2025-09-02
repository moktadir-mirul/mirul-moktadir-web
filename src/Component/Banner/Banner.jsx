import React from "react";
import PortImg from "../../assets/portfolio-imgNbg.png";
import ShinyText from "../../ReactBits/ShinyText/ShinyText";
import RotatingText from "../../ReactBits/RotatingText/RotatingText";

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
          <RotatingText
            texts={["FrontEnd Developer", "MERN Stack Developer", "Full Stack Developer"]}
            mainClassName="text-5xl text-green-50 font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          <p className="max-w-[50%]">Hi, I’m Mirul Moktadir Khan! I’m a passionate MERN stack enthusiast who loves turning ideas into interactive web experiences. I enjoy learning, experimenting, and building projects that make the web more fun and user-friendly. Every line of code I write takes me one step closer to becoming the developer I dream to be!</p>
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
