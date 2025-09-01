import React from "react";
import Logo from "../../assets/mirul-logoC.png";
import { FaFileDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto border border-gray-600 my-5 px-5 py-5 rounded-4xl">
      {/* For Smaller Devices */}
      <div></div>

      {/* For Large Devices */}
      <div className="hidden lg:flex justify-between items-center">
        {/* For Logo Area */}
        <div className="epun flex items-center gap-2">
          <div>
            <img className="w-12 h-12" src={Logo} alt="Mirul Logo" />
          </div>
          <h1 className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Mirul
          </h1>
        </div>

        {/* NavLink Area */}
        <div className="flex gap-5 items-center">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#about">About Me</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Button Area */}
        <div className="text-black">
          <button className="flex items-center gap-2 px-10 py-2 bg-gradient-to-r rounded-xl from-primary to-secondary">
            <FaFileDownload size={20}></FaFileDownload> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
