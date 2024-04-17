"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { memo } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { subTitle, title, desc } = {
    subTitle: "About Us",
    title: "We're on a mission to make coding accessible",
    desc: "Explore innovation at University de Tlemcen's Computer Science Department. Stay updated with the latest advancements, research, and insights from our vibrant community. Welcome to a world where possibilities are endless.",
  };
  return (
    <>
      <section className="overflow-hidden pb-12  lg:pb-[90px]   ">
        <div className=" mx-auto">
          <div className="flex flex-wrap-reverse  items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1600195077077-7c815f540a3d?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="happy coding"
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="client happy with their Mvp"
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full px-3 sm:px-4 xl:w-1/2"
                >
                  <div className="relative z-10 my-4">
                    <Image
                      src="https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="review coding with happy clients"
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <video
                autoPlay
                loop
                className="w-full rounded-2xl bg-blend-darken"
                src="/emu80860001-0096.mkv"
              ></video>
              <div className=" lg:mt-0 mb-12 lg:mb-0">
                <span className="block mb-4  font-semibold text-primary dark:text-main">
                  {subTitle}
                </span>
                <h2 className="mb-5 block w-full bg-gradient-to-b from-black dark:from-white dark:to-black to-gray-500  bg-clip-text font-bold text-transparent text-3xl sm:text-3xl ">
                  {title}
                </h2>
                <p className="mb-5 text-base text-gray-400 text-body-color dark:text-dark-6">
                  {desc}
                </p>
                {/* <p className="mb-8 text-base text-gray-400 text-body-color dark:text-dark-6">
                  {descTwo}
                </p> */}
                <div className="lg:flex gap-4">
                  <Button className="w-full">Get Latest News</Button>
                  <Button variant="outline" className="w-full">
                    About The Faculty
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(HeroSection);
