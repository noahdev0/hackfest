import { CalendarRange, Home, Info, Newspaper } from "lucide-react";

export const navigation = [
  {
    titel: "home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    titel: "blogs",
    link: "features",
    icon: <Newspaper className="h-4 w-4" />,
  },
  {
    titel: "events",
    link: "contact",
    icon: <CalendarRange className="h-4 w-4" />,
  },
  {
    titel: "about the faculty",
    link: "about-the-faculty",
    icon: <Info className="h-4 w-4" />,
  },
];
