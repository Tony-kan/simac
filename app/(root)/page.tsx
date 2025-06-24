"use client";

//Todo: Create a responsive landing page banner,school section,news & events section,collaborators/partners section

import Banner from "@/components/home/Banner";
import ExploreProgramSection from "@/components/home/ExploreProgramSection";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Banner />
      <ExploreProgramSection />
    </div>
  );
}
