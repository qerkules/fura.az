"use client";
import Layout from "@/components/layout/Layout";
import { GetFeatures } from "@/components/tools/GetFeatures";
import GetOverview from "@/components/tools/GetOverview";
import GetProductTypes from "@/components/tools/GetProductTypes";
import { GetCurrency } from "@/components/tools/GetValues";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [adPath, setAdPath] = useState();
  const [pathForSecond, setPathForSecond] = useState("/");
  const languageKey = "en";

  const [overview, setOverview] = useState([]);
  const [features, setFeatures] = useState([]);
  const [data1, setData1] = useState({});
  const [showFeature, setShowFeature] = useState([]);
  const [data2, setData2] = useState({});
  const [showFeature2, setShowFeature2] = useState([]);
  const [isReady, setIsReady] = useState(false); // For controlling render

  const currency = GetCurrency(data1.currency);
  const currency2 = GetCurrency(data2.currency);

  const handlePathForSecond = () => {
    router.push(pathForSecond);
  };

  let compareValues = hasCookie("compare") && JSON.parse(getCookie("compare"));
  useEffect(()=>{


  if (compareValues.length === 1) {
    let category = compareValues[0].category;
    let path = "/";
    if (category === "Agricultural Vehicle" || category === "av")
      path = "/list/av";
    if (category === "Bus" || category === "bus") path = "/list/bus";
    if (category === "Construction Machinery" || category === "co-ma")
      path = "/list/co-ma";
    if (category === "Forklift" || category === "forklift")
      path = "/list/forklift";
    if (category === "Semi-Trailer Truck" || category === "semi-truck")
      path = "/list/semi-truck";
    if (category === "Truck Over 7.5t" || category === "truck")
      path = "/list/truck";
    if (category === "Truck Up 7.5t" || category === "transporter-truck")
      path = "/list/transporter-truck";
    if (category === "Semi-Trailer" || category === "trailer")
      path = "/list/trailer";

    setPathForSecond(path);
  }
},[])

  useEffect(() => {
    if (compareValues.length > 0) {
      const categoryCompare = compareValues[0]?.category;
      const productTypes = GetProductTypes(categoryCompare);
      const overviewValues = GetOverview(categoryCompare);
      const featuresValues = GetFeatures(categoryCompare);

      setOverview(overviewValues);
      setFeatures(featuresValues);

      const fetchRequest = async () => {
        let adurl = `${process.env.NEXT_PUBLIC_API_LINK}/${productTypes}/GetByAdId?adId=${compareValues[0].id}&LanguageKey=${languageKey}`;
        const response = await axios.get(adurl);
        setData1(response.data);
      };

      const fetchRequestSecond = async () => {
        if (compareValues.length === 2) {
          let adurl2 = `${process.env.NEXT_PUBLIC_API_LINK}/${productTypes}/GetByAdId?adId=${compareValues[1].id}&LanguageKey=${languageKey}`;
          const response2 = await axios.get(adurl2);
          setData2(response2.data);
        }
      };

      fetchRequest();
      if (compareValues.length === 2) fetchRequestSecond();
    }
  }, []);

  useEffect(() => {
    if (features.length > 0) {
      if (Object.keys(data1).length > 0) {
        const setFeature = features
          .map((val) => {
            if (data1[val.obj] !== undefined && data1[val.obj] === true) {
              return { text: val.value, value: data1[val.obj] };
            }
          })
          .filter(Boolean);
        setShowFeature(setFeature);
      }
      if (compareValues.length === 2 && Object.keys(data2).length > 0) {
        const setFeature = features
          .map((val) => {
            if (data2[val.obj] !== undefined && data2[val.obj] === true) {
              return { text: val.value, value: data2[val.obj] };
            }
          })
          .filter(Boolean);
        setShowFeature2(setFeature);
      }
    }
    setIsReady(true);
  }, [data1, data2, features]);

  if (!isReady) return null;

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="themesflat-container compare-page">
        {compareValues.length === 2 ? (
          <>
            <div className="comparison-container">
              <div className="comparison-li "></div>
              <div className="comparison-li">
                <img
                  className="comparison-image"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${
                    data1?.images && data1?.images[0].filePath
                  }`}
                  alt="Comparison Image 1"
                />
              </div>
              <div className="comparison-li">
                <img
                  className="comparison-image"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${
                    data2?.images && data2?.images[0].filePath
                  }`}
                  alt="Comparison Image 2"
                />
              </div>
            </div>
            <div className="comparison-container">
              <div className="comparison-li ">Price</div>
              <div className="comparison-li">
                {currency} &nbsp;{data1.price}
              </div>
              <div className="comparison-li">
                {currency2} &nbsp;{data2.price}
              </div>
            </div>
            <div className="comparison-container">
              <div className="comparison-li ">Category</div>
              <div className="comparison-li">{data1.categoryName} Kotan</div>
              <div className="comparison-li">{data2.categoryName} Kotan</div>
            </div>
            {overview.map((val) => (
              <div className="comparison-container" key={val.text}>
                <div className="comparison-li">{val.text}</div>
                <div className="comparison-li">
                  {data1[val.obj] ? data1[val.obj] : "-"}
                </div>
                <div className="comparison-li">
                  {data2[val.obj] ? data2[val.obj] : "-"}
                </div>
              </div>
            ))}
            <div className="comparison-container">
              <div className="comparison-features-title divider-right">
                Features
              </div>
              <div className="comparison-features-section">
                {showFeature.length > 0
                  ? showFeature.map((val, index) => (
                      <span className="comparison-li-feature" key={index}>
                        {val.text}
                      </span>
                    ))
                  : "-"}
              </div>
              <div className="comparison-features-section">
                {showFeature2.length > 0
                  ? showFeature2.map((val, index) => (
                      <span className="comparison-li-feature" key={index}>
                        {val.text}
                      </span>
                    ))
                  : "-"}
              </div>
            </div>
          </>
        ) : compareValues.length === 1 ? (
          <>
            <div className="comparison-container-two">
              <div>
                <div className="comparison-container-multiple">
                  <div className="comparison-li "></div>
                  <div className="comparison-li">
                    <img
                      className="comparison-image"
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${
                        data1?.images && data1?.images[0].filePath
                      }`}
                      alt="Comparison Image Single"
                    />
                  </div>
                </div>
                <div className="comparison-container-multiple">
                  <div className="comparison-li ">Price</div>
                  <div className="comparison-li">
                    {currency} &nbsp;{data1.price}
                  </div>
                </div>
                <div className="comparison-container-multiple">
                  <div className="comparison-li ">Category</div>
                  <div className="comparison-li ">Category</div>
                </div>
                {overview.map((val) => (
                  <div className="comparison-container-multiple" key={val.text}>
                    <div className="comparison-li">{val.text}</div>
                    <div className="comparison-li">
                      {data1[val.obj] ? data1[val.obj] : "-"}
                    </div>
                  </div>
                ))}
                <div className="comparison-container-multiple">
                  <div className="comparison-features-title divider-right">
                    Features
                  </div>
                  <div className="comparison-features-section divider-right">
                    {showFeature.length > 0
                      ? showFeature.map((val, index) => (
                          <span className="comparison-li-feature" key={index}>
                            {val.text}
                          </span>
                        ))
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="comparison-ad-new">
                <a
                  className="comparison-ad-new-box"
                  onClick={handlePathForSecond}
                >
                  <AddIcon />
                  <span>Ad To Compare</span>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>Please Select two Ads to Compare</>
        )}
      </div>
    </Layout>
  );
};

export default Page;
