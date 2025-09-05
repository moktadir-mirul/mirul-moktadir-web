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


const Skills = () => {
  const skillSet = [Html5Icon, CSS3Icon, JSIcon, ReactJS, NodeJS, Mongo, Express, Tail];


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
            className="cursor-pointer mx-10 w-20 md:w-24 md:h-24 h-20 hover:scale-120 transition-transform duration-300"
          />
        ))}
      </Marquee>
              </div>
      </div>
    </div>
  );
};

export default Skills;
