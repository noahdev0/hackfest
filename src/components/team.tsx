"use client";
import { Linkedin, LinkedinIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Team: React.FC = () => {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/home`);
        const data = await res.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  //attributes.mentors[0].photo.data.attributes.url
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h3 className="mb-5 block w-full bg-gradient-to-b from-black dark:from-white dark:to-black to-gray-500  bg-clip-text font-bold text-transparent text-3xl sm:text-3xl capitalize">
            Meet our professors
          </h3>
          <p className="text-gray-400 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {data.attributes?.mentors?.map((item: any, id: number) => (
              <li key={id} className="gap-8 sm:flex">
                <div className="w-full h-60 lg:max-w-52">
                  <Image
                    width={500}
                    height={500}
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL +
                      item.photo.data.attributes.url
                    }
                    className="h-full aspect-square object-cover  shadow-md rounded-xl"
                    alt={
                      process.env.NEXT_PUBLIC_BASE_URL +
                      item.photo.data.attributes.url
                    }
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.field}</p>
                  <p className="text-gray-600 mt-2">{item.bio}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <Link href={"#"}>
                      <LinkedinIcon className="w-6 h-6 hover:text-indigo-600" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
