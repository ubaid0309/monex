import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, banks, transactions }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8 w-full">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-bankGradient">
              {user?.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex justify-between items-center">
          <h2 className="header-2">My banks</h2>
          <Link href={"/"} className="flex gap-2  items-center">
            <Image
              width={20}
              height={20}
              src="/icons/plus.svg"
              alt="plus icon"
            />

            <p className="text-14 font-semibold text-gray-600">Add bank</p>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0]?.id}
                userName={`${user?.firstName} ${user?.lastName}`}
                account={banks[0]}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute z-0 top-8 right-0 w-[90%]">
                <BankCard
                  key={banks[1]?.id}
                  userName={`${user?.firstName} ${user?.lastName}`}
                  account={banks[1]}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
