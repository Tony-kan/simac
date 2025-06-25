import React from "react";

/**
 * StatisticItem represents a single statistic with a label and value.
 */
interface StatisticItem {
  label: string;
  value: number | string;
}

const statisticsData: StatisticItem[] = [
  { label: "Graduates", value: "+ 20000" },
  { label: "Annual Performances", value: "+ 30 " },
  { label: "Empowered Children", value: "+ 1000" },
];

const Statistics: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 bg-[#FFE3BB] justify-between">
      {statisticsData.map((item, idx) => (
        <div key={idx} className="flex flex-col  p-6  ">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C1B23]">
            {item.label}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C1B23] text-center">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
