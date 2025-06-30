import React from "react";
import CustomButton from "../ui/CustomButton";

const programs = [
  {
    name: "Simmys Music Academy",
    action: "h-20vh",
  },
  {
    name: "School of Arts and Culture",
    action: "h-20vh",
  },
  {
    name: "SCaR Project",
    action: "h-20vh",
  },
];

/**
 * ExploreProgramSection component renders a section showcasing different programs buttons.
 *
 * This component displays a section with a accent background color and a title "Explore Our Programs".
 * It includes a list of programs, each represented by a button with customizable styles.
 * The buttons are styled to change colors on hover, indicating interactivity.
 *
 * The component does not manage any state or side effects. It is purely responsible for rendering the UI.
 */

const ExploreProgramSection = () => {
  return (
    <section className="bg-[#FFE3BB] py-16 sm:py-10">
      <div className="container p-4 sm:p-0">
        <div className="flex flex-col items-start pl-8 md:pl-20 text-start gap-4">
          <h1 className="text-2xl md:text-2xl font-bold text-[#5C1B23] drop-shadow-sm">
            Explore Our Programs :
          </h1>

          <div className="mt-6 w-full flex flex-wrap justify-between mx-auto gap-4">
            {programs.map((program) => (
              <CustomButton
                key={program.name}
                as="button"
                btnText={program.name}
                handleClick={() => {}}
                styles="bg-[#5C1B23] border-2 border-transparent text-[#FFE3BB] hover:bg-[#FFE3BB] hover:border-[#5C1B23] hover:text-[#5C1B23]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProgramSection;
