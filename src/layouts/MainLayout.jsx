import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NewsletterHorizontal from "../components/NewsletterHorizontal";
import NewsletterVertical from "../components/NewsletterVertical";
import PasswordReset from "../components/PasswordReset";
import ProductModal from "../components/ProductModal";
import SearchModal from "../components/SearchModal";
import SidebarModal from "../components/SidebarModal";
import SizeChartModal from "../components/SizeChartModal";
import WaitListModal from "../components/WaitListModal";
import ShoppingCartModal from "../components/ShoppingCartModal";
import NavbarSmall from "../components/NavbarSmall";
import NavbarBig from "../components/NavbarBig";

export default function MainLayout({ children }) {
  return (
    <>
      <NavbarSmall />
      <NavbarBig />
      <Outlet />
      <Footer />

      <NewsletterHorizontal />
      <NewsletterVertical />
      <PasswordReset />
      <ProductModal />
      <SearchModal />
      <ShoppingCartModal />
      <SidebarModal />
      <SizeChartModal />
      <WaitListModal />
    </>
  );
}
