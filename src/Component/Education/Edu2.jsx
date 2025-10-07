import React from 'react';

const Edu2 = () => {
    const eduData = [
    {
      id: 1,
      degree: "BACHALOR DIGREE",
      period: "JAN 2009 - MAY 2010",
      university: "DEFODIL UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.",
    },
    {
      id: 2,
      degree: "MASTER DIGREE",
      period: "FEB 2011 - MAR 2012",
      university: "AMRDER UNIVERSITY",
      description: "",
    },
    {
      id: 3,
      degree: "UX DESIGNER COURSE",
      period: "JUN 2012 - MAY 2013",
      university: "CRAFTY UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.",
    },
    {
      id: 4,
      degree: "INTERFACE DESIGNING",
      period: "AUG 2014 - JUN 2015",
      university: "KHELTAM NA UNIVERSITY",
      description: "",
    },
  ];
    return (
        <div>
            <div className="relative py-15">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-auto w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          {/* 👆 Changed w-5 → w-1 */}

          {/* Timeline items */}
          {eduData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline point */}
              <div className="flex justify-center md:justify-start md:w-1/2 relative">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                  <FaGraduationCap className="text-primary" />
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
                <div className="bg-white p-6 rounded-lg shadow-md mt-6 ml-12 md:ml-0">
                  <h3 className="text-xl font-bold text-primary">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {item.period} | {item.university}
                  </p>
                  {item.description && (
                    <p className="mt-4 text-gray-700">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Final round point */}
          <div className="flex justify-center md:justify-start md:w-1/2 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-8 h-8 rounded-full bg-primary"></div>
          </div>
        </div>
        </div>
    );
};

export default Edu2;