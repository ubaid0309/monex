import React from "react";
import Link from "next/link";
import Image from "next/image";
import RouteLinks from "./RouteLinks";

const LeftSidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="flex  cursor-pointer items-center gap-2 mb-12 "
        >
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="monex logo"
          />
          <h1 className="sidebar-logo">Monex</h1>
        </Link>
        <RouteLinks screen="desktop" />
        <p className="text-black-1">USER DETAIL</p>
      </nav>
      <p className="text-black-1">USER DETAIL</p>
    </section>
  );
};

export default LeftSidebar;
