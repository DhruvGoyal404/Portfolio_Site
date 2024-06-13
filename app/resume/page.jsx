"use client";

import TooltipContent from "@/components/ui/tooltip";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiCplusplus, SiPython, SiExpress, SiCanva, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description: "18, Tech Geek, often found either coding or working on random hobbies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dhruv Goyal"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8858880050"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "dgoyal_be23@thapar.edu"
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English"
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Here are some experiences on the way of my tech journey!",
  items: [
    {
      company: "Creative Computing Society",
      position: "Executive Member",
      duration: "2023-present",
    },
    {
      company: "Creative Computing Society",
      position: "HackTU Hackathon",
      duration: "2024",
    },
    {
      company: "Creative Computing Society",
      position: "Marketing",
      duration: "2023-present",
    },
    {
      company: "OWASP Student Chapter",
      position: "Hackowasp Hackathon",
      duration: "2024",
    },
    {
      company: "Creative Computing Society",
      position: "CP Contests",
      duration: "2023-present",
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "My education made me what I am today! I bestow my tech skills, leadership, public speaking and various other skills to my education.",
  items: [
    {
      institution: "Coding Blocks",
      degree: "Master DSA in C++ Course",
      duration: "2023",
    },
    {
      institution: "Deep Learning Coursera",
      degree: "Machine Learning Specialization Course",
      duration: "2024 - ongoing",
    },
    {
      institution: "Thapar Institute of Engineering & Technology",
      degree: "BTech - CoE",
      duration: "2023-2027",
    },
    {
      institution: "Modern Academy",
      degree: "ISC Intermediate PCM",
      duration: "2021-2023",
    },
    {
      institution: "The Lucknow Public Collegiate",
      degree: "ICSE High School Science",
      duration: "2009-2021",
    },
  ]
}

// skills data
const skills = {
  title: "My Skills",
  description: "With always a learner attitude, I've acquired the following skills yet in my tech journey!",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiMongodb/>,
      name: "mongodb",
    },
    {
      icon: <SiCplusplus/>,
      name: "c++",
    },
    {
      icon: <SiPython/>,
      name: "python",
    },
    {
      icon: <SiExpress/>,
      name: "express",
    },
    {
      icon: <SiCanva/>,
      name: "canva",
    },
    {
      icon: <FaJava/>,
      name: "java",
    },
    {
      icon: <SiMysql/>,
      name: "mysql",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity:1,
      transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full mx-auto gap-6 max-w-[380px] xl:mx-0">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[70vh]">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center xl:text-left gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="mx-auto xl:mx-0 text-white/60 max-w-[600px]">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                    return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">
                        {item.duration}
                      </span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex gap-3 items-center">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                        </span>
                        <p className="text-white/60">
                          {item.company}
                        </p>
                      </div>
                    </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col text-center xl:text-left gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="mx-auto xl:mx-0 text-white/60 max-w-[600px]">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
                    return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">
                        {item.duration}
                      </span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex gap-3 items-center">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                        </span>
                        <p className="text-white/60">
                          {item.institution}
                        </p>
                      </div>
                    </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center xl:text-left gap-[30px]">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="mx-auto xl:mx-0 max-w-[600px] text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 xl:grid-cols-2 mx-auto xl:mx-0 max-w-[620px]">
                  {about.info.map((item,index)=>{
                    return(
                      <li className="flex items-center justify-center gap-2 xl:justify-start" key={index}>
                        <span className="text-white/60">
                          {item.fieldName}
                        </span>
                        <p>:</p>
                        <span className="text-white/60">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;