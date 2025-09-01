import React, { useContext } from "react";
import Logo from "../../assets/mirul-logoB.png";
import { FaFileDownload } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import ConContext from "../../ConProvider/ConContext";

const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(ConContext);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      {/* For Smaller Devices */}
      <div className="flex justify-between items-center lg:hidden">
        {/* For Logo Area */}
        <div className="epun flex items-center gap-2">
          <div className="p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
            <img className="w-12 h-12" src={Logo} alt="Mirul Logo" />
          </div>
          <h1 className="font-semibold text-3xl">Mirul</h1>
        </div>

        {/* For Links Area */}
        <div className="relative z-20" onClick={handleMenu}>
          <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-md text-black">
            {openMenu ? (
              <MdClose size={30}></MdClose>
            ) : (
              <FiMenu size={30}></FiMenu>
            )}
          </div>
        </div>
      </div>

      {/* For Large Devices */}
      <div className="hidden lg:flex justify-between items-center">
        {/* For Logo Area */}
        <div className="epun flex items-center gap-2">
          <div className="p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
            <img className="w-12 h-12" src={Logo} alt="Mirul Logo" />
          </div>
          <h1 className="font-semibold text-3xl">Mirul</h1>
        </div>

        {/* NavLink Area */}
        <div className="flex gap-5 items-center text-lg">
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
        <div className="text-black text-lg font-medium">
          <button className="flex items-center gap-2 px-10 py-2 bg-gradient-to-r rounded-4xl from-primary to-secondary">
            <FaFileDownload size={20}></FaFileDownload> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
