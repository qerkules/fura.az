"use client";
import Layout from "@/components/layout/Layout";
import ThumbSlider from "@/components/slider/ThumbSlider";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AdCard from "@/components/layout/AdCard";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { GetFeatures } from "@/components/tools/GetFeatures";
import GetOverview from "@/components/tools/GetOverview";
import GetProductTypes from "@/components/tools/GetProductTypes";

export default function ListingDetails({ params }) {
  const overview = GetOverview("semi-truck");
  const inputString = params.slug;
  const [product, setProduct] = useState({});
  const [relatedAds, setRelatedAds] = useState([]);
  const [showFeature, setShowFeature] = useState([]);
  const [overviewArray, setOverviewArray] = useState([]);

  const decodedString = decodeURIComponent(inputString);
  const parts = decodedString.split("|");
  const adPath = GetProductTypes(parts[0]);
  const adId = parts[1];

  const features = useMemo(() => GetFeatures("semi-truck"), []);

  const getCurrentField = (data) => {
    if (adPath === "AgriculturalVehicle") return data?.agriculturalList;
    if (adPath === "Bus") return data?.busesList;
    if (adPath === "ConstructionMachineary")
      return data?.constructionMachineryList;
    if (adPath === "Forklift") return data?.forkliftsList;
    if (adPath === "Semi-Trailer Truck") return data?.trucksList;
    if (adPath === "Truck Over 7.5t") return data?.trucksList;
    if (adPath === "Truck Up 7.5t") return data?.trucksUnderList;
    // if (category === "Sparepart") return "Sparepart";
    // if (category === "Semi-Trailer") return "SemiTrailer";
  };

  let url = `${process.env.NEXT_PUBLIC_API_LINK}/${adPath}/GetAll${adPath}Ads?CurrentPage=1&PageSize=8`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API_LINK}/${adPath}/GetByAdId?adId=${adId}`
        );
        setProduct(data?.data || {});

        if (adPath === "AgriculturalVehicle")
          url = `${process.env.NEXT_PUBLIC_API_LINK}/${adPath}/GetAllAgriculturalAds?CurrentPage=1&PageSize=8`;

        const datas = await axios.get(url);
        setRelatedAds(getCurrentField(datas?.data) || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [adPath, adId]);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      const setFeature = features
        .map((val) => {
          if (product[val.obj] !== undefined) {
            return { text: val.value, value: product[val.obj] };
          }
        })
        .filter(Boolean);
      setShowFeature(setFeature);
    }
  }, [product, features]);
  useEffect(() => {
    if (Object.keys(product).length > 0) {
      const setFeature = overview.map((val) => {
        if (
          product[val.obj] !== undefined ||
          product[val.obj] !== "" ||
          product[val.obj] !== " " ||
          product[val.obj] !== 0
        ) {
          return { text: val.text, value: product[val.obj] };
        }
      });
      // Remove undefined values
      setOverviewArray(setFeature);
    }
  }, [product, features]);

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
                  <span>{adPath}</span>
                </div>
              </div>
            </div>
          </div>

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
                      <div className="title-heading">
                        {product.brandName} {product.modelName}{" "}
                      </div>
                      <div className="icon-box-info flex">
                        <div className="info flex">
                          <span>Category:</span>
                          <span className="fw-4">{product.categoryName}</span>
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
                    <ThumbSlider images={product.images} />
                  </div>
                  <div className="post-property">
                    <div className="wrap-car-overview wrap-style">
                      <h4 className="title">Car Overview</h4>
                      <div className="listing-info">
                        <div className="row">
                          {overviewArray.map((data, index) => (
                            <div key={index} className="col-xl-6 col-md-6 item">
                              <div className="inner listing-infor-box">
                                <div className="content-listing-info">
                                  <span className="listing-info-title">
                                    {data.text}
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
                      <p>{product.adDetails}</p>
                    </div>
                    <div className="wrap-car-feature wrap-style">
                      <h4 className="title">Features</h4>
                      <div className="tf-listing-info">
                        <div id="tf-features">
                          {showFeature.map((data, index) => {
                            if (data && data.value)
                              return (
                                <div
                                  key={index}
                                  className="listing-feature-wrap"
                                >
                                  <i className={` ${"icon-Vector-32"}`} />
                                  {data.text}
                                </div>
                              );
                          })}
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
                          <p className="price-sale">$ {product.price}</p>
                        </div>
                        <p className="converted-price mt-15">
                          ≈ €40,000 &nbsp; ≈ ₼80,000
                        </p>
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
                        {/* <p>Contact Details:</p> */}
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
        </div>
        {/* property-detail */}
        {/* related-single-listing */}
        <div className="widget-related-single-listing">
          <div className="themesflat-container">
            <div className="ad-banner">
              <img src="/assets/images/ads/ad-banner.jpg" />
            </div>
            <div className="divider-header">Related Ads</div>
            <div className="car-list-item">
              {relatedAds.length > 0 &&
                relatedAds?.map((ad) => {
                  return <AdCard key={ad.id} data={ad} />;
                })}
              <button>See All Ads</button>
            </div>
            <div className="ad-banner">
              <img src="/assets/images/ads/ad-banner.jpg" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
