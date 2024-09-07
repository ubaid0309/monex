import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggedInUser = { firstName: "Blaze" };
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
      </div>
    </section>
  );
};

export default Home;
