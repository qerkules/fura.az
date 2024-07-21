"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";

export default function MobileNavbar({ handleMobileMenu }) {
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
    <section id="header-mobile-bottom" className="mobile-nav-menu">
      {/* <div className="off-screen-menu">
        <div className="off-screen-menu-close hided">X</div>
        <ul>
          <li>
            <a href="/account/comparison">
              <i className="las la-balance-scale"></i> <span>Comparison</span>
            </a>
          </li>
          <li>
            <a href="/list/transport">
              <i className="las la-dolly"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="/list/salon&amp;services">
              <i className="las la-warehouse"></i>{" "}
              <span>Showroom and service stations</span>
            </a>
          </li>
        </ul>
      </div> */}
      <ul id="navbar-mobile-bottom" style={{ display: "block" }}>
        <div className="sc-bottom-bar">
          <li>
            <a className="sc-menu-item" href="/">
              <HomeIcon />
              <span className="text">Home</span>
            </a>
          </li>
          <li id="wshlst-bottom">
            <a className="sc-menu-item" href="/favorites">
              <Badge badgeContent={favoriteCurrentCount} color="success">
                <FavoriteBorderIcon />
              </Badge>
              <span className="text">Favorites</span>
            </a>
          </li>
          <li>
            <a className="sc-menu-item navbar-add" href="/create">
              <div className="new-ad-mobile">
                <AddIcon className="new-ad-mobile-icon" />
              </div>
              <span className="text">New Ad</span>
            </a>
          </li>
          <li>
            <a className="sc-menu-item" href="/sign-in">
              <LoginIcon />
              <span className="text">Sign in</span>
            </a>
          </li>
          <li id="barbottom">
            <a className="sc-menu-item">
              <MenuIcon
                className="mobile-nav-toggler mobile-button"
                onClick={handleMobileMenu}
              />
              <span className="text">More</span>
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
}
