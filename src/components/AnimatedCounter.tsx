"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <>
      <CountUp end={amount} decimals={2} prefix="$" />
    </>
  );
};

export default AnimatedCounter;
