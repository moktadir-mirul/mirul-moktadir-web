import React, { useEffect, useState } from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { FiLayers } from "react-icons/fi";
import Cp1 from "../../assets/project1/cp-s-1.webp";
import Cp2 from "../../assets/project1/cp-s-2.webp";
import Cp3 from "../../assets/project1/cp-s-3.webp";
import Cp4 from "../../assets/project1/cp-s-4.webp";
import Cp5 from "../../assets/project1/cp-s-5.webp";

const Projects = () => {
  const petImages = [Cp1, Cp2, Cp3, Cp4, Cp5];
  console.log(petImages)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % petImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [petImages.length]);
  return (
    <div className="w-11/12 mx-auto py-8 lg:py-12" id="projects">
      {/* Projects Headline */}
      <div>
        {/* Heading */}
        <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
          <FiLayers style={{ color: "#22d3ee" }} />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
            {/* Projects Headline */}
            <DecryptedText
              text="Projects"
              animateOn="view"
              speed={150}
              maxIterations={10}
              revealDirection="start"
            />
          </h2>
        </div>
      </div>

      {/* Projects Details */}
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Project 1 */}
        <div className="border border-white rounded-lg p-5 relative">
          {petImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Pet ${index + 1}`}
                  className={`w-1/2 h-1/2 object-cover object-center absolute  top-0 left-0 transition-opacity duration-1000 ${
                    index === currentIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                />
              ))}
Hellio
Hellio ,<br />
Hellio
Hellio
Hellio
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
