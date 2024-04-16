import Link from "next/link";
import React from "react";

const NavNavigation = async ({ text }: any) => {
  const navigation = [
    {
      titel: "home",
      link: "/",
    },
    {
      titel: "about",
      link: "about-us",
    },
    {
      titel: "blog",
      link: "blog",
    },
    {
      titel: "feedback",
      link: "contact",
    },
  ];

  return (
    <ul className="lg:flex hidden gap-4 text-sm ">
      {navigation.map((item, index) => (
        <li key={index}>
          <Link
            className={
              "transition-colors hover:text-foreground/80 text-foreground/60 "
            }
            href={item.link}
          >
            {item.titel}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavNavigation;
