"use client";
import React, { useEffect, useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HoverListing from "../tools/HoverListing";
import { GetCurrency } from "../tools/GetValues";
import { GetFormattedDate } from "../tools/GetDisplayDate";
import { GetPath } from "../tools/GetPath";
import { SetFavourites } from "../tools/UpdateFavourites";

export default function AdCard({ data, path }) {
  const currency = GetCurrency(data.currency);
  const adPath = GetPath().last;
  const router = useRouter();
  const [isFavouriteClicked, setFavouriteClicked] = useState(false);

  const handleClick = () => {
    router.push(`/details/${path}`);
  };

  useEffect(() => {
    let cookieValues =
      hasCookie("favorites") && JSON.parse(getCookie("favorites"));
    if (
      cookieValues &&
      cookieValues.some((selected) => selected.id === data.id)
    ) {
      setFavouriteClicked(true);
    }
  }, []);

  const updateFavourite = () => {
    const productName = data.productTypeName ? data.productTypeName : adPath;
    SetFavourites(isFavouriteClicked, setFavouriteClicked, data, productName);
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
          <span className="ad-price">
            {currency}&nbsp;{data?.price.toLocaleString("de-DE")}
          </span>
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
                      data?.images[0]?.path || data?.images[0]?.filePath
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
                      data?.images[1]?.path || data?.images[1]?.filePath
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
                      data?.images[2]?.path || data?.image[2]?.filePath
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
            {data.year && (
              <li className="listing-information transmission">
                <div className="inner">
                  <span>Year</span>
                  <p>{data.year}</p>
                </div>
              </li>
            )}
            {data.enginePowerHp && (
              <li className="listing-information fuel">
                <div className="inner">
                  <span>HorsePower</span>
                  <p>
                    {data.enginePowerHp} &nbsp;Hp &nbsp;({data.enginePowerKW}{" "}
                    &nbsp;Kw)
                  </p>
                </div>
              </li>
            )}
            {data.distance && data.distance !== 0 && (
              <li className="listing-information size-engine">
                <div className="inner">
                  <span>Mileage</span>
                  <p>{data.distance} &nbsp;km</p>
                </div>
              </li>
            )}
            {data.hoursOfOperation && (
              <li className="listing-information size-engine">
                <div className="inner">
                  <span>Operation Hours</span>
                  <p>{data.hoursOfOperation}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
        {/* <a className="more-link" href="/listing-details"> </a>*/}
        <div className="bottom-btn-wrap">
          <span>
            <span className="new-date-ad">New, &nbsp;</span>
            {GetFormattedDate(data.createdDate).formattedDate},{" "}
            {GetFormattedDate(data.createdDate).formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
}
