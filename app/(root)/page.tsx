"use client";

//Todo: Create a responsive landing page banner,school section,news & events section,collaborators/partners section

import Banner from "@/components/home/Banner";
import EventsNewsSection from "@/components/home/EventsNewsSection";
import ExploreProgramSection from "@/components/home/ExploreProgramSection";
import PartnersSection from "@/components/home/PartnersSection";
import ProgramsSection from "@/components/home/ProgramsSection";

/**
 * The Home component renders the landing page.
 *
 * The component renders a vertical sequence of sections:
 * 1. The banner section.
 * 2. The explore programs section.
 * 3. The programs section.
 * 4. The news and events section.
 * 5. The partners section.
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <ExploreProgramSection />
      <ProgramsSection />
      <EventsNewsSection />
      <PartnersSection />
    </div>
  );
}
