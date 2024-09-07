"use client";
import React, { useState } from "react";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const RouteLinks = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  return (
    <>
      {console.log(activeRoute)}
      {sidebarLinks.map((link, index) => (
        <Link
          key={index}
          href={link?.route}
          className={`sidebar-link ${
            activeRoute == link?.label ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => {
            setActiveRoute(link?.label);
          }}
        >
          <Image
            src={link?.imgURL}
            alt={link?.label}
            width={24}
            height={24}
            className={`${
              activeRoute == link?.label ? "brightness-[3] invert-0" : ""
            }`}
          />

          <p
            className={`sidebar-label ${
              activeRoute == link?.label ? "!text-white" : ""
            }`}
          >
            {link?.label}
          </p>
        </Link>
      ))}
    </>
  );
};

export default RouteLinks;
