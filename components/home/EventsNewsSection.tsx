import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { EventCard } from "./EventsCard";
import { newsData, pastEventsData, upcomingEventsData } from "@/constants/data";
import NewsCard from "./NewsCard";
import Link from "next/link";

/**
 * EventsNewsSection component renders a section displaying events and news.
 *
 * This component displays a section with two main tabs: "Events" and "News".
 * The "Events" tab displays a filterable list of upcoming and past events,
 * while the "News" tab displays a list of news articles.
 *
 * The component uses the useState hook to maintain two state variables:
 * activeTab, which determines which tab is currently active, and
 * activeEventFilter, which determines which type of events to display.
 *
 * The component conditionally renders different content based on the active
 * tab and event filter. It uses the CustomButton and EventCard components
 * to display the events, and the NewsCard component to display the news articles.
 *
 * The component also includes a "View All" link that links to the /events page.
 */
const EventsNewsSection = () => {
  const [activeTab, setActiveTab] = useState<"events" | "news">("events");
  const [activeEventFilter, setActiveEventFilter] = useState<
    "upcoming" | "past"
  >("upcoming");

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Tabs: Events & News */}
        <div className="flex justify-between items-center border-b border-gray-300 mb-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-colors duration-300 border-b-2 ${
                activeTab === "events"
                  ? "border-[#5C1B23] text-[#5C1B23]"
                  : "border-transparent text-gray-500 hover:text-[#5C1B23]" // Inactive state
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-colors duration-300 border-b-2 ${
                activeTab === "news"
                  ? "border-[#5C1B23] text-[#5C1B23]"
                  : "border-transparent text-gray-500 hover:text-[#5C1B23]"
              }`}
            >
              News
            </button>
          </div>

          <div>
            <Link
              href="/events"
              className="text-md font-semibold text-[#5C1B23] hover:underline"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Content based on active tab */}
        <div>
          {/* Events Content */}
          {activeTab === "events" && (
            <div>
              <div className="flex justify-center items-center gap-4 mb-10">
                <CustomButton
                  as="button"
                  handleClick={() => setActiveEventFilter("upcoming")}
                  btnText={`Upcoming Events (${upcomingEventsData.length})`}
                  styles={`${
                    activeEventFilter === "upcoming"
                      ? ""
                      : "bg-white text-black-600"
                  }`}
                />
                {
                  <CustomButton
                    as="button"
                    handleClick={() => setActiveEventFilter("past")}
                    btnText={`Past Events (${pastEventsData.length})`}
                    styles={`${
                      activeEventFilter === "past"
                        ? ""
                        : "bg-white text-black-600"
                    }`}
                  />
                }
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {activeEventFilter === "upcoming" &&
                  upcomingEventsData.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                {activeEventFilter === "past" &&
                  pastEventsData.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </div>
          )}

          {/* News Content */}
          {activeTab === "news" && (
            <div className="space-y-6">
              {newsData.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsNewsSection;
