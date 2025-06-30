"use client";
import React from "react";
import { useCountUp } from "react-countup";

/**
 * StatisticItem represents a single statistic with a label and value.
 * @property label - The label or description for the statistic (string)
 * @property value - The value of the statistic (number or string, e.g., '+ 20000')
 */
interface StatisticItem {
  label: string;
  value: number | string;
}

/**
 * Array of statistics to be displayed in the Statistics component.
 * Each item contains a label and a value.
 */
//Todo: implement smooth countup animations on numbers
const statisticsData: StatisticItem[] = [
  { label: "Graduates", value: 20000 },
  { label: "Annual Performances", value: 30 },
  { label: "Empowered Children", value: 1000 },
];

/**
 * StatSection Component
 *
 * Renders a responsive set of statistic cards, each showing a label and value.
 * The data is defined internally and not passed as props.
 */
const StatSection: React.FC = () => {
  // Set up string refs for each stat
  const statRefIds = [
    "counter-graduates",
    "counter-performances",
    "counter-children",
  ];

  // Set up useCountUp for each stat with scrollSpy enabled
  statisticsData.forEach((item, idx) => {
    useCountUp({
      ref: statRefIds[idx],
      end: Number(item.value),
      enableScrollSpy: true,
      scrollSpyDelay: 300,
      separator: ",",
      duration: 5,
    });
  });

  return (
    <div
      id="statistics"
      data-scrollspy-section
      className="flex flex-wrap gap-6 bg-[#FFE3BB] justify-between px-26"
    >
      {statisticsData.map((item, idx) => (
        <div key={idx} className="flex flex-col  p-6  ">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C1B23]">
            {item.label}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C1B23] text-center">
            +<span id={statRefIds[idx]} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatSection;
