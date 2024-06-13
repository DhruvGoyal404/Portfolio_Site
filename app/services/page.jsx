"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'The world of Web Development has always been my keen interest. Visit my github to explore more of my projects!',
    href: "https://github.com/DhruvGoyal404",
  }, 
  {
    num: '02',
    title: 'Programming',
    description: 'Various languages like C++, Java and things like DSA, has always been my regular practice! Visit my Linktr.ee to know more!',
    href: "https://linktr.ee/DhruvGoyal404",
  },
  {
    num: '03',
    title: 'AI/ML',
    description: 'The currently ongoing journey of AI/ML has been fasinating so far, and I genuinely believe it to go more smoother than ever. Until then, maybe visit my Kaggle!',
    href: "https://www.kaggle.com/dhruvgoyal404",
  },
  {
    num: '04',
    title: 'UI/UX Design',
    description: 'Recently started to realize that I have creativity to learn and explore the field of UI/UX even, and hence started to learn about it. Until more updates, visit my Linktr.ee to explore about me!.',
    href: "https://linktr.ee/DhruvGoyal404",
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
          opacity: 1,
          transition: {delay:2.4,duration:0.4, ease: "easeIn"},
        }}
        className="gri grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index) => {
            return (
              <div key={index}>
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;