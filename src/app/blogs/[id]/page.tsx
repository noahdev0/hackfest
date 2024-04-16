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
        <div className="border-t border-b divide-y">
          <div className="flex justify-center py-4">
            <Button className="h-[3rem] px-8" variant="outline">
              Share on Twitter
            </Button>
          </div>
        </div>
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              The Joke Tax Chronicles: How a Kingdom Taxed Laughter
            </h2>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                The Rise and Fall of the Royal Jester
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                The Rise and Fall of the Royal Jester
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
