"use client";
import Link from "next/link";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContrastIcon from "@mui/icons-material/Contrast";
import LanguageIcon from "@mui/icons-material/Language";
import MobileNavbar from "../MobileNavbar";
import ReactCountryFlag from "react-country-flag";
import { Badge } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
export default function Header3({ handleMobileMenu }) {
  const [favoriteCurrentCount, setFavouriteCount] = useState(0);
  useEffect(() => {
    if (hasCookie("favorites")) {
      setFavouriteCount(JSON.parse(getCookie("favorites")).length);
    }

    const handleStorageChange = (event) => {
      setFavouriteCount(JSON.parse(getCookie("favorites")).length);
    };

    window.addEventListener("cookie-change", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <>
      <header id="header3" className="main-header header header-fixed ">
        {/* Header Lower */}
        <div className="top-bar">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-infor-topbar">
                  <li>
                    <Link href="/#">
                      <i className="icon-Group-11" />
                      <p>Hot Line: +1 800 123 456 789</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <i className="icon-Group3" />
                      <p>Mail Us: your_protect@mail.com</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 flex flex-end">
                <div className="upheader-item">
                  <a
                    data-bs-toggle="modal"
                    role="button"
                    className="flex align-center"
                    href="/favorites"
                  >
                    <Badge badgeContent={favoriteCurrentCount} color="success">
                      <FavoriteBorderIcon />
                    </Badge>
                  </a>
                </div>
                <div className="upheader-item">
                  <a
                    data-bs-toggle="modal"
                    role="button"
                    className="flex align-center"
                  >
                    <BalanceIcon />
                  </a>
                </div>
                <div className="upheader-item">
                  <a
                    data-bs-toggle="modal"
                    role="button"
                    className="flex align-center"
                  >
                    <ContrastIcon />
                  </a>
                </div>

                <div className="upheader-item">
                  <div className="nav-wrapper">
                    <div className="sl-nav">
                      <LanguageIcon />
                      <ul>
                        <li>
                          <b>Eng</b>{" "}
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                          <div className="triangle"></div>
                          <ul>
                            <li>
                              <i className="sl-flag flag-usa">
                                <div id="germany"></div>
                              </i>
                              <span className="active">Eng</span>
                            </li>
                            <li>
                              <i className="sl-flag flag-usa">
                                <div id="germany"></div>
                              </i>
                              <span>Ru</span>
                            </li>
                            <li>
                              <i className="sl-flag flag-usa">
                                <div id="germany"></div>
                              </i>
                              <span>Az</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 flex-end">
                <div className="register ml--18">
                  <div className="flex align-center">
                    <a
                      data-bs-toggle="modal"
                      role="button"
                      href="/sign-in"
                      className="header-login-text"
                    >
                      &nbsp;Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-lg-12 mobile-header-bar">
                <div className="header-style2 flex justify-space align-center">
                  <div className="mobile-right-icon">
                    <a
                      data-bs-toggle="modal"
                      role="button"
                      className="flex align-center"
                    >
                      <ContrastIcon />
                    </a>
                  </div>

                  <div className="mobile-left-icon">
                    <div className="nav-wrapper">
                      <div className="sl-nav">
                        <ul>
                          <li>
                            <ReactCountryFlag countryCode="US" svg />
                            <span className="language-shower">Eng</span>{" "}
                            <i
                              className="fa fa-angle-down"
                              aria-hidden="true"
                            ></i>
                            <ul>
                              <li>
                                <ReactCountryFlag countryCode="US" svg />
                                <span className="active">Eng</span>
                              </li>
                              <li>
                                <ReactCountryFlag countryCode="RU" svg />
                                <span>Ru</span>
                              </li>
                              <li>
                                <ReactCountryFlag countryCode="AZ" svg />
                                <span>Az</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Logo Box */}
                  <div className="logo-box flex">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/images/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="nav-outer flex align-center">
                    {/* Main Menu */}
                    <nav className="main-menu show navbar-expand-md">
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li>
                            <Link href="/saloons">Saloons </Link>
                          </li>
                          <li>
                            <Link href="/contact-us">Services</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}

                    <div className="flat-bt-top sc-btn-top ml--20 ">
                      <Link className="btn-icon-list" href="/create-ad">
                        <span>Create Ad</span>
                        <i className="icon-add-button-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-cancel-1" />
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/assets/images/logo/logo.png" alt="Logo Fura" />
              </Link>
            </div>
            <div className="bottom-canvas">
              {/* <div className="menu-outer">
                <MobileMenu />
              </div> */}
              <div className="help-bar-mobie login-box">
                <a
                  data-bs-toggle="modal"
                  href="/sign-in"
                  role="button"
                  className="fw-7 category"
                >
                  <i className="icon-user" />
                  Login
                </a>
              </div>
              <div className="help-bar-mobie compare">
                <Link href="/#" className="fw-7 font-2">
                  <BalanceIcon />
                  <span> Compare</span>
                </Link>
              </div>
              <div className="help-bar-mobie saloons">
                <Link href="/saloons" className="fw-7 font-2">
                  <EmojiTransportationIcon />
                  <span>Saloons</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <MobileNavbar handleMobileMenu={handleMobileMenu} />

        {/* End Mobile Menu */}
      </header>
    </>
  );
}
