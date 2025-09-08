import React from "react";
import { FaToolbox } from "react-icons/fa";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import Html5Icon from "../../assets/Skills-icon/html-5.png";
import CSS3Icon from "../../assets/Skills-icon/css-3.png";
import JSIcon from "../../assets/Skills-icon/js.png";
import ReactJS from "../../assets/Skills-icon/react.png";
import NodeJS from "../../assets/Skills-icon/node.png";
import Express from "../../assets/Skills-icon/icons8-express-js-100.png";
import Mongo from "../../assets/Skills-icon/mongo.png";
import Tail from "../../assets/Skills-icon/tailwind.png";
import Marquee from "react-fast-marquee";
import ViteI from "../../assets/Skills-icon/vite.png";
import NextI from "../../assets/Skills-icon/nextJS.png";
import GitI from "../../assets/Skills-icon/git.png";
import FirebaseI from "../../assets/Skills-icon/firebase.png";
import NPMI from "../../assets/Skills-icon/npm.png";
import JWTI from "../../assets/Skills-icon/jwt.png";
import VSC from "../../assets/Skills-icon/vs-code.png";
import Axios from "../../assets/Skills-icon/axios.png";
import TanI from "../../assets/Skills-icon/tanstack-icon.png";

const Skills = () => {
  const skillSet = [
    Html5Icon,
    CSS3Icon,
    JSIcon,
    ReactJS,
    NodeJS,
    Mongo,
    Express,
    Tail,
  ];
  const techSet = [GitI, FirebaseI, ViteI, NPMI, JWTI, VSC, Axios, TanI];

  return (
    <div id="skills" className="w-11/12 mx-auto py-8 lg:py-12">
      <div>
        {/* Heading */}
        <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
          <FaToolbox style={{ color: "#22d3ee" }} />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
            {/* About Me */}
            <DecryptedText
              text="Skills"
              animateOn="view"
              speed={150}
              maxIterations={10}
              revealDirection="start"
            />
          </h2>
        </div>

        {/* Animated Icons */}
        <div className="py-10">
          <Marquee speed={20} pauseOnHover={true} gradient={false}>
            {skillSet.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="skill"
                className="cursor-pointer mx-10 w-20 md:w-24 md:h-auto hover:scale-x-120 transition-transform duration-300"
              />
            ))}
          </Marquee>
        </div>

        {/* Animated Tools Icon */}
        <div className="py-10">
          <Marquee
            direction="right"
            speed={20}
            pauseOnHover={true}
            gradient={false}
          >
            {techSet.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="skill"
                className="cursor-pointer mx-10 w-20 md:w-24 md:h-auto hover:scale-x-120 transition-transform duration-300"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
