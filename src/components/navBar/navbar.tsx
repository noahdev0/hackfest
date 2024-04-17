import NavbarActions from "@/components/navBar/navbar-actions";
import Image from "next/image";
import NavNavigation from "./NavNavigation";
import Container from "../container";
import Link from "next/link";
import { DesktopIcon } from "@radix-ui/react-icons";

const Navbar = async () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8">
      <Container>
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-x-6">
            <Link
              aria-label="Nike home page"
              href="/"
              className="flex items-center gap-x-2 "
            >
              {/* <Image
                className="h-10 w-10 aspect-square"
                src="/assets/logo/logo-no-background.svg"
                alt="cloud nova"
                width={150}
                height={150}
              /> */}
              <span className="hidden font-bold sm:inline-block">HackFest</span>
            </Link>
            <NavNavigation />
          </div>

          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
