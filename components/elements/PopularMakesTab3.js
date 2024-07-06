"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AdCard from "../layout/AdCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdCardSparepart from "../layout/AdCardSparepart";
import AdCardTrailer from "../layout/AdCardTrailer";

export default function PopularMakesTab3() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      {/* <div className="header-section tab-car-service">
        <div className="heading-section">
          <span className="sub-title mb-6 wow fadeInUp">
            Trusted Car DeAler Service
          </span>
          <h2 className="title wow fadeInUp">Explore all Vehicles</h2>
        </div>
        <ul
          className="nav nav-pills justify-content-end"
          id="pills-tab-service"
          role="tablist"
        >
          <li className="nav-item" onClick={() => handleOnClick(1)}>
            <button
              className={activeIndex == 1 ? "nav-link active" : "nav-link"}
            >
              All Status
            </button>
          </li>
          <li className="nav-item" onClick={() => handleOnClick(2)}>
            <button
              className={activeIndex == 2 ? "nav-link active" : "nav-link"}
            >
              New Cars
            </button>
          </li>
          <li className="nav-item" onClick={() => handleOnClick(3)}>
            <button
              className={activeIndex == 3 ? "nav-link active" : "nav-link"}
            >
              Used Cars
            </button>
          </li>
        </ul>
      </div> */}{" "}
      <div className="ad-banner">
        <img src="/assets/images/ads/ad-banner.jpg" />
      </div>
      <div className="cat-container desktop-hider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="semi-trailer">
              <label htmlFor="semi-trailer">Semi-trailer</label>
              <img src="/assets/images/categories/n3.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="truck75">
              <label htmlFor="truck75">Truck</label>
              <img src="/assets/images/categories/n1.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="truck">
              <label htmlFor="truck">Semi-trailer truck</label>
              <img src="/assets/images/categories/n2.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="cm">
              <label htmlFor="cm">Construction machinery</label>
              <img src="/assets/images/categories/n4.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="av">
              <label htmlFor="av">Agricultural vehicle</label>
              <img src="/assets/images/categories/n5.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="bus">
              <label htmlFor="bus">Bus</label>
              <img src="/assets/images/categories/n6.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="forklift">
              <label htmlFor="forklift">Forklift</label>
              <img src="/assets/images/categories/n7.png" alt="" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-box">
            <button className="index-slider-items" id="sp">
              <label htmlFor="sp">Spare parts</label>
              <img src="/assets/images/categories/n8.png" alt="" />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="cat-container mobile-hider ">
        <a href="/list/semi-trailer#searchbar">
          <button className="index-slider-items" id="semi-trailer">
            <label htmlFor="semi-trailer">Semi-trailer</label>
            <img src="/assets/images/categories/n3.png" alt="" />
          </button>
        </a>
        <a href="/list/trucko75#searchbar">
          <button className="index-slider-items" id="truck75">
            <label htmlFor="truck75">Truck</label>
            <img src="/assets/images/categories/n1.png" alt="" />
          </button>
        </a>
        <a href="/list/trucks#searchbar">
          <button className="index-slider-items" id="truck">
            <label htmlFor="truck">Semi-trailer truck</label>
            <img src="/assets/images/categories/n2.png" alt="" />
          </button>
        </a>
        <a href="/list/constructionmachinery#searchbar">
          <button className="index-slider-items" id="cm">
            <label htmlFor="cm">Construction machinery</label>
            <img src="/assets/images/categories/n4.png" alt="" />
          </button>
        </a>
        <a href="/list/agriculturalvehicle#searchbar">
          <button className="index-slider-items" id="av">
            <label htmlFor="av">Agricultural vehicle</label>
            <img src="/assets/images/categories/n5.png" alt="" />
          </button>
        </a>
        <a href="/list/bus#searchbar">
          <button className="index-slider-items" id="bus">
            <label htmlFor="bus">Bus</label>
            <img src="/assets/images/categories/n6.png" alt="" />
          </button>
        </a>
        <a href="/list/forklift#searchbar">
          <button className="index-slider-items" id="forklift">
            <label htmlFor="forklift">Forklift</label>
            <img src="/assets/images/categories/n7.png" alt="" />
          </button>
        </a>
        <a href="/list/spareparts#searchbar">
          <button className="index-slider-items" id="sp">
            <label htmlFor="sp">Spare parts</label>
            <img src="/assets/images/categories/n8.png" alt="" />
          </button>
        </a>
      </div>
      {/* <div className="tab-content-header">
        <span className="tab-content-title">Todays Ads</span>
        <span className="tab-content-title">
          Filtirleme <ExpandMoreIcon />
        </span>
      </div> */}
      <div className="tab-content" id="pills-tabContent">
        <div className={"tab-pane fade show active"}>
          <div className="divider-header full-background">Premium Ads</div>
          <div className="car-list-item full-background">
            <AdCard premium={true} />
            <AdCardSparepart premium={true} />
            <AdCardTrailer premium={true} />
            <AdCard premium={true} />
          </div>
          <div className="ad-banner">
            <img src="/assets/images/ads/ad-banner.jpg" />
          </div>
          <div className="divider-header">Todays Ads Exclusive</div>
          <div className="car-list-item">
            <AdCard />
            <AdCard />
            <AdCard />
            <AdCard />
            <button>See All Ads</button>
          </div>
          <div className="ad-banner">
            <img src="/assets/images/ads/ad-banner.jpg" />
          </div>
          <div className="divider-header full-background">
            Trailers Exclusive
          </div>
          <div className="car-list-item full-background">
            <AdCardTrailer />
            <AdCardTrailer />
            <AdCardTrailer />
            <AdCardTrailer />
            <button>See All Ads</button>
          </div>
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
        <div
          className={
            activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          {/* Widget Car Service */}
          <div className="car-list-item">
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car1.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car2.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car3.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car4.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car5.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car6.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Widget Car Service */}
        </div>
        <div
          className={
            activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          {/* Widget Car Service */}
          <div className="car-list-item">
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car1.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car2.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car3.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car4.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car5.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="#" className="icon-service">
                      <i className="icon-shuffle-2-11" />
                    </a>
                    <a href="#" className="icon-service">
                      <i className="icon-heart-1-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-car-service">
              <Link href="/listing-details" className="image">
                <div className="stm-badge-top">
                  <div className="feature">
                    <span>Featured</span>
                    <div className="cut">
                      <svg
                        width={24}
                        height={22}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z"
                          fill="white"
                        />
                        <path
                          d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z"
                          fill="white"
                        />
                      </svg>
                      <p>5</p>
                    </div>
                  </div>
                  <span>2023</span>
                </div>
                <div className="listing-images">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car6.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="./assets/images/car-list/car11.jpg"
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
                            src="./assets/images/car-list/car12.jpg"
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
              </Link>
              <div className="content">
                <span className="sub-title">Mini Cooper 3 Similar</span>
                <h6 className="title">
                  <Link href="/listing-details">
                    Chevrolet Suburban 2021 mo
                  </Link>
                </h6>
                <span className="price">$27,000</span>
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel type</span>
                        <p>Petrol</p>
                      </div>
                    </li>
                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>90 k.m</p>
                      </div>
                    </li>
                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>Auto</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bottom-btn-wrap">
                  <div className="btn-read-more">
                    <a className="more-link" href="/listing-details">
                      <span>View details</span>
                      <i className="icon-arrow-right2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Widget Car Service */}
        </div>
      </div>
    </>
  );
}
