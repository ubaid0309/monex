import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import Image from "next/image";
import RouteLinks from "./RouteLinks";

const MobileNav = ({ user }: MobileNavProps) => {
  return (
    <section className="w-full max-w-[260px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" />
        </SheetTrigger>
        <SheetClose>
          {" "}
          <SheetContent
            side={"left"}
            className="bg-white py-10 flex flex-col gap-6"
          >
            <RouteLinks screen="mobile" />
          </SheetContent>
        </SheetClose>
      </Sheet>
    </section>
  );
};

export default MobileNav;
