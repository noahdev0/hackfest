import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Home, Info, ListChecks, Mail } from "lucide-react";

import Link from "next/link";

export function MobileNav() {
  const navigation = [
    {
      titel: "home",
      link: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      titel: "about",
      link: "about-us",
      icon: <Info className="h-4 w-4" />,
    },
    {
      titel: "features",
      link: "features",
      icon: <ListChecks className="h-4 w-4" />,
    },
    {
      titel: "feedback",
      link: "contact",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button size={"icon"} variant="link">
          <AlignJustify className="h-4 w-4" />{" "}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle> */}
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </SheetDescription>
        </SheetHeader>
        <ul className=" flex flex-col gap-y-4 mt-8">
          {navigation.map((item, index) => (
            <li key={index}>
              <SheetClose asChild>
                <Link
                  className={"text-base flex gap-2 items-center"}
                  href={item.link}
                >
                  {item.icon}
                  {item.titel}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Link href={"/about-us"}>anis</Link>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
