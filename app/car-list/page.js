"use client";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import Categories from "@/components/sections/Categories";
import SearchFilter from "@/components/sections/SearchFilter";
import Link from "next/link";
import {  useState } from "react";
export default function CarList() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="widget-banner-car-listing banner-car-listing-list">
            <div className="themesflat-container full">
              <div className="banner-car-listing">
                <h1 className="title text-white">
                  Semi <span className="text-red">Trailer</span> Truck
                </h1>
              </div>
            </div>
          </div>

          {/* car-listing-list */}
          <div className="widget-car-listing-list">
            <Categories />
            <div className="themesflat-container">
              <div className="row car-listing-list">
                <div className="col-md-12 col-lg-3">
                  <SearchFilter />
                </div>
                <div className="col-md-12 col-lg-9 listing-list-car-wrap">
                  <form action="/" className="tf-my-listing-search">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="showing">
                          Showing 1–12 of <span className="text-red">54</span>{" "}
                          results
                        </p>
                      </div>
                      <div className="col-md-6 toolbar-search-list">
                        <div className="group-select-recently">
                          <select className="nice-select">
                            <option data-value className="option selected">
                              Recently Added
                            </option>
                            <option data-value="new" className="option">
                              New
                            </option>
                            <option
                              data-value="Recently Added"
                              className="option"
                            >
                              Recently Added
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-listing-all">
                      <div className="condition-tab-wrap tf-search-condition-tab">
                        <div className="nav" id="nav-tab" role="tablist">
                          <a
                            className={
                              activeIndex == 1
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(1)}
                          >
                            All <span className="number-list">(100)</span>
                          </a>
                          <a
                            className={
                              activeIndex == 2
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(2)}
                          >
                            New <span className="number-list">(29)</span>
                          </a>
                          <a
                            className={
                              activeIndex == 3
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(3)}
                          >
                            Used <span className="number-list">(29)</span>
                          </a>
                        </div>
                      </div>
                      <div className="toolbar-list">
                        <div className="form-group">
                          <a className="btn-display-listing-grid active">
                            <i className="icon-th-list" />
                          </a>
                        </div>
                        <div className="form-group">
                          <a className="btn-display-listing-list">
                            <i className="icon-line-height" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="tab-content" id="nav-listing-car">
                    <div
                      className={
                        activeIndex == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="divider-header ">Premium Ads</div>
                      <div className="car-list-item ">
                        <AdCard premium={true} />
                        <AdCard premium={true} />
                        <AdCard premium={true} />
                        <AdCard premium={true} />
                      </div>
                      <div className="ad-banner">
                        <img src="/assets/images/ads/ad-banner.jpg" />
                      </div>
                      <div className="car-list-item ">
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                      </div>
                      <div className="tf-pagination">
                        <a className="prev page-numbers" href="#">
                          <i className="icon-3" />
                        </a>
                        <a className="page-numbers" href="#">
                          1
                        </a>
                        <a className="page-numbers active" href="#">
                          2
                        </a>
                        <a className="page-numbers" href="#">
                          3
                        </a>
                        <a className="page-numbers" href="#">
                          ...
                        </a>
                        <a className="next page-numbers" href="#">
                          <i className="icon--1" />
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="listing-list-car-grid ">
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#" />
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car16.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car23.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car8.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car17.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car9.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car18.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car16.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car23.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car8.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car17.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car9.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car18.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <div className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </div>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <i className="icon-heart-1-1" />
                                  <span>Favorite</span>
                                </li>
                                <li>
                                  <i className="icon-shuffle-2-11" />
                                  <span>Compare</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-pagination">
                        <a className="prev page-numbers" href="#">
                          <i className="icon-3" />
                        </a>
                        <a className="page-numbers" href="#">
                          1
                        </a>
                        <a className="page-numbers active" href="#">
                          2
                        </a>
                        <a className="page-numbers" href="#">
                          3
                        </a>
                        <a className="page-numbers" href="#">
                          ...
                        </a>
                        <a className="next page-numbers" href="#">
                          <i className="icon--1" />
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 3
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="listing-list-car-grid ">
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#" />
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car16.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car23.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car8.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car17.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car9.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car18.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-grid-item">
                          <div className="listing-item-image">
                            <div className="hover-listing-image">
                              <div className="wrap-hover-listing">
                                <div
                                  className="listing-item active"
                                  title="Lexus LC Hybrid 2024"
                                >
                                  <div className="images">
                                    <img
                                      src="./assets/images/car-list/car21.jpg"
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
                            <a href="#" className="icon-favorite">
                              <i className="icon-heart-1-1" />
                            </a>
                            <span className="feature">Featured</span>
                          </div>
                          <div className="listing-item-content">
                            <div className="listing-top-content">
                              <h6 className="title">
                                <a href="#">Mercedez benz - c class</a>
                              </h6>
                              <div className="review-wrap">
                                <div className="rating">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                </div>
                                <span className="review">( 2 Reviews )</span>
                              </div>
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
                              <ul className="list-controller">
                                <li>
                                  <a href="#">
                                    <i className="icon-heart-1-1" />
                                    <span>Favorite</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-shuffle-2-11" />
                                    <span>Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bottom-price-wrap">
                              <div className="price-wrap">
                                <p className="price">$489</p>
                                <p className="price-sale">$399</p>
                              </div>
                              <div className="btn-read-more">
                                <Link
                                  className="more-link"
                                  href="/listing-details"
                                >
                                  <span>View details</span>
                                  <i className="icon-arrow-right2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-pagination">
                        <a className="prev page-numbers" href="#">
                          <i className="icon-3" />
                        </a>
                        <a className="page-numbers" href="#">
                          1
                        </a>
                        <a className="page-numbers active" href="#">
                          2
                        </a>
                        <a className="page-numbers" href="#">
                          3
                        </a>
                        <a className="page-numbers" href="#">
                          ...
                        </a>
                        <a className="next page-numbers" href="#">
                          <i className="icon--1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
