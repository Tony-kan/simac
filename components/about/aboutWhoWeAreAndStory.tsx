import React from "react";

/**
 * AboutWhoWeAreAndStory Component
 *
 * Renders the "Who We Are" and "Our Story" sections for SIMAC, including a summary of achievements.
 * - Responsive layout: stacks vertically on mobile, horizontal on medium+ screens.
 * - Headings are large and bold for emphasis.
 * - Paragraphs and lists are styled for readability.
 *
 * Sections:
 * 1. Who We Are: Brief introduction to SIMAC.
 * 2. Our Story: History and achievements, including an italicized list of key milestones.
 */
const AboutWhoWeAreAndStory = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 mx-auto bg-white my-8">
      {/* Top section: two items horizontally on md+, stacked on mobile */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Section heading: Who We Are */}
        <h1 className="p-4 md:w-1/2 w-full text-center text-xl md:text-3xl font-bold">
          Who We Are
        </h1>
        {/* Introduction paragraph */}
        <p className="p-4 md:w-1/2 w-full text-xl md:text-base font-medium">
          SIMAC (School of Innovative Music, Arts & Culture) is Malawi’s premier
          institution for nurturing creative talent and preserving our rich
          cultural heritage. Since 2010, we’ve empowered thousands of students
          to excel in music, dance, visual arts, and more.
        </p>
      </div>

      {/* Bottom section: two main items horizontally on md+, stacked on mobile */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Section heading: Our Story */}
        <h1 className="p-4 md:w-1/2 w-full text-center text-xl md:text-3xl font-bold">
          Our Story
        </h1>

        {/* History and achievements */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          {/* History paragraph */}
          <p className="text-xl md:text-base font-medium">
            What began as a small community music workshop in Lilongwe has
            blossomed into a multifaceted academy, uniting seasoned artists,
            educators, and youth. Guided by a shared belief that every child
            should have access to high-quality arts education, SIMAC has grown
            into three affiliates: Simmys Music Academy, Simmys School of Arts &
            Culture, and the SCaR Project.
          </p>

          {/* Achievements heading */}
          <strong className="text-lg md:text-xl">
            Over the past 5 years, we have:
          </strong>
          {/* Achievements list (italicized) */}
          <ol className="font-medium p-4 text-base md:text-lg italic">
            <li>Trained over 460 instrumentalists and vocalists</li>
            <li>Hosted 8+ public performances across Malawi</li>
            <li>
              Empowered 200 at-risk children with life and creative skills
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAreAndStory;
