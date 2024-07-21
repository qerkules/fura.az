"use client";
import Layout from "@/components/layout/Layout";
import ThumbSlider from "@/components/slider/ThumbSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AdCard from "@/components/layout/AdCard";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  observer: true,
  roundLengths: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};
const description =
  " There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form look even by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised many variations of passages of Lorem Ipsum available, but majority There are many variations of passages of";

const overviewArray = [
  { title: "Year", value: "2020" },
  { title: "Permissible Weight", value: "7.5T" },
  { title: "Distance", value: "200.000 km" },
  { title: "Engine Power", value: "500 hp" },
  { title: "FuelType", value: "Benzin" },
  { title: "Paint", value: "Red" },
  { title: "Retarder", value: "Not Available" },
  { title: "Intrader", value: "Not Available" },
  { title: "Damaged", value: "No Damage" },
  { title: "Gearbox", value: "Manual" },
  { title: "Cylinder Volume", value: "1500cc" },
  { title: "Wheel Formula", value: "4x4" },
  { title: "Driving Cabin", value: "Long Road" },
  { title: "Steering", value: "Left" },
  { title: "Axles", value: "2" },
  { title: "Air Conditioning", value: "Automatic" },
  { title: "Emission Class", value: "Euro 6" },
  { title: "Emission Sticker", value: "1 (None)" },
];
const featuresArray1 = [
  { value: "2020" },
  { value: "Alloy wheels" },
  { value: "Metallic color" },
  { value: "Exterior trim" },
  { value: "ABS" },
];
const featuresArray2 = [
  { value: "ESP" },
  { value: "EBS" },
  { value: "Auxiliary Heating" },
  { value: "Compressor" },
  { value: "Cruise Control" },
];
const featuresArray3 = [
  { value: "Adaptive Cruise Control" },
  { value: "Four Wheel Drive" },
  { value: "Particle Filter" },
  { value: "Navigation System" },
  { value: "Parking heater" },
];

export default function ListingDetails() {
  const data = {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM<",
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="widget-breakcrumb">
            <div className="themesflat-container">
              <div className="breakcrumb">
                <div className="title-breakcrumb">
                  <Link className="home" href="/">
                    Home
                  </Link>
                  <span>Semi Trailer Truck</span>
                </div>
              </div>
            </div>
          </div>
          {/* Breakcrumb */}
          {/* property-detail */}
          <div className="widget-property-detail">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wrap-property-car flex">
                    <div className="box-1">
                      <div className="text-address">
                        <i className="icon-map-1-1" />
                        <p>Baku, Azerbaijan</p>
                      </div>
                      <div className="title-heading">Scania R500</div>
                      <div className="icon-box-info flex">
                        <div className="info flex">
                          <span>Category:</span>
                          <span className="fw-4">Standart Tractor</span>
                        </div>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="icon-boxs flex">
                        <Link href="/#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </Link>
                        <Link href="/#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="gallary-property-details">
                    <ThumbSlider />
                  </div>
                  <div className="post-property">
                    <div className="wrap-car-overview wrap-style">
                      <h4 className="title">Car Overview</h4>
                      <div className="listing-info">
                        <div className="row">
                          {overviewArray.map((data) => (
                            <div className="col-xl-6 col-md-6 item">
                              <div className="inner listing-infor-box">
                                <div className="icon">
                                  <i className="icon-Vector5" />
                                </div>
                                <div className="content-listing-info">
                                  <span className="listing-info-title">
                                    {data.title}
                                  </span>
                                  <p className="listing-info-value">
                                    {data.value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="wrap-description wrap-style">
                      <h4 className="title">Description</h4>
                      <p>{description}</p>
                    </div>
                    <div className="wrap-car-feature wrap-style">
                      <h4 className="title">Features</h4>
                      <div className="tf-listing-info">
                        <div id="tf-features">
                          <div className="features-item">
                            {featuresArray1.map((data, index) => {
                              return (
                                <div className="listing-feature-wrap">
                                  <i
                                    className={` ${
                                      index === 3
                                        ? "icon-Vector-5 disabled-icon"
                                        : "icon-Vector-32"
                                    }`}
                                  />
                                  {data.value}
                                </div>
                              );
                            })}
                          </div>
                          <div className="features-item">
                            {featuresArray2.map((data, index) => {
                              return (
                                <div className="listing-feature-wrap">
                                  <i
                                    className={` ${
                                      index === 3
                                        ? "icon-Vector-5 disabled-icon"
                                        : "icon-Vector-32"
                                    }`}
                                  />
                                  {data.value}
                                </div>
                              );
                            })}
                          </div>
                          <div className="features-item">
                            {featuresArray3.map((data, index) => {
                              return (
                                <div className="listing-feature-wrap">
                                  <i
                                    className={` ${
                                      index === 3
                                        ? "icon-Vector-5 disabled-icon"
                                        : "icon-Vector-32"
                                    }`}
                                  />
                                  {data.value}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="sticky-section">
                    <div className="driver-price-wrap mb-40">
                      <div className="box-2 t-al-right">
                        <div className="flex align-center gp-15">
                          <p className="price-sale">$46,000</p>
                          <p className="converted-price">≈ €40,000</p>
                          <p className=" converted-price">≈ ₼80,000</p>
                        </div>
                        <div className="ad-details">
                          <div>
                            <CalendarMonthIcon /> 07.08.2024
                          </div>
                          <div>
                            <VisibilityIcon /> 2000
                          </div>
                        </div>
                      </div>
                      <div className="author-contact-wrap">
                        <div className="author-contact-avatar">
                          <AccountCircleIcon />
                        </div>
                        <div className="author-contact-info">
                          <h4 className="name"> Admin </h4>
                          {/* <span className="number-phone">
                          <i className=" icon-Group-14" />
                          +1900 67 xxx (show)
                        </span> */}
                        </div>
                      </div>
                      <div className="ad-owner-details">
                        <p>Contact Details:</p>
                        <div className="ad-owner-contact-number">
                          <i className=" icon-Group-14" /> +1900 67 xxx (show)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* property-detail */}
          {/* related-single-listing */}
          <div className="widget-related-single-listing">
            <div className="themesflat-container">
              <div className="related-single-listing swiper">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <AdCard data={data} />
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <AdCard data={data} />
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <AdCard data={data} />
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <AdCard data={data} />
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <AdCard data={data} />
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
