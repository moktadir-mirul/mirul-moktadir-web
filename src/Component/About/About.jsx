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
import Lottie from "lottie-react";
import AboutMe from "../../LottieJson/aboutMe.json"

const customTheme = {
  "base": "flex flex-col gap-2",
  "tablist": {
    "base": "flex text-center",
    "variant": {
      "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
    },
    "tabitem": {
      "base": "flex items-center justify-center rounded-t-lg p-4 text-lg font-medium first:ml-0 focus:outline-none cursor-pointer",
      "variant": {
        "default": {
          "base": "rounded-t-lg",
          "active": {
            "on": "text-black bg-gradient-to-r from-primary to-secondary",
            "off": "text-gray-400 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-black"
          }
        },
        
      },
      "icon": "mr-2 h-5 w-5"
    }
  },
  "tabitemcontainer": {
    "base": "",
    "variant": {
      "default": "",
      "underline": "",
      "pills": "",
      "fullWidth": ""
    }
  },
  "tabpanel": "py-3"
}

const About = () => {
  // Animation for the graphic element
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-8 lg:py-16 px-4 md:px-8 lg:px-16">
      <div>
        <div className="flex gap-3 justify-center text-4xl md:text-6xl md:justify-start items-center">
          <FaAddressCard style={{ color: "#22d3ee" }} />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold epun tracking-wide">
            {/* About Me */}
            <DecryptedText
                    text="About Me"
                    animateOn="view"
                    speed={150}
                    maxIterations={10}
                    revealDirection="start"
                  />
          </h2>
        </div>

        <div className="pt-5 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
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

              <Tabs
                aria-label="Default tabs"
                className="text-white text-lg tracking-wide"
                variant="default"
                theme={customTheme}
              >
                <TabItem active title="Synergy" icon={RiLinksLine}>
                  <DecryptedText
                    text="For me, coding is all about synergy — the perfect blend of design and logic, creativity and structure. Among all technologies, React feels like my ideal space to bring this harmony to life. I love crafting interactive web applications that are smooth, dynamic, and purposeful. Building full-stack projects gives me the thrill of solving real problems from end to end — combining aesthetics, functionality, and performance into one seamless experience."
                    animateOn="view"
                    speed={100}
                    maxIterations={10}
                    revealDirection="start"
                  />
                </TabItem>
                <TabItem title="Beyond" icon={FiCompass}>
                  <DecryptedText
                    text="Beyond the screen, I’m a big fan of mystery and spy thrillers — both in books and films. You'll often find me diving into the pages of a gripping Bangla novel or binge-watching sci-fi series like Foundation. I also enjoy exploring new places and cultures — traveling refreshes my creativity and helps me see the world through different lenses."
                    animateOn="view"
                    speed={100}
                    maxIterations={10}
                    revealDirection="start"
                  />
                </TabItem>
                <TabItem title="Essence" icon={GiLotus}>
                  <DecryptedText
                    text="As a person, I'm detail-oriented, always eager to learn independently, and driven by curiosity. I enjoy figuring things out on my own but also love collaborating with others who share a passion for clean code and clever solutions. Whether it's coding, reading, or exploring, I'm always looking for stories — whether to build them, read them, or live them."
                    animateOn="view"
                    speed={100}
                    maxIterations={10}
                    revealDirection="start"
                  />
                </TabItem>
              </Tabs>

              <button className="px-6 cursor-pointer py-3 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary duration-200 transition-colors text-black font-bold text-xl shadow-md flex items-center gap-2 rounded-full">
                <FaCloudDownloadAlt /> Download Resume
              </button>
            </div>
          </div>

          {/* Graphic/Visual Element */}
          <div className="flex-1 flex justify-center">
            <div className=" w-full max-w-md">
              {/* Main graphic container */}
              <div className="">
                <Lottie animationData={AboutMe} loop={true}></Lottie>
              </div>

              {/* Stats at bottom */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "15+", label: "Projects Built" },
                  { number: "500+", label: "Hours Coding" },
                  { number: "5+", label: "Tech Skills" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gray-200 p-1 rounded-xl shadow-md text-center transition-all duration-500 ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-green-700">
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium text-gray-800">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "4", label: "Key Projects" },
                  {number: "100%", label: "Enthusiasm"},
                  { number: "∞", label: "Curiosity" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gray-300 p-1 rounded-xl shadow-md text-center transition-all duration-500 ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-green-700">
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium text-slate-800">{stat.label}</div>
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
