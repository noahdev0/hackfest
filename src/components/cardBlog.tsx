import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  id: number;
  photo: string;
}

const CardBlog: React.FC<Props> = ({ title, description, id, photo }) => {
  return (
    <Link className="group rounded-xl overflow-hidden " href={`/blogs/${id}`}>
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            width={250}
            height={250}
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src={photo}
            alt="Image Description"
          />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-gray-400 dark:text-neutral-400">
            {description}
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
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
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
