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
import React from "react";

type Props = {
  params: { id: string };
};

const page = async (props: Props) => {
  const res = await fetch(`/api/blog/${props.params.id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="grid min-h-screen bg-gray-50 place-items-center gap-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-4">
        {/* TODO : MARKDOWN HERE */}
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: data.attribute.body }}
        ></div>
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
};

export default page;
