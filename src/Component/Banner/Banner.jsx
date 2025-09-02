import React, { useEffect, useRef } from "react";
import PortImg from "../../assets/portfolio-imgNbg.png";
import ShinyText from "../../ReactBits/ShinyText/ShinyText";
import RotatingText from "../../ReactBits/RotatingText/RotatingText";
import { FaFileDownload, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { animate } from "motion";

const Banner = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const controls = animate(
      circleRef.current,
      { rotate: [0, 180, 0] },
      {
        duration: 10, // 6 seconds for full back & forth
        ease: "easeInOut", // Smooth easing
        repeat: Infinity, // Infinite loop
      }
    );

    return () => controls.stop();
  }, []);
  return (
    <div className="w-11/12 mx-auto py-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
      {/* Text Area */}
      <div className="border border-gray-50  text-center md:text-left flex-1 flex flex-col justify-between">
        {/* Theme Sentence */}
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <div className="hidden md:block bg-gradient-to-r from-primary to-secondary w-4 h-4 rounded-full"></div>
          <h1 className="text-xl tracking-wide">
            Believe in crafting new experience, through coding
          </h1>
        </div>

        {/* Intro */}
        <div className="">
          <ShinyText
            text="I'm Mirul Moktadir"
            disabled={false}
            speed={3}
            className="custom-class text-5xl sm:text-6xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          />
          <RotatingText
            texts={[
              "FrontEnd Developer",
              "MERN Stack Developer",
              "Full Stack Developer",
            ]}
            mainClassName="text-3xl sm:text-4xl md:text-5xl text-green-50 font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center md:justify-start rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          <p className="mx-auto md:mx-0 text-lg sm:text-xl tracking-wider">
            Hi, I’m Mirul Moktadir Khan! I’m a passionate MERN stack enthusiast
            who loves turning ideas into interactive web experiences.
            {/* I enjoy learning,
        experimenting, and building projects that make the web more fun and
        user-friendly.  */}
            Every line of code I write takes me one step closer to becoming the
            developer I dream to be!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-3 ">
          <Link
            to={"https://www.linkedin.com/in/mirulmoktadirkhan/"}
            target="_blank"
            className="hover:scale-120 transition duration-200"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-lime-200 flex items-center justify-center">
              <FaLinkedinIn className="text-lime-200" size={32} />
            </div>
          </Link>
          <Link
            to={"https://github.com/moktadir-mirul"}
            target="_blank"
            className="hover:scale-120 transition duration-100"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-lime-200 flex items-center justify-center">
              <FiGithub className="text-lime-200" size={32} />
            </div>
          </Link>
          <Link
            to={"https://x.com/MirulMoktadir"}
            target="_blank"
            className="hover:scale-120 transition duration-100"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-lime-200 flex items-center justify-center">
              <FaXTwitter className="text-lime-200" size={32} />
            </div>
          </Link>
        </div>
        {/* Button Area */}
        <div className="flex justify-center lg:justify-start">
          <button className="flex items-center text-black gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r rounded-4xl from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer duration-400 transition text-xl font-semibold">
            <FaFileDownload size={20} /> Download
          </button>
        </div>
      </div>

      {/* Image Area */}
      <div className="flex-1  flex justify-center md:justify-end">
        <div
          ref={circleRef}
          className="hidden lg:block nav-bg p-2 border border-gray-600"
        ></div>
        <div className="overflow-hidden bg-gradient-to-r from-primary to-secondary p-3 sm:p-5 rounded-full">
          <div className="flex items-center justify-center bg-green-950 rounded-full overflow-hidden">
            <img className="object-cover" src={PortImg} alt="Mirul Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
