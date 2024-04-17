"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import GridLayout from "./gridLayout";
import EventCard from "./eventCard";

interface eventsProps {
  title: string;
  photos: string;
  description: string;
  id: string;
  category?: {
    id: string;
    name: string;
  };
}

type Props = {
  blogsNumber?: number;
};

const EventSection: React.FC<Props> = (props) => {
  const [events, setEvents] = React.useState<eventsProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<any>(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  const arrayCards = events
    .slice(0, props.blogsNumber || events.length)
    .map((event: any) => {
      return {
        id: event.id,
        title: event.attributes.name,
        date: event.attributes.date,
        description: event.attributes.description,
        photo:
          event.attributes.photos?.data[0]?.attributes.url &&
          process.env.NEXT_PUBLIC_BASE_URL +
            event.attributes.photos?.data[0]?.attributes.url,
      };
    });

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className=" mb-10 lg:mb-14">
          <h2 className="mb-5 block w-full bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-3xl">
            Read our latest events
          </h2>
          <p className="mt-1 text-gray-400 dark:text-neutral-400">
            ve helped some great companies brand, design and get to market.
          </p>
        </div>
        {props.blogsNumber && (
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
        )}
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
