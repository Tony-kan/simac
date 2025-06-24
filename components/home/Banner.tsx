import React from "react";
import CustomButton from "../ui/CustomButton";
import { FaArrowRight } from "react-icons/fa";

/**
 * The hero banner component for the homepage.
 *
 * This component renders a full-width and full-height section with a background
 * image, a title and a button. The background image is set to cover the entire
 * section, and the title and button are centered horizontally and vertically.
 *
 * The title is a large heading with a bold font and white text color. The button
 * is a custom button component with a transparent black background color, a white text color
 * and an arrow icon on the left side.
 *
 * The component does not handle any state changes or side effects. It only
 * renders the UI.
 */
const Banner = () => {
  const handleLearnMoreClick = () => {};

  return (
    <section className="h-[calc(100vh-12vh)] md:h-[82vh] w-full border bg-hero bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 h-full w-full bg-black/20 z-10"></div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full z-20 px-4 lg:pt-60  pt-80">
        <div className="bg-black/50  rounded-sm p-8 md:p-12 shadow-lg">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight drop-shadow-lg">
            Building the future of music and Arts in Malawi
          </h1>

          <div className="flex mt-10 justify-center">
            <CustomButton
              btnText="Learn More"
              icon={<FaArrowRight />}
              handleClick={handleLearnMoreClick}
              iconPosition="left"
              styles="w-50 gap-6 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
