import Link from "next/link";
import React from "react";
import GridLayout from "./gridLayout";
import EventCard from "./eventCard";

const EventSection: React.FC = () => {
  const arrayCards = [
    {
      title: "brothers",
      description:
        "Learn about the latest news, tips, and best practices from the team behind Next.js.",
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Next.js Blog",
      description:
        "Learn about the latest news, tips, and best practices from the team behind Next.js.",
      id: 2,
      photo:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Next.js Blog",
      description:
        "Learn about the latest news, tips, and best practices from the team behind Next.js.",
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Next.js Blog",
      description:
        "Learn about the latest news, tips, and best practices from the team behind Next.js.",
      id: 4,
      photo:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className=" mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Read our latest events
          </h2>
          <p className="mt-1 text-gray-400 dark:text-neutral-400">
            ve helped some great companies brand, design and get to market.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="events"
            className=" mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium"
          >
            see more events
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>

      <GridLayout>
        {arrayCards.map((card) => (
          <EventCard key={card.id} {...card} />
        ))}
      </GridLayout>
    </section>
  );
};

export default EventSection;
