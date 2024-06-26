"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogsNumber?: number;
};

const Blogs = (props: Props) => {
  const [blogs, setBlogs] = React.useState<BlogProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 space-y-8 md:px-6 lg:space-y-10">
        <div className="space-y-4 text-center">
          <div className="space-y-1">
            <h2 className="mb-5 block w-full bg-gradient-to-b from-black dark:from-white dark:to-black to-gray-500  bg-clip-text font-bold text-transparent text-3xl sm:text-3xl">
              Thoughts on Jamstack, Serverless, and the Future of Web
            </h2>
          </div>
          <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed  dark:text-gray-400">
            Stay up to date with the latest news, tips, and best practices from
            the team behind the platform for frontend developers.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {blogs.slice(0, props.blogsNumber || blogs.length).map((blog) => (
            <Blog
              key={blog.id}
              title={blog.attributes.title}
              description={blog.attributes.description}
              id={blog.id}
              photo={`${process.env.NEXT_PUBLIC_BASE_URL}${blog.attributes.photo?.data.attributes.url}`}
            />
          ))}
        </div>
        {props.blogsNumber && (
          <div className="flex justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/blogs"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

interface BlogProps {
  attributes?: any;
  title: any;
  body?: string;
  photo: any;
  description: any;
  id: string;
  category?: {
    id: string;
    name: string;
  };
}

const Blog = (props: BlogProps) => {
  return (
    <Link
      className="flex flex-col rounded-lg overflow-hidden border shadow-sm hover:shadow transition-transform hover:scale-105"
      href={`/blogs/${props.id}`}
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
        <p className="text-sm leading-snug/none text-gray-500 dark:text-gray-400 line-clamp-2">
          {props.description}
        </p>
      </div>
    </Link>
  );
};

export default Blogs;
