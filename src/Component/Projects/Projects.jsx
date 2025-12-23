import React, { useEffect, useState } from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { FiLayers } from "react-icons/fi";
import Cp1 from "../../assets/project1/cp-s-1.webp";
import Cp2 from "../../assets/project1/cp-s-2.webp";
import Cp3 from "../../assets/project1/cp-s-3.webp";
import Cp4 from "../../assets/project1/cp-s-4.webp";
import Cp5 from "../../assets/project1/cp-s-5.webp";
import P1 from "../../assets/project1/about-us-image.jpg";
import { Button, ButtonGroup, createTheme, ThemeProvider } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

const Projects = () => {
  const customTheme = createTheme({
    buttonGroup: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
});
  const petImages = [Cp1, Cp2, Cp3, Cp4, Cp5];

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
        <div className="border border-primary rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            <img
              src={P1}
              alt="Project Image"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="">
            <h1 className="font-extrabold text-4xl epun tracking-wide">
              Cuddly Paws
            </h1>
            <p className="font-medium text-lg text-justify py-1">
              Cuddly Paws is a full-stack pet adoption and donation platform
              where users can list pets, create fundraising campaigns, and
              manage adoptions, featuring secure authentication, role-based
              access, responsive design, and real-time data handling.
            </p>
            <p className="font-bold text-lg text-justify py-1">
              → Secure Authentication & Role-Based Access <br />
              → Pet Adoption & Donation Campaign Management <br />→ Fast,
              Responsive UI with Infinite Scrolling & Dark Mode
            </p>

            <div className="flex flex-wrap gap-5 py-2">
              <p className="px-4 py-1 bg-blue-200 text-blue-800 font-bold rounded-lg text-xl">
                React
              </p>
              <p className="px-4 py-1 bg-gray-200 text-gray-800 font-bold rounded-lg text-xl">
                Express JS
              </p>
              <p className="px-4 py-1 bg-green-200 text-green-800 font-bold rounded-lg text-xl">
                Mongo DB
              </p>
              <p className="px-4 py-1 bg-fuchsia-200 text-fuchsia-800 font-bold rounded-lg text-xl">
                JWT
              </p>
            </div>
            <div className="py-1">
              <ThemeProvider theme={customTheme}>
                <ButtonGroup outline theme={customTheme} color="primary">
                <Button>
                  <HiUserCircle className="me-2 h-4 w-4" />
                  Profile
                </Button>
                <Button>
                  <HiAdjustments className="me-2 h-4 w-4" />
                  Settings
                </Button>
                <Button className="primary">
                  <HiCloudDownload className="me-3 h-4 w-4" />
                  Messages
                </Button>
              </ButtonGroup>
              </ThemeProvider>
            </div>
          </div>
        </div>

        {/* Project 1 */}
        <div className="border border-white rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            {petImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Pet ${index + 1}`}
                className={`w-full h-full object-cover object-center absolute  top-0 left-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
          <div className="pt-10">
            <h1 className="font-bold text-2xl">Cuddly Paws</h1>
            <p className="font-medium text-lg">Pet Adotpion Platform</p>
            <button>Live</button>
            <button>Github</button>
            <button>Details</button>
          </div>
        </div>

        {/* Project 1 */}
        <div className="border border-white rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            {petImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Pet ${index + 1}`}
                className={`w-full h-full object-cover object-center absolute  top-0 left-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
          <div className="pt-10">
            <h1 className="font-bold text-2xl">Cuddly Paws</h1>
            <p className="font-medium text-lg">Pet Adotpion Platform</p>
            <button>Live</button>
            <button>Github</button>
            <button>Details</button>
          </div>
        </div>

        {/* Project 1 */}
        <div className="border border-white rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            {petImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Pet ${index + 1}`}
                className={`w-full h-full object-cover object-center absolute  top-0 left-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
          <div className="pt-10">
            <h1 className="font-bold text-2xl">Cuddly Paws</h1>
            <p className="font-medium text-lg">Pet Adotpion Platform</p>
            <button>Live</button>
            <button>Github</button>
            <button>Details</button>
          </div>
        </div>

        {/* Project ends */}
      </div>
    </div>
  );
};

export default Projects;
