"use client";
import CountUp from "react-countup";

const stats = [
  { num: 2, text: "2+ Years of experience" },
  { num: 6, text: "6+ Projects completed" },
  { num: 8, text: "8+ Technologies mastered" },
  { num: 60, text: "60+ Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto xl:max-w-none max-w-[80vm]">
          {stats.map((item, index) => (
            <div
              className="flex gap-4 items-center justify-center xl:justify-start flex-1"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
