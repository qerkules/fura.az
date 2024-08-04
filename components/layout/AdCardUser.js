"use client";
import React, { useEffect, useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HoverListing from "../tools/HoverListing";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
export default function AdCardUser({ data }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isFavouriteClicked, setFavouriteClicked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleClick = () => {
    if (isClient) {
      // router.push(path);
    }
  };

  return (
    <div className={`tf-car-service ${data?.isPremium ? "premium" : ""}`}>
      <HoverListing />
      <div className="image" onClick={() => handleClick()}>
        <div className="top-status">Active</div>
        <div className="listing-images">
          <span className="ad-price">{data?.price}</span>
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
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.images[0]?.path}`}
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item" title="Lexus LC Hybrid 2024">
                <div className="images">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.images[1]?.path}`}
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                  />
                </div>
              </div>
              <div className="listing-item view-gallery">
                <div className="images">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.images[2]?.path}`}
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
        <h6 className="title" onClick={() => handleClick()}>
          {`${data?.brand.brandName} ${data?.model.modelName}`}
        </h6>
        <span className="sub-title" onClick={() => handleClick()}>
          {data?.category.categoryName}
        </span>

        <div className="description">
          {" "}
          <div className="edit-section">
            <EditIcon />
            <span>Edit Ad</span>
          </div>
          <div className="edit-section">
            <CloseIcon />
            <span>Delete Ad</span>
          </div>
        </div>
        {/* <a className="more-link" href="/listing-details"> </a>*/}
        <div className="bottom-btn-wrap">
          <span>{data?.adDate}</span>
        </div>
      </div>
    </div>
  );
}
