import React from "react";
import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 1,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 6,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Client Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((stat, index) => {
        return (
          <StatsItem
            key={index}
            endCountNum={stat.endCountNum}
            endCountText={stat.endCountText}
            text={stat.text}
          />
        );
      })}
    </section>
  );
};

export default Stats;
