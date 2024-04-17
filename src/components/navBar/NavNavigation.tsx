"use client";
import Link from "next/link";
import React from "react";
import { navigation } from "./navigation";
import { SunIcon } from "@radix-ui/react-icons";

const NavNavigation = () => {
  return (
    <ul className="lg:flex hidden gap-4 text-sm ">
      {navigation.map((item, index) => (
        <li key={index}>
          <Link
            className={
              "transition-colors hover:text-foreground/80 text-foreground/60 capitalize "
            }
            href={item.link}
          >
            {item.titel}
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          className="transition-colors hover:text-foreground/80 text-foreground/60 capitalize"
        >
          <SunIcon className="h-4 w-4" />
        </button>
      </li>
    </ul>
  );
};

export default NavNavigation;
