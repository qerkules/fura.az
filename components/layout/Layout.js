"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import HoverListing from "../elements/HoverListing";
import ModalToggle from "../elements/ModalToggle";
import ModalToggle2 from "../elements/ModalToggle2";
import ModalToggle3 from "../elements/ModalToggle3";
import TabList from "../elements/TabList";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Header3 from "./header/Header3";
export default function Layout({
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };
  // Toggle
  const [isToggled1, setToggled1] = useState(false);
  const handleToggle1 = () => setToggled1(!isToggled1);
  const [isToggled2, setToggled2] = useState(false);
  const handleToggle2 = () => setToggled2(!isToggled2);
  const [isToggled3, setToggled3] = useState(false);
  const handleToggle3 = () => setToggled3(!isToggled3);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <HoverListing />
      <TabList />
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handleToggle1={handleToggle1}
            isToggled1={isToggled1}
            handleToggle2={handleToggle2}
            isToggled2={isToggled2}
            handleToggle3={handleToggle3}
            isToggled3={isToggled3}
          />

          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

          {children}
         <Footer1 />
        </div>
      </div>
      {/* <BackToTop /> */}
      <ModalToggle
        handleToggle1={handleToggle1}
        isToggled1={isToggled1}
        handleToggle2={handleToggle2}
        isToggled2={isToggled2}
        handleToggle3={handleToggle3}
        isToggled3={isToggled3}
      />
      <ModalToggle2
        handleToggle1={handleToggle1}
        isToggled1={isToggled1}
        handleToggle2={handleToggle2}
        isToggled2={isToggled2}
        handleToggle3={handleToggle3}
        isToggled3={isToggled3}
      />
      <ModalToggle3
        handleToggle1={handleToggle1}
        isToggled1={isToggled1}
        handleToggle2={handleToggle2}
        isToggled2={isToggled2}
        handleToggle3={handleToggle3}
        isToggled3={isToggled3}
      />
    </>
  );
}
