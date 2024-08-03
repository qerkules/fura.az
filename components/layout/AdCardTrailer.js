import React from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GetCurrency } from "../tools/GetValues";
import HoverListing from "../tools/HoverListing";

export default function AdCardTrailer({ data, path }) {
  const currency = GetCurrency(data?.currency);

  const handleClick = () => {
    router.push(`/details/${path}`);
  };
  return (
    <div className={`tf-car-service ${data?.isPremium ? "premium" : ""}`}>
      <HoverListing />
      <div className="image">
        <div className="stm-badge-top">
          {data?.isNew && (
            <div className="feature">
              <span>NEW</span>
            </div>
          )}
          {data?.saleOrRent === "Rent" && (
            <div className="bottom-btn-wrap">
              <div className="btn-group">
                <div className="rent-button">RENT</div>
              </div>
            </div>
          )}
        </div>
        <div className="listing-images">
          <span className="ad-price">
            {currency} &nbsp;
            {data?.price}
          </span>
          {data?.isPremium && (
            <span className="ad-premium">
              <img src="/assets/images/icon-box/premium-icon.svg" />
            </span>
          )}
          <div className="hover-listing-image">
            <div className="wrap-hover-listing">
              <div className="listing-item active" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${
                      data?.images[0]?.path || data?.ad.image[0]?.filePath
                    }`}
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${
                      data?.images[1]?.path || data?.ad?.image[1]?.filePath
                    }`}
                    className="swiper-image lazy tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item view-gallery">
                <div className="images">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${
                      data?.images[2]?.path || data?.ad?.image[2]?.filePath
                    }`}
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                  <div className="overlay-limit">
                    <img
                      src="/assets/images/car-list/img.png"
                      className="icon-img"
                      alt="icon-map"
                    />
                    <p>2 more photos</p>
                  </div>
                </div>
              </div>{" "}
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
        <h6 className="title">
          {data?.brand?.brandName} {data?.model?.modelName}
        </h6>
        <span className="sub-title">{data?.category.categoryName}</span>

        <div className="description">
          <ul>
            {data?.year && (
              <li className="listing-information transmission">
                <div className="inner">
                  <span>Year</span>
                  <p>{data?.year}</p>
                </div>
              </li>
            )}
            {data?.licensedWeight && (
              <li className="listing-information fuel">
                <div className="inner">
                  <span>Weight</span>
                  <p>{data?.licensedWeight} T</p>
                </div>
              </li>
            )}
            {data?.axles && (
              <li className="listing-information size-engine">
                <div className="inner">
                  <span>Axles</span>
                  <p>{data?.axles} Axles</p>
                </div>
              </li>
            )}
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
