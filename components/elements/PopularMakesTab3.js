"use client";
import { useEffect, useState } from "react";
import AdCard from "../layout/AdCard";
import AdCardSparepart from "../layout/AdCardSparepart";
import AdCardTrailer from "../layout/AdCardTrailer";
import Categories from "../sections/Categories";
import { getAllAds } from "../tools/GetAds";
import { GetPath } from "../tools/GetPath";

export default function PopularMakesTab3() {
  const path = GetPath().last;
  const [activeIndex, setActiveIndex] = useState(1);
  const [values, setValues] = useState([]);
  const [valuesSp, setValuesSp] = useState([]);
  const [valuesSt, setValuesSt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAds(1, 20, path);
        const dataSt = await getAllAds(1, 8, "trailer");
        const dataSp = await getAllAds(1, 8, "sparepart");

        setValues(data?.ads || []);
        setValuesSt(dataSt?.semiTrailersList || []);
        setValuesSp(dataSp?.sparePartsList || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

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
            {/* <div className="full-background">
              <div className="themesflat-container">
                <div className="divider-header ">Premium Ads</div>
                <div className="car-list-item ">
                  <AdCardSparepart premium={true} />
                  <AdCardTrailer premium={true} />
                </div>
              </div>
            </div> */}
            <div className="themesflat-container">
              <div className="ad-banner">
                <img src="/assets/images/ads/ad-banner.jpg" />
              </div>
              <div className="divider-header">Todays Ads Exclusive</div>
              <div className="car-list-item">
                {values &&
                  values.map((val) => {
                    if (val.productTypeName !== "Semi-Trailer") {
                      return (
                        <AdCard
                          key={val.id}
                          path={`${val.productTypeName}|${val.id}`}
                          data={val}
                        />
                      );
                    }
                  })}
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
                  {valuesSt.length > 0 &&
                    valuesSt.map((val) => {
                      return (
                        <AdCardTrailer
                          path={`Semi-Trailer|${val.id}`}
                          key={val.id}
                          data={val}
                        />
                      );
                    })}
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
                {valuesSp.length > 0 &&
                  valuesSp.map((val) => {
                    return <AdCardSparepart key={val.id} data={val} />;
                  })}
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
