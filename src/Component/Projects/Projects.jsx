import React from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { FiLayers } from "react-icons/fi";
import P1 from "../../assets/project1/about-us-image.jpg";
import { CgDetailsMore, CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";


//     buttonGroup: {
//     color: {
//       groupColor: "bg-red-500 hover:bg-red-600",
//       groupColorSecond: "bg-blue-500 hover:bg-blue-600",
//     },
//     size: {
//       large: "px-6 py-3 text-lg",
//     },
//   },
//   button: {
//     color: {
//       primary: "bg-red-500 hover:bg-red-600",
//       secondary: "bg-blue-500 hover:bg-blue-600",
//     },
//     size: {
//       lg: "px-6 py-3 text-lg",
//     },
//   },
// });

const Projects = () => {
  

    
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
            <div className="flex flex-col">
              <h1 className="font-extrabold text-4xl epun tracking-wide">
                Cuddly Paws
              </h1>
              <div className="flex flex-wrap items-center py-3 gap-3">
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg">
                    <CgMediaLive /> Live
                  </button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"> <FaGithub /> Github</button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"><CgDetailsMore /> Details</button>
                </div>
              </div>
            </div>
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

            <div className="flex flex-wrap gap-2 py-2">
              <p className="px-3 py-1 bg-blue-200 text-blue-800 font-bold rounded-lg text-xl">
                React
              </p>
              <p className="px-3 py-1 bg-gray-200 text-gray-800 font-bold rounded-lg text-xl">
                Express JS
              </p>
              <p className="px-3 py-1 bg-green-200 text-green-800 font-bold rounded-lg text-xl">
                Mongo DB
              </p>
              <p className="px-3 py-1 bg-fuchsia-200 text-fuchsia-800 font-bold rounded-lg text-xl">
                JWT
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-primary rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            <img
              src={P1}
              alt="Project Image"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-4xl epun tracking-wide">
                Royal Bites Restaurant 
              </h1>
              <div className="flex flex-wrap items-center py-3 gap-3">
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg">
                    <CgMediaLive /> Live
                  </button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"> <FaGithub /> Github</button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"><CgDetailsMore /> Details</button>
                </div>
              </div>
            </div>
            <p className="font-medium text-lg text-justify py-1">
              A client-side Restaurant Management website where users can add, edit, and order food items as well as manage food items with details. Orders update quantity in real-time, and a gallery page lets users view and enlarge food images.
            </p>
            <p className="font-bold text-lg text-justify py-1">
              → Dynamic Food Management & Ordering <br />
              → Secure & Smooth User Experience <br />
              → Easy Search & Responsive Design
            </p>

            <div className="flex flex-wrap gap-2 py-2">
              <p className="px-3 py-1 bg-blue-200 text-blue-800 font-bold rounded-lg text-xl">
                React
              </p>
              <p className="px-3 py-1 bg-gray-200 text-gray-800 font-bold rounded-lg text-xl">
                Express JS
              </p>
              <p className="px-3 py-1 bg-green-200 text-green-800 font-bold rounded-lg text-xl">
                Mongo DB
              </p>
              <p className="px-3 py-1 bg-fuchsia-200 text-fuchsia-800 font-bold rounded-lg text-xl">
                JWT
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-primary rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            <img
              src={P1}
              alt="Project Image"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-4xl epun tracking-wide">
                Plant Companion
              </h1>
              <div className="flex flex-wrap items-center py-3 gap-3">
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg">
                    <CgMediaLive /> Live
                  </button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"> <FaGithub /> Github</button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"><CgDetailsMore /> Details</button>
                </div>
              </div>
            </div>
            <p className="font-medium text-lg text-justify py-1">
              An Online Plant Care Tracker where users can add, edit, and manage plants with details like health status and watering schedules. Users can view plant details, and access to certain routes is restricted to authenticated users. . 
            </p>
            <p className="font-bold text-lg text-justify py-1">
              → Secure Authentication & Role-Based Access <br />
              → Pet Adoption & Donation Campaign Management <br />→ Fast,
              Responsive UI with Infinite Scrolling & Dark Mode
            </p>

            <div className="flex flex-wrap gap-2 py-2">
              <p className="px-3 py-1 bg-blue-200 text-blue-800 font-bold rounded-lg text-xl">
                React
              </p>
              <p className="px-3 py-1 bg-gray-200 text-gray-800 font-bold rounded-lg text-xl">
                Express JS
              </p>
              <p className="px-3 py-1 bg-green-200 text-green-800 font-bold rounded-lg text-xl">
                Mongo DB
              </p>
              <p className="px-3 py-1 bg-fuchsia-200 text-fuchsia-800 font-bold rounded-lg text-xl">
                JWT
              </p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="border border-primary rounded-lg p-5 relative flex flex-col gap-5">
          <div>
            <img
              src={P1}
              alt="Project Image"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-4xl epun tracking-wide">
                Career Compass
              </h1>
              <div className="flex flex-wrap items-center py-3 gap-3">
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg">
                    <CgMediaLive /> Live
                  </button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"> <FaGithub /> Github</button>
                </div>
                <div>
                  <button className="px-5 bg-gradient-to-r from-primary to-secondary cursor-pointer py-1  hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-lg"><CgDetailsMore /> Details</button>
                </div>
              </div>
            </div>
            <p className="font-medium text-lg text-justify py-1">
              An online job portal where users can explore job listings, view details, and apply directly. User authentication is handled with Firebase, supporting email/password and Google login, along with features like password reset, name and photo updates, and protected routes.
            </p>
            <p className="font-bold text-lg text-justify py-1">
              → Secure Authentication & Role-Based Access <br />
              → Pet Adoption & Donation Campaign Management <br />→ Fast,
              Responsive UI with Infinite Scrolling & Dark Mode
            </p>

            <div className="flex flex-wrap gap-2 py-2">
              <p className="px-3 py-1 bg-blue-200 text-blue-800 font-bold rounded-lg text-xl">
                React
              </p>
              <p className="px-3 py-1 bg-gray-200 text-gray-800 font-bold rounded-lg text-xl">
                Express JS
              </p>
              <p className="px-3 py-1 bg-green-200 text-green-800 font-bold rounded-lg text-xl">
                Mongo DB
              </p>
              <p className="px-3 py-1 bg-fuchsia-200 text-fuchsia-800 font-bold rounded-lg text-xl">
                JWT
              </p>
            </div>
          </div>
        </div>

        {/* Project ends */}
      </div>
    </div>
  );
};

export default Projects;
