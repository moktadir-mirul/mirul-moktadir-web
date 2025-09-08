import React from 'react';
import DecryptedText from '../../ReactBits/DecryptedText/DecryptedText';
import { FaToolbox } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';

const Education = () => {
    return (
        <div className="w-11/12 mx-auto py-8 lg:py-12" id='edu'>
          <div>
            {/* Heading */}
                    <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
                      <GiBookCover style={{ color: "#22d3ee" }} />
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
                        {/* About Me */}
                        <DecryptedText
                          text="Education"
                          animateOn="view"
                          speed={150}
                          maxIterations={10}
                          revealDirection="start"
                        />
                      </h2>
                    </div>
            </div>  
        </div>
    );
};

export default Education;