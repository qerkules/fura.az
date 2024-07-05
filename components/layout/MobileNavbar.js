import React from "react";
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function MobileNavbar() {
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
            <a className="sc-menu-item" href="/home/index">
            <HomeIcon/>
              <span className="text">Home</span>
            </a>
          </li>
          <li id="wshlst-bottom">
            <a className="sc-menu-item" href="/account/wishlist">
            <FavoriteBorderIcon/>
              <span className="text">Favorites</span>
            </a>
          </li>
          <li>
            <a className="sc-menu-item navbar-add" href="/create/list">
              <div className="new-ad-mobile">
              <AddIcon className="new-ad-mobile-icon"/>
              </div>
              <span className="text">New Ad</span>
            </a>
          </li>
          <li>
            <a className="sc-menu-item" href="/account/welcome">
              <LoginIcon/>
              <span className="text">Sign in</span>
            </a>
          </li>
          <li id="barbottom">
            <a className="sc-menu-item">
              <MenuIcon/>
              <span className="text">More</span>
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
}
