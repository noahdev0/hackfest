import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroAbout: React.FC = () => {
  return (
    <div className=" sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="mb-5 block w-full bg-gradient-to-b from-black dark:from-white dark:to-black to-gray-500  bg-clip-text font-bold text-transparent text-3xl sm:text-3xl">
            Build Better Products
          </h1>
          <p className="mt-3 text-lg text-gray-400 dark:text-neutral-400">
            Introducing a new way for your brand to reach the creative
            community.
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 ">
            <div className="w-full sm:w-auto">
              <label className="sr-only">email</label>
              <Input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter work email"
              />
            </div>
            <Button variant="default" className="min-w-[7rem]">
              Send
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            width={400}
            height={400}
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
