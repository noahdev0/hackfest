import Link from "next/link";
import React from "react";
import { navigation } from "./navigation";

const NavNavigation = async () => {
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
    </ul>
  );
};

export default NavNavigation;
