import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Home = () => {
  const loggedInUser = {
    firstName: "Blaze",
    lastName: "Noob",
    email: "blaze@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-wrapper home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedInUser?.firstName || "Guest"}
            subtitle="Access & manage your account and transactions efficiently."
          />
          <BalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1478.56}
          />
        </header>
        TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedInUser}
        banks={[{ currentBalance: 755.47 }, { currentBalance: 654.74 }]}
      />
    </section>
  );
};

export default Home;
