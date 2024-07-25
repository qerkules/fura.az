"use client";
import Link from "next/link";
import { useState } from "react";
import AdCard from "../layout/AdCard";
import AdCardSparepart from "../layout/AdCardSparepart";
import AdCardTrailer from "../layout/AdCardTrailer";
import Categories from "../sections/Categories";

export default function PopularMakesTab3() {
  const [activeIndex, setActiveIndex] = useState(1);
  const data = {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "/assets/images/car-list/car1.webp",
      "/assets/images/car-list/car11.webp",
      "/assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM<",
  };
  const data2 = {
    id: 2,
    saleOrRent: "sale",
    price: "20.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "/assets/images/car-list/car1.webp",
      "/assets/images/car-list/car11.webp",
      "/assets/images/car-list/car12.webp",
    ],
    brand: "DAF",
    model: "DX470",
    category: "Standart Tractor",
    year: 2000,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM<",
  };

  return (
    <>
      <div className="widget-tf-slider ">
        <div className="slider-wrap swiper-wrapper">
          <div className="tf-slide-item swiper-slide">
            <div className="slide-item-image">
              <img src="/assets/images/slide/bg-sign.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-car-service">
        <Categories currentIndex={false} />
        <div className="tab-content" id="pills-tabContent">
          <div className={"tab-pane fade show active"}>
            <div className="full-background">
              <div className="themesflat-container">
                <div className="divider-header ">Premium Ads</div>
                <div className="car-list-item ">
                  <AdCard path={"/listing-details"} data={data} />
                  <AdCardSparepart premium={true} />
                  <AdCardTrailer premium={true} />
                  <AdCard path={"/listing-details"} data={data} />
                </div>
              </div>
            </div>
            <div className="themesflat-container">
              <div className="ad-banner">
                <img src="/assets/images/ads/ad-banner.jpg" />
              </div>
              <div className="divider-header">Todays Ads Exclusive</div>
              <div className="car-list-item">
                <AdCard path={"/listing-details"} data={data2} />
                <AdCard path={"/listing-details"} data={data} />
                <AdCard path={"/listing-details"} data={data} />
                <AdCard path={"/listing-details"} data={data} />
                <button>See All Ads</button>
              </div>
              <div className="ad-banner">
                <img src="/assets/images/ads/ad-banner.jpg" />
              </div>
            </div>
            <div className="full-background">
              <div className="themesflat-container">
                <div className="divider-header">Trailers Exclusive</div>
                <div className="car-list-item">
                  <AdCardTrailer />
                  <AdCardTrailer />
                  <AdCardTrailer />
                  <AdCardTrailer />
                  <button>See All Ads</button>
                </div>
              </div>
            </div>
            <div className="themesflat-container">
              <div className="ad-banner">
                <img src="/assets/images/ads/ad-banner.jpg" />
              </div>
              <div className="divider-header">Spare Parts</div>
              <div className="car-list-item">
                <AdCardSparepart />
                <AdCardSparepart />
                <AdCardSparepart />
                <AdCardSparepart />
                <button>See All Ads</button>
              </div>
            </div>
          </div>
          <div
            className={
              activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          ></div>
          <div
            className={
              activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
