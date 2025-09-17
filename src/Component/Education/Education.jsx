import React from "react";
import DecryptedText from "../../ReactBits/DecryptedText/DecryptedText";
import { FaToolbox } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";


const customTheme = {
  "root": {
    "direction": {
      "horizontal": "sm:flex",
      "vertical": "relative border-l-[8px] border-gradient-to-b from-primary to-secondary"
    }
  },
  "item": {
    "root": {
      "horizontal": "relative mb-6 sm:mb-0",
      "vertical": "mb-10 ml-6"
    },
    "content": {
      "root": {
        "base": "",
        "horizontal": "mt-3 sm:pr-8",
        "vertical": ""
      },
      "body": {
        "base": "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      },
      "time": {
        "base": "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      },
      "title": {
        "base": "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    "point": {
      "horizontal": "flex items-center",
      "line": "hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700",
      "marker": {
        "base": {
          "horizontal": "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          "vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        },
        "icon": {
          "base": "h-3 w-3 text-primary-600 dark:text-primary-300",
          "wrapper": "absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900"
        }
      },
      "vertical": ""
    }
  }
}

const Education = () => {
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
        <Timeline theme={customTheme}>
          <TimelineItem>
            <TimelinePoint icon={HiCalendar} />
            <TimelineContent>
              <TimelineTime>February 2022</TimelineTime>
              <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
              <TimelineBody>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </TimelineBody>
              <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint icon={HiCalendar} />
            <TimelineContent>
              <TimelineTime>March 2022</TimelineTime>
              <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
              <TimelineBody>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint icon={HiCalendar} />
            <TimelineContent>
              <TimelineTime>April 2022</TimelineTime>
              <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
              <TimelineBody>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
