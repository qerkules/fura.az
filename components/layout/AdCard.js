import React, { useEffect, useState } from "react";
import Link from "next/link";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";

export default function AdCard({ premium,path }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleClick = (path) => {
    if (isClient) {
      router.push(path);
    }
  };
  return (
    <div className={`tf-car-service ${premium ? "premium" : ""}`} >
      <div className="image" onClick={() => handleClick(path)}>
        <div className="stm-badge-top">
          <div className="feature">
            <span>NEW</span>
          </div>
          <div className="bottom-btn-wrap">
            <div className="btn-group">
                <div className="rent-button">
                  RENT
                </div>
            </div>
          </div>
        </div>
        <div className="listing-images">
          <span className="ad-price">$50,000</span>
          {premium && (
            <span className="ad-premium">
              <img src="/assets/images/icon-box/premium-icon.svg" />
            </span>
          )}
          <div className="hover-listing-image" >
            <div className="wrap-hover-listing">
              <div className="listing-item active" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src="./assets/images/car-list/car1.webp"
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src="./assets/images/car-list/car11.webp"
                    className="swiper-image lazy tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div
                className="listing-item view-gallery"
                title="Lexus LC Hybrid 2024"
              
              >
                    <div className="images" >
                  <img
                    src="./assets/images/car-list/car12.webp"
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                  <div className="overlay-limit" >
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
        <div className="icon-group">
          <a href="#" className="icon-service">
            <BalanceIcon className="image-icon" />
          </a>
          <a href="#" className="icon-service">
            <FavoriteBorderIcon className="image-icon" />
          </a>
        </div>
        <h6 className="title" onClick={() => handleClick(path)}>Scania R500</h6>
        <span className="sub-title" onClick={() => handleClick(path)}>Standart Tractor</span>

        <div className="description" onClick={() => handleClick(path)}>
          <ul>
            <li className="listing-information transmission">
              <div className="inner">
                {/* <div className="information-icon">
                  <CalendarMonthIcon />
                </div> */}
                <span>Year</span>
                <p>2020</p>
              </div>
            </li>
            <li className="listing-information fuel">
              <div className="inner">
                <span>HorsePower</span>
                <p>500 hp</p>
              </div>
            </li>
            <li className="listing-information size-engine">
              <div className="inner">
                <span>Mileage</span>
                <p>200500km</p>
              </div>
            </li>
          </ul>
        </div>
        {/* <a className="more-link" href="/listing-details"> </a>*/}
        <div className="bottom-btn-wrap">
          <span>6/30/2024 3:09:24 PM</span>
        </div>
      </div>
    </div>
  );
}
