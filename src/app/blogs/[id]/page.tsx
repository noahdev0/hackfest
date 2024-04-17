"use client";
/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Taviraj } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

taviraj({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Blogs from "@/components/blogs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { remark } from "remark";
import html from "remark-html";
 
type Props = {
  params: { id: string };
};

export default function Page(props: Props) {
  const [data, setData] = React.useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/blog/${props.params.id}`);
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);  
  return (
    <div className="grid min-h-screen bg-gray-50 place-items-center gap-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {data.attributes?.title}
        </h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {data.attributes?.description}
          <br />
          <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {data.attributes?.createdAt}
          </span>
        </p>
        <div className="flex justify-center">
          <Image
            className="w-full h-96 object-cover rounded-lg"
            src={data.attributes?.photo.data.url}
            alt={data.attributes?.title}
            height={data.attributes?.photo.data.height}
            width={data.attributes?.photo.data.width}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: remark()
              .use(html)
              .processSync(data.attributes?.body)
              .toString(),
          }}
        />
        <div className="border-t border-b divide-y">
          <div className="flex justify-center py-4">
            <Button className="h-[3rem] px-8" variant="outline">
              Share on Twitter
            </Button>
          </div>
        </div>
        <section className="space-y-4">
          <Blogs blogsNumber={4} />
        </section>
      </div>
    </div>
  );
}
