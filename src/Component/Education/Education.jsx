import React from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { FaToolbox } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";


const Education = () => {
  const timelineData = [
    {
      year: "2010",
      title: "SSC",
      description: "Completed Secondary School Certificate with GPA 5.00",
    },
    {
      year: "2012",
      title: "HSC",
      description: "Completed Higher Secondary Certificate with GPA 5.00",
    },
    {
      year: "2016",
      title: "B.Sc in EEE",
      description: "Graduated from IUBAT University in Electrical & Electronics Engineering",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-8 lg:py-12" id="edu">
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
      {/*Timeline  */}
      <div className="py-10 w-11/12 mx-auto">
        <section className="relative flex flex-col items-center w-full py-12">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

      <div className="flex flex-col gap-16 w-full max-w-4xl">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className="flex-1 bg-green-900  shadow-md rounded-xl p-6 border border-green-700 ">
              <h3 className="text-xl font-bold text-primary">{item.year} - {item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>

            {/* Icon */}
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute w-16 h-16 rounded-full border-4 border-secondary flex items-center justify-center bg-white dark:bg-gray-900 z-10">
                <FaGraduationCap className="text-2xl text-primary" />
              </div>
            </div>

            {/* Spacer to align */}
            <div className="flex-1 hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
      </div>
    </div>
  );
};

export default Education;
