import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 space-y-8 md:px-6 lg:space-y-10">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="inline-block rounded-lg bg-gray-900 px-3 py-1.5 text-sm">
              Blog
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Thoughts on Jamstack, Serverless, and the Future of Web
            </h2>
          </div>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Stay up to date with the latest news, tips, and best practices from
            the team behind the platform for frontend developers.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <Link
            className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
            href="#"
          >
            <Image
              alt="Cover image"
              className="aspect-[16/9] object-cover object-center w-full"
              height={280}
              src="/placeholder.svg"
              width={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-snug/none">
                Introduction to Jamstack: The Complete Guide
              </h3>
              <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400">
                Learn how to get started with the Jamstack and supercharge your
                web development workflow.
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
            href="#"
          >
            <Image
              alt="Cover image"
              className="aspect-[16/9] object-cover object-center w-full"
              height={280}
              src="/placeholder.svg"
              width={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-snug/none">
                Serverless Functions: The Definitive Handbook
              </h3>
              <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400">
                Dive into the world of serverless and discover how you can run
                code without managing infrastructure.
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
            href="#"
          >
            <Image
              alt="Cover image"
              className="aspect-[16/9] object-cover object-center w-full"
              height={280}
              src="/placeholder.svg"
              width={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-snug/none">
                The Future of Web Development: Trends to Watch
              </h3>
              <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400">
                Explore the latest trends and innovations shaping the future of
                web development.
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
            href="#"
          >
            <Image
              alt="Cover image"
              className="aspect-[16/9] object-cover object-center w-full"
              height={280}
              src="/placeholder.svg"
              width={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-snug/none">
                The Power of Edge: How Edge Computing is Transforming the Web
              </h3>
              <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400">
                Discover how edge computing is bringing new capabilities and
                performance to the web.
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
};

interface BlogProps {
  title: string;
  description: string;

  id: string;
  photo: string;
}

const Blog = (props: BlogProps) => {
  return (
    <Link
      className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
      href={`/blog/${props.id}`}
    >
      <Image
        alt="Cover image"
        className="aspect-[16/9] object-cover object-center w-full"
        height={280}
        src={props.photo}
        width={500}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug/none">{props.title}</h3>
        <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </Link>
  );
};

export default Blogs;