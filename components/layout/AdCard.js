"use client";
import React, { useEffect, useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HoverListing from "../tools/HoverListing";

export default function AdCard({ data }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isFavouriteClicked, setFavouriteClicked] = useState(false);

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleClick = (path) => {
    if (isClient) {
      router.push(`/details/${""}|${data.id}`);
    }
  };

  useEffect(() => {
    let cookieValues =
      hasCookie("favorites") && JSON.parse(getCookie("favorites"));
    if (cookieValues && cookieValues.includes(data.id)) {
      setFavouriteClicked(true);
    }
  }, []);

  const updateFavourite = () => {
    let cookieValues = hasCookie("favorites")
      ? JSON.parse(getCookie("favorites"))
      : [];
    if (isFavouriteClicked) {
      cookieValues = cookieValues.filter((i) => i != data.id);
      setCookie("favorites", JSON.stringify(cookieValues));
      localStorage.setItem("favorites", JSON.stringify(cookieValues));
      window.dispatchEvent(new CustomEvent("cookie-change"));
    } else {
      cookieValues.push(data.id);
      setCookie("favorites", JSON.stringify(cookieValues));
      localStorage.setItem("favorites", JSON.stringify(cookieValues));
      window.dispatchEvent(new CustomEvent("cookie-change"));
    }
    setFavouriteClicked(!isFavouriteClicked);
  };

  return (
    <div className={`tf-car-service ${data.isPremium ? "premium" : ""}`}>
      <HoverListing />

      <div className="image" onClick={() => handleClick()}>
        <div className="stm-badge-top">
          {data.saleOrRent === "Rent" && (
            <div className="bottom-btn-wrap">
              <div className="btn-group">
                <div className="rent-button">RENT</div>
              </div>
            </div>
          )}
        </div>
        <div className="listing-images">
          <span className="ad-price">{(data.currency, data.price)}</span>
          {data.isPremium && (
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
                      data?.images?.$values[0]?.path ||
                      data?.ad?.image?.$values[0]?.filePath
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
                      data?.images?.$values[1]?.path ||
                      data?.ad?.image?.$values[1]?.filePath
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
                      data?.images?.$values[2]?.path ||
                      data?.ad?.image?.$values[2]?.filePath
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
          <a className="icon-service" onClick={() => updateFavourite()}>
            {isFavouriteClicked ? (
              <FavoriteIcon className="image-icon active" />
            ) : (
              <FavoriteBorderIcon className="image-icon" />
            )}
          </a>
        </div>
        <h6 className="title" onClick={() => handleClick()}>
          {`${data.brand?.brandName || data.model?.brand?.brandName} ${
            data.model.modelName
          }`}
        </h6>
        <span className="sub-title" onClick={() => handleClick()}>
          {data.category.categoryName}
        </span>

        <div className="description" onClick={() => handleClick()}>
          <ul>
            <li className="listing-information transmission">
              <div className="inner">
                {/* <div className="information-icon">
                  <CalendarMonthIcon />
                </div> */}
                <span>Year</span>
                <p>{data.year}</p>
              </div>
            </li>
            <li className="listing-information fuel">
              <div className="inner">
                <span>HorsePower</span>
                <p>{data.enginePowerHp}</p>
              </div>
            </li>
            <li className="listing-information size-engine">
              <div className="inner">
                <span>Mileage</span>
                <p>{data.distance}</p>
              </div>
            </li>
          </ul>
        </div>
        {/* <a className="more-link" href="/listing-details"> </a>*/}
        <div className="bottom-btn-wrap">
          <span>{data.adDate}</span>
        </div>
      </div>
    </div>
  );
}
