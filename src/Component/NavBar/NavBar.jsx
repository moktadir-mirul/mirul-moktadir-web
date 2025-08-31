import React from 'react';
import Logo from "../../assets/mirul-logoC.png";

const NavBar = () => {
    return (
        <div className='w-11/12 mx-auto border border-gray-600 my-5 px-5 py-5 rounded-4xl'>
            {/* For Smaller Devices */}
            <div>

            </div>

            {/* For Large Devices */}
            <div>
                {/* For Logo Area */}
                <div className='epun flex items-center gap-2'>
                    <div><img className='w-12 h-12' src={Logo} alt="Mirul Logo" /></div>
                    <h1 className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                        Mirul
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NavBar;