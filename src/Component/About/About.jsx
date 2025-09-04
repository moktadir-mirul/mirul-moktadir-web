
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaAddressCard, FaUserLarge } from "react-icons/fa6";
import { TabItem } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Tabs } from "flowbite-react";
import { FiCompass } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import { RiLinksLine } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";

const customTheme = {
  tabitem: {
    base: "px-4 py-2 rounded-md transition-all duration-300",
    active: {
      on: "text-black bg-gradient-to-r from-primary to-secondary",
      off: "text-white bg-white hover:bg-gray-100",
    },
  },
};

const About = () => {
 

  // Animation for the graphic element
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className=" py-16 px-4 md:px-8 lg:px-16">
      <div>
        <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
          <FaAddressCard style={{ color: "#22d3ee" }} />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
            About Me
          </h2>
        </div>

        <div className="pt-5 flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <div className="bg-green-900 rounded-2xl p-6 md:p-8 shadow-lg border border-green-800">
              <h3 className="text-2xl font-semibold mb-4">Hey there!</h3>
              <p className="mb-6 tracking-wide text-lg leading-relaxed">
                I'm a passionate and curious full-stack web developer who
                started exploring the world of programming in 2024. My journey
                began with a mix of YouTube tutorials, tech books, and the
                hands-on curriculum at Programming Hero, where I built a solid
                foundation in
                <strong>
                  {" "}
                  HTML, CSS, JavaScript, React.js,, Node.js, Express.js, and
                  MongoDB
                </strong>
                .
              </p>

              {/* Interactive Tabs */}
              {/* <div className="mb-6">
                <div className="flex space-x-2 mb-4">
                  {["Passion", "experience", "education"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-cyan-700 to-amber-700"
                          : "cursor-pointer text-black bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="min-h-[120px]">
                  {activeTab === "Passion" && (
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
              </div> */}

              {/* <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs> */}

              <Tabs aria-label="Default tabs" className="text-white text-lg tracking-wide" variant="default" theme={customTheme}>
                <TabItem active title="Synergy" icon={RiLinksLine}>
                  <DecryptedText
  text="For me, coding is all about synergy — the perfect blend of design and logic, creativity and structure. Among all technologies, React feels like my ideal space to bring this harmony to life. I love crafting interactive web applications that are smooth, dynamic, and purposeful. Building full-stack projects gives me the thrill of solving real problems from end to end — combining aesthetics, functionality, and performance into one seamless experience."
  animateOn="view"
  speed={200}
  maxIterations={10}
  revealDirection="start"
/>
                </TabItem>
                <TabItem title="Beyond" icon={FiCompass}>
                  <p>
                    Beyond the screen, I’m a big fan of mystery and spy thrillers — both in books and films. You'll often find me diving into the pages of a gripping Bangla novel or binge-watching sci-fi series like Foundation. I also enjoy exploring new places and cultures — traveling refreshes my creativity and helps me see the world through different lenses.
                  </p>
                </TabItem>
                <TabItem title="Essence" icon={GiLotus}>
                  <p>
                    As a person, I'm detail-oriented, always eager to learn independently, and driven by curiosity. I enjoy figuring things out on my own but also love collaborating with others who share a passion for clean code and clever solutions. Whether it's coding, reading, or exploring, I'm always looking for stories — whether to build them, read them, or live them.
                  </p>
                </TabItem>
              </Tabs>

              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-full">
                <FaCloudDownloadAlt /> Download Resume
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
