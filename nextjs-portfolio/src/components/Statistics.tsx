"use client";

import { statsData } from "@/app/constants";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-2.5 md:gap-5">
      {statsData?.map((item, id) => (
        <div
          key={id}
          className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
        >
          <CountUp
            end={item?.num}
            duration={5} 
            delay={1}
            className="text-4xl lg:text-6xl font-extrabold text-white "
          />
          <p className="leading-snug text-sm">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
