"use client";
import Container from "@/components/container";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

const Events: React.FC<Props> = (props) => {
  const [event, setEvent] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/events/${props.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data.attributes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (event.date) {
      setDate(new Date(event.date));
    }
  }, [event]);

  console.log(event.photo?.data.attributes.url);
  return (
    <Container>
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center  ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {event.name}
            </h1>

            <div className="flex justify-end max-w-2xl mb-6 gap-4">
              <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8  dark:text-gray-400">
                {event.description}
              </p>
              {date && (
                <Calendar
                  disabled
                  mode="single"
                  selected={date}
                  className="rounded-md border"
                />
              )}
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {event?.photo && (
              <Image
                className="w-full rounded-lg"
                width={500}
                height={500}
                src={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  event?.photo?.data.attributes.url
                }
                alt="mockup"
              />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Events;
