import React from "react";
import BestPicks from "../components/BestPicks";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Promo from "../components/Promo";
import TopSellers from "../components/TopSellers";
import CountDown from "../components/CountDown";
import Reviews from "../components/Reviews";
import Brands from "../components/Brands";

export default function Home() {
  return (
    <>
      <Promo />
      <Categories />
      <Features />
      <BestPicks />
      <TopSellers />
      <CountDown />
      <Reviews />
      <Brands />
    </>
  );
}
