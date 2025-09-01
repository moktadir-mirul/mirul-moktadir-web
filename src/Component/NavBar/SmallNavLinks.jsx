import React, { useContext } from 'react';
import ConContext from '../../ConProvider/ConContext';

const SmallNavLinks = () => {
    const {openMenu, setOpenMenu} = useContext(ConContext);
    return (
        <div onClick={() => {setOpenMenu(!openMenu)}} className={`lg:hidden absolute right-16 ${openMenu ? "top-24" : "-top-200"} duration-200 font-semibold rounded-sm bg-gradient-to-r from-primary to-secondary text-black`}>
        <div className='px-5 py-1 hover:bg-green-200 cursor-pointer'>
            <a  href="#">Home</a>
          </div>
          <div className='px-5 py-1 hover:bg-green-200 cursor-pointer'>
            <a href="#about">About Me</a>
          </div>
          <div className='px-5 py-1 hover:bg-green-200 cursor-pointer'>
            <a href="#skills">Skills</a>
          </div>
          <div className='px-5 py-1 hover:bg-green-200 cursor-pointer'>
            <a href="#projects">Projects</a>
          </div>
          <div className='px-5 py-1 hover:bg-green-200 cursor-pointer'>
            <a href="#contact">Contact</a>
          </div>
        </div>
    );
};

export default SmallNavLinks;