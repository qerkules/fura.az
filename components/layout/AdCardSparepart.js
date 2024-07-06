import React from "react";
import Link from "next/link";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AdCardSparepart() {
  return (
    <div className="tf-car-service">
      <div className="image">
        <div className="stm-badge-top">
          <div className="feature">
            <span>NEW</span>
          </div>
          <div className="bottom-btn-wrap">
            <div className="btn-group">
              <a href="#" className="icon-service">
                <FavoriteBorderIcon className="image-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="listing-images">
          <span className="ad-price">$50,000</span>
          <div className="hover-listing-image">
            <div className="wrap-hover-listing">
              <div className="listing-item active" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src="./assets/images/car-list/sparepart.webp"
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src="./assets/images/car-list/sparepart.webp"
                    className="swiper-image lazy tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div
                className="listing-item view-gallery"
                title="Lexus LC Hybrid 2024"
              >
                <div className="images">
                  <img
                    src="./assets/images/car-list/sparepart.webp"
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                  <div className="overlay-limit">
                    <img
                      src="./assets/images/car-list/img.png"
                      className="icon-img"
                      alt="icon-map"
                    />
                    <p>2 more photos</p>
                  </div>
                </div>
              </div>
              <div className="bullet-hover-listing">
                <div className="bl-item active" />
                <div className="bl-item" />
                <div className="bl-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h6 className="title">Bosch</h6>
        <span className="sub-title">Crane Arm Support</span>

        <div className="description">
          <p>Scania R500...</p>
        </div>
        {/* <a className="more-link" href="/listing-details"> </a>*/}
        <div className="bottom-btn-wrap">
          <span>6/30/2024 3:09:24 PM</span>
        </div>
      </div>
    </div>
  );
}
