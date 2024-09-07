import React from "react";
import Link from "next/link";
import Image from "next/image";
import RouteLinks from "./RouteLinks";

const LeftSidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar ">
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
          <h1 className="sidebar-logo ">Monex</h1>
        </Link>
        <RouteLinks />
        USER DETAIL
      </nav>
      FOOTER
    </section>
  );
};

export default LeftSidebar;
