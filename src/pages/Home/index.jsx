import React from "react";
import BestPicks from "../../components/BestPicks";
import Categories from "../../components/Categories";
import CountDown from "../../components/CountDown";
import Features from "../../components/Features";
import Promo from "../../components/Promo";
import Reviews from "./components/Reviews";
import TopSellers from "../../components/TopSellers";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <>
      <Promo />
      <Categories />
      {/* FEATURES */}
      <Features />
      {/* BEST PICKS */}
      <BestPicks />
      {/* TOP SELLERS */}
      <TopSellers />
      {/* COUNTDOWN */}
      <CountDown />
      {/* REVIEWS */}
      <Reviews />
      {/* BRANDS */}
      <Brands />
    </>
  );
}
