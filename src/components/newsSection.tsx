import React from "react";
import GridLayout from "./gridLayout";
import CardBlog from "./cardBlog";
import Link from "next/link";

const NewsSection: React.FC = () => {
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
          <h2 className="mb-5 block w-full bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-3xl">
            Read our latest news
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            ve helped some great companies brand, design and get to market.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className=" mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium"
          >
            see more article
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
          <CardBlog key={card.id} {...card} />
        ))}
      </GridLayout>
    </section>
  );
};

export default NewsSection;
