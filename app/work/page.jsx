// Work.jsx
"use client"
import TooltipContent from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "./slider";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "HomeMatch",
    description:
    'Homematch, a property recommendation app designed to simplify the process of finding your ideal home. Our platform uses advanced algorithms to match your preferences with available properties, providing personalized recommendations tailored to your needs. This was a landing-web page of the same topic which totally I made during a hackathon.',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}, {name: "Vite+React"}, {name: "Tailwind.css"}, {name: "Node.js"}, {name: "Firebase"}, {name: "Netlify"}],
    image: '/assets/work/logo3.jpeg',
    live: "https://hacktifyhomematch.netlify.app/",
    github:"https://github.com/DhruvGoyal404/Homematch",
  },
  {
    num: "02",
    category: "Frontend",
    title: "My Portfolio Website",
    description:
    'Made my own portfolio website.',
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}],
    image: '/assets/work/thumb2.jpg',
    live: "https://dhruvgoyalportfolio.vercel.app/",
    github:"https://github.com/DhruvGoyal404/Portfolio_Site",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "JanSevSetu",
    description:
    'JanSevaSetu, an online platform dedicated to providing information about NGOs (Non-Governmental Organizations) and their services to individuals seeking assistance and support. Made during a hackathon, following the tech stack used by me in making the portions I made in the site.',
    stack: [{name: "Vite+React"}, {name: "Tailwind.css"}, {name: "MongoDB"}, {name: "Express"}, {name: "Node.JS"}, {name: "Vercel"}, {name: "Canva"}],
    image: '/assets/work/logo.jpg',
    live: "https://jan-seva-setu.vercel.app/",
    github:"https://github.com/DhruvGoyal404/jan-seva-setu",
  },
  {
    num: "04",
    category: "Frontend",
    title: "NextGen-HHS",
    description:
    'NextGen Hospital Management System. A platform made to steamline the processes of working of hospitals around. Made during a hackathon, following the tech stack used by me in making the portions I made in the site.',
    stack: [{name: "Next.JS"}, {name: "Tailwind.css"}],
    image: '/assets/work/logo4.jpg',
    live: "https://hms-code-fanatics-hacktu.vercel.app/",
    github:"https://github.com/SakshhamTheCoder/ccs-hacktu-5.0",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="font-bold leading-none text-white capitalize duration-500 transition-all group-hover:text-accent text-[42px]">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex-gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            {/* Slider */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative group flex justify-center items-center bg-pink-50/20 h-[460px]">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Slider buttons */}
            <WorkSliderBtns
              containerStyles="absolute top-0 left-0 mt-4 ml-4"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
