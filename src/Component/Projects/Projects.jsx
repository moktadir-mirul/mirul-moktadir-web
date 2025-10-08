import React from 'react';
import DecryptedText from '../../ReactBits/DecryptedText/DecryptedText';
import { FiLayers } from 'react-icons/fi';

const Projects = () => {
    return (
        <div className="w-11/12 mx-auto py-8 lg:py-12" id="projects">
            <div>
                    {/* Heading */}
                    <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
                      <FiLayers  style={{ color: "#22d3ee" }} />
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
                        {/* About Me */}
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
        </div>
    );
};

export default Projects;