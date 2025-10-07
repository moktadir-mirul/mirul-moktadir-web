import React from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { TbCertificate } from "react-icons/tb";
import { IoNewspaper } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiBookCover } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  // const timelineData = [
  //   {
  //     year: "2010",
  //     title: "SSC",
  //     description: "Completed Secondary School Certificate with GPA 5.00",
  //   },
  //   {
  //     year: "2012",
  //     title: "HSC",
  //     description: "Completed Higher Secondary Certificate with GPA 5.00",
  //   },
  //   {
  //     year: "2016",
  //     title: "B.Sc in EEE",
  //     description:
  //       "Graduated from IUBAT University in Electrical & Electronics Engineering",
  //   },
  // ];

  const eduData = [
    {
      id: 1,
      degree: "Complete Web Development",
      period: "2024-2025",
      university: "Programming Hero",
      icon: LiaCertificateSolid,
      description: "",
    },
    {
      id: 2,
      degree: "Bachelor of Science in EEE",
      period: "2011-2016",
      university:
        "International University of Business Agriculture and Technology",
      icon: FaGraduationCap,
      description: "",
    },
    {
      id: 3,
      degree: "Higher Secondary Ceritifcate",
      period: "2009-2011",
      university: "Dhaka Board",
      icon: TbCertificate,
      description: "",
    },
    {
      id: 4,
      degree: "Secondary School Certificate",
      period: "2006-2008",
      university: "Dhaka Board",
      icon: IoNewspaper,
      description: "",
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
        {/* Gemini */}
        <div className="relative pt-15 pb-0">
          {/* Timeline line */}
          <div className="absolute left-4 -translate-x-1/2 md:left-1/2 h-full w-5 bg-gradient-to-b from-primary to-secondary rounded-full"></div>

          {/* Timeline items */}
          {eduData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline point container */}
                <div className="flex pt-5 justify-center md:w-1/2 relative">
                  {/* Timeline point */}
                  <div
                    className={`absolute left-4 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-4  flex items-center justify-center ${
                      index % 2 === 0
                        ? "md:left-0 border-secondary"
                        : "md:left-auto md:right-0 md:translate-x-1/2 border-primary"
                    }`}
                  >
                    <Icon className="text-green-950 text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:pl-4 md:text-right"
                      : "md:pl-12 md:pr-4"
                  }`}
                >
                  <div className=" bg-green-900 p-6 rounded-lg shadow-md mt-6 ml-12 md:ml-0">
                    <h3 className="text-xl font-bold text-white epun tracking-wide">
                      {item.degree}
                    </h3>
                    <p className="text-gray-200 text-lg mt-2">
                      {item.period} | <span className="font-semibold">{item.university}</span>
                    </p>
                    {item.description && (
                      <p className="mt-4 text-gray-700">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final round point */}
          {/* <div className="flex justify-center md:w-1/2 relative">
            <div className="absolute left-4 -translate-x-1/2 md:left-auto md:translate-x-1/2 md:right-0 z-10 w-8 h-8 rounded-full bg-primary"></div>
          </div> */}
        </div>

        {/* end */}
      </div>

      {/* End */}
    </div>
  );
};

export default Education;
