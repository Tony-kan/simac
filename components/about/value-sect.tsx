import React from "react";

/**
 * ValueSection Component
 *
 * Displays three pairs of corresponding sections (Core Values, Vision, Mission) for SIMAC.
 *
 * - On desktop (md+): Uses a two-column grid, with each left item (title) exactly aligned with its right item (description).
 * - On mobile: Stacks each pair vertically for easy reading.
 *
 * Content:
 *   - Core Values: Excellence, Inclusion, Cultural Heritage
 *   - Vision: SIMAC's vision statement
 *   - Mission: SIMAC's mission statement
 */
const leftContent = [
  { title: "Core Values" },
  { title: "Vision" },
  { title: "Mission" },
];

/**
 * rightContent contains the corresponding descriptions for each leftContent title.
 */
const rightContent = [
  {
    text: (
      <p>
        <strong>Excellence:</strong> High standards in arts education.
        <br />
        <br />
        <strong>Inclusion:</strong> Opportunities for all, regardless of
        background.
        <br />
        <br />
        <strong>Cultural Heritage:</strong> Promoting and preserving Malawian
        traditions
      </p>
    ),
  },
  {
    text: (
      <p>
        To become a leading institution in arts education, transforming lives
        through music, culture, and creative expression in Africa.
      </p>
    ),
  },
  {
    text: (
      <p>
        SIMAC is dedicated to nurturing creativity, preserving cultural
        heritage, and fostering excellence in music, arts, and culture
        education.
      </p>
    ),
  },
];

/**
 * Renders the ValueSection as a responsive grid.
 * Each leftContent item is paired with its corresponding rightContent item in the same row.
 */
const ValueSection = () => {
  return (
    <div className="bg-white px-4 py-8">
      {/* Mobile: stack pairs vertically; Desktop: two columns, rows aligned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {leftContent.map((item, idx) => (
          <React.Fragment key={idx}>
            {/* Left column (title) */}
            <div className="font-semibold text-2xl md:text-3xl flex items-center md:items-center mb-2 md:mb-0 md:px-26">
              {item.title}
            </div>
            {/* Right column (text) */}
            <div className="text-base md:text-lg flex items-start md:items-center">
              {rightContent[idx].text}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ValueSection;
