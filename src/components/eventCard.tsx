import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  // description: string;
  id: number;
  photo: string;
  date: string;
}

const EventCard: React.FC<Props> = ({
  title,
  // description,
  id,
  photo,
  date,
}) => {
  return (
    <Link className="group sm:flex rounded-xl" href={`/events/${id}`}>
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <Image
          width={400}
          height={400}
          className="size-full absolute top-0 start-0 object-cover"
          src={photo}
          alt="Image Description"
        />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
              {new Date(date).toLocaleDateString("en-US") +
                " " +
                new Date(date).toLocaleTimeString("en-US")}
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-400 dark:text-neutral-400">
            {/* {description} */}
          </p>

          <div className="mt-5 sm:mt-auto"></div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
