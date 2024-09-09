"use client";
import React, { useState } from "react";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

interface RouteLinkInterface {
  screen: "desktop" | "mobile";
}

const RouteLinks = ({ screen }: RouteLinkInterface) => {
  const [activeRoute, setActiveRoute] = useState("Home");

  const renderLink = (link: any, index: number) => {
    const linkContent = (
      <Link
        href={link?.route}
        className={`${
          screen === "desktop" ? "sidebar-link" : "sidebar-mobile-nav-link"
        } ${activeRoute === link?.label ? "bg-blue-500 text-white" : ""}`}
        onClick={() => setActiveRoute(link?.label)}
      >
        <Image
          src={link?.imgURL}
          alt={link?.label}
          width={24}
          height={24}
          className={`${
            activeRoute === link?.label ? "brightness-[3] invert-0" : ""
          }`}
        />
        <p
          className={`${
            screen === "desktop" ? "sidebar-label" : "sidebar-mobile-nav-label"
          } ${activeRoute === link?.label ? "!text-white" : ""}`}
        >
          {link?.label}
        </p>
      </Link>
    );

    // Conditionally wrap in <SheetClose /> for mobile
    return screen === "mobile" ? (
      <SheetClose asChild key={index}>
        {linkContent}
      </SheetClose>
    ) : (
      <React.Fragment key={index}>{linkContent}</React.Fragment>
    );
  };

  return <>{sidebarLinks.map((link, index) => renderLink(link, index))}</>;
};

export default RouteLinks;
