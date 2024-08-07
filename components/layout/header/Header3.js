"use client";
import Link from "next/link";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContrastIcon from "@mui/icons-material/Contrast";
import MobileNavbar from "../MobileNavbar";
import { Badge } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";
import LogoutIcon from "@mui/icons-material/Logout";
import useUser from "@/components/hooks/useUser";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import axios from "axios";

export default function Header3({ handleMobileMenu }) {
  const [username, isBusiness] = useUser();

  const [favoriteCurrentCount, setFavouriteCount] = useState(0);
  const [isUserClicked, setIsUserClicked] = useState(false);

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

  const logOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("isBusiness");
  };

  return (
    <>
      <header id="header3" className="main-header header header-fixed ">
        {/* Header Lower */}
        <div className="top-bar">
          <div className="themesflat-container">
            <div className="header-navbar">
              <div>
                <ul className="list-infor-topbar">
                  <li>
                    <Link href="/#">
                      <i className="icon-Group-11" />
                      <p>Hot Line: +1 800 123 456 789</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-end">
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
                  <LanguageSwitcher />
                </div>
              </div>
              <div className="flex-end">
                <div className="register ml--18">
                  <div className="flex align-center">
                    {username ? (
                      <>
                        <div className="upheader-item">
                          <div>
                            <a
                              data-bs-toggle="modal"
                              role="button"
                              href="/"
                              className="header-login-text"
                              onClick={logOut}
                            >
                              <span>Log out</span>
                            </a>
                          </div>
                        </div>
                        <div className="upheader-item">
                          <a
                            // onClick={logOut}
                            data-bs-toggle="modal"
                            role="button"
                            className="header-login-text"
                            onClick={() => {
                              setIsUserClicked(!isUserClicked);
                            }}
                          >
                            <AccountCircleIcon />
                            <span className="text">{username}</span>
                          </a>

                          {isUserClicked && (
                            <div className="top-profile-section">
                              <div>
                                <a
                                  data-bs-toggle="modal"
                                  href={`${
                                    isBusiness === "True"
                                      ? "/user/salon-profile"
                                      : "/user/profile"
                                  }`}
                                >
                                  <PermIdentityIcon />
                                  <span className="text">Profile</span>
                                </a>
                              </div>
                              <div>
                                <a data-bs-toggle="modal" href="/user/ads">
                                  <PermIdentityIcon />
                                  <span className="text">Ads</span>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="upheader-item">
                        <a
                          data-bs-toggle="modal"
                          role="button"
                          href="/sign-in"
                          className="header-login-text"
                        >
                          &nbsp;Login
                        </a>
                      </div>
                    )}
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
                    <LanguageSwitcher />
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
                        </ul>
                      </div>
                    </nav>
                    <div className=" sc-btn-top ml--20 ">
                      <Link className="btn-icon-list" href="/create">
                        <span>Create Ad</span>
                        <i className="icon-add-button-1" />
                      </Link>
                    </div>
                    {/* Main Menu End*/}
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
              {username ? (
                <div className="help-bar-mobie login-box">
                  <a
                    data-bs-toggle="modal"
                    href="/sign-in"
                    role="button"
                    className="fw-7 category"
                  >
                    <i className="icon-user" />
                    {username}
                  </a>
                </div>
              ) : (
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
              )}
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
              {username && (
                <div className="log-out">
                  <Link href="/" className="fw-7 font-2" onClick={logOut}>
                    <LogoutIcon />
                    <span>Log out</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <MobileNavbar handleMobileMenu={handleMobileMenu} />

        {/* End Mobile Menu */}
      </header>
    </>
  );
}
