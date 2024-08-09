"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import useUser from "../hooks/useUser";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
export default function MobileNavbar({ handleMobileMenu }) {
  const { username, isBusiness } = useUser();
  const [favoriteCurrentCount, setFavouriteCount] = useState(0);
  const [isUserClicked, setIsUserClicked] = useState(false);

  useEffect(() => {
    if (hasCookie("favorites")) {
      setFavouriteCount(JSON.parse(getCookie("favorites")).length);
    }

    const handleStorageChange = (event) => {
      console.log(hasCookie("favorites"))
      if (hasCookie("favorites") === true) {
        setFavouriteCount(JSON.parse(getCookie("favorites")).length);
      }
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
            {username ? (
              <>
                <a
                  data-bs-toggle="modal"
                  role="button"
                  className="sc-menu-item"
                  onClick={() => setIsUserClicked(!isUserClicked)}
                >
                  <PermIdentityIcon />
                  <span className="text">{username}</span>
                </a>
                {isUserClicked && (
                  <div className="on-profile-section">
                    <div>
                      <a
                        data-bs-toggle="modal"
                        href={
                          isBusiness === "True"
                            ? "/user/salon-profile"
                            : "/user/profile"
                        }
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
              </>
            ) : (
              <a
                data-bs-toggle="modal"
                href="/sign-in"
                role="button"
                className="sc-menu-item"
              >
                <PermIdentityIcon />
                <span className="text">Login</span>
              </a>
            )}
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
