import React, { useEffect, useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Animation for the graphic element
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className=" py-16 px-4 md:px-8 lg:px-16">
      <div>
        <div className="flex gap-3 justify-center md:justify-start items-center">
          <div className="hidden md:block bg-gradient-to-r from-primary to-secondary w-8 h-8 rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-bold epun tracking-wide">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                Hello! I'm Alex
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a passionate frontend developer with expertise in creating
                beautiful, functional web experiences. With over 3 years of
                experience, I specialize in React, JavaScript, and modern CSS
                frameworks like Tailwind.
              </p>

              {/* Interactive Tabs */}
              <div className="mb-6">
                <div className="flex space-x-2 mb-4">
                  {["skills", "experience", "education"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="min-h-[120px]">
                  {activeTab === "skills" && (
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "React",
                        "JavaScript",
                        "Tailwind CSS",
                        "Node.js",
                        "UI/UX Design",
                        "Git",
                      ].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-slate-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-800">
                          Frontend Developer @ TechCorp
                        </h4>
                        <p className="text-sm text-slate-500">2021 - Present</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">
                          Web Designer @ CreativeStudio
                        </h4>
                        <p className="text-sm text-slate-500">2019 - 2021</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div>
                      <h4 className="font-medium text-slate-800">
                        BS in Computer Science
                      </h4>
                      <p className="text-sm text-slate-500">
                        University of Technology, 2019
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
                Download Resume
              </button>
            </div>
          </div>

          {/* Graphic/Visual Element */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main graphic container */}
              <div className="relative h-80">
                {/* Background elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-xl transition-all duration-1000 ${
                      mounted ? "scale-100" : "scale-0"
                    }`}
                  ></div>
                </div>

                {/* Animated circles */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-4 border-blue-600/20 transition-all duration-700 ${
                    mounted ? "scale-100" : "scale-0"
                  }`}
                ></div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-blue-600/30 transition-all duration-1000 ${
                    mounted ? "scale-100" : "scale-0"
                  }`}
                ></div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-blue-600/40 transition-all duration-1200 ${
                    mounted ? "scale-100" : "scale-0"
                  }`}
                ></div>

                {/* Central graphic - can be replaced with an image or SVG */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1500 ${
                    mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>

                    {/* Floating elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 ${
                        mounted ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                        />
                      </svg>
                    </div>

                    <div
                      className={`absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-1200 ${
                        mounted ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats at bottom */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "15+", label: "Projects" },
                  { number: "3+", label: "Years" },
                  { number: "10+", label: "Clients" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded-xl shadow-md text-center transition-all duration-500 ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


