"use client";
import Layout from "@/components/layout/Layout";
import { GetFeatures } from "@/components/tools/GetFeatures";
import GetOverview from "@/components/tools/GetOverview";
import GetProductTypes from "@/components/tools/GetProductTypes";
import { GetCurrency } from "@/components/tools/GetValues";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [adPath, setAdPath] = useState();
  const [overview, setOverview] = useState([]);
  const [features, setFeatures] = useState([]);

  const [data1, setData1] = useState({});
  const [showFeature, setShowFeature] = useState([]);
  const currency = GetCurrency(data1.currency);

  const [data2, setData2] = useState({});
  const [showFeature2, setShowFeature2] = useState([]);
  const currency2 = GetCurrency(data2.currency);

  useEffect(() => {
    let compareValues =
      hasCookie("compare") && JSON.parse(getCookie("compare"));
    const categoryCompare =
      compareValues.length > 0 && compareValues[0].category;

    const productTypes = GetProductTypes(categoryCompare);
    const overviewValues = GetOverview(categoryCompare);
    const featuresValues = GetFeatures(categoryCompare);

    setOverview(overviewValues);
    setFeatures(featuresValues);

    let adurl = `${process.env.NEXT_PUBLIC_API_LINK}/${productTypes}/GetByAdId?adId=${compareValues[0].id}`;
    let adurl2 = `${process.env.NEXT_PUBLIC_API_LINK}/${productTypes}/GetByAdId?adId=${compareValues[1].id}`;

    const fetchRequest = async () => {
      const response = await axios.get(adurl);
      const response2 = await axios.get(adurl2);
      setData1(response.data);
      setData2(response2.data);
    };

    fetchRequest();
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
      if (Object.keys(data2).length > 0) {
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
  }, [data1, data2, features]);

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="themesflat-container compare-page">
        <div className="comparison-container">
          <div className="comparison-li "></div>
          <div className="comparison-li">
            <img
              className="comparison-image"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${
                data1?.images && data1?.images[0].filePath
              }`}
            />
          </div>
          <div className="comparison-li">
            <img
              className="comparison-image"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${
                data2?.images && data2?.images[0].filePath
              }`}
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
              {data1[val.obj] !== undefined &&
              data1[val.obj] !== null &&
              data1[val.obj] !== "" &&
              data1[val.obj] !== " " &&
              data1[val.obj] !== 0
                ? data1[val.obj]
                : "-"}
            </div>
            <div className="comparison-li">
              {data2[val.obj] !== undefined &&
              data2[val.obj] !== null &&
              data2[val.obj] !== "" &&
              data2[val.obj] !== " " &&
              data2[val.obj] !== 0
                ? data2[val.obj]
                : "-"}
            </div>
          </div>
        ))}

        <div className="comparison-container">
          <div className="comparison-features-title divider-right">
            Features
          </div>
          <div className="comparison-features-section">
            {showFeature.length > 0
              ? showFeature.map((val, index) => {
                  return (
                    <span className="comparison-li-feature" key={index}>
                      {val.text}
                    </span>
                  );
                })
              : "-"}
          </div>
          <div className="comparison-features-section">
            {showFeature2.length > 0
              ? showFeature2.map((val, index) => {
                  return (
                    <span className="comparison-li-feature" key={index}>
                      {val.text}
                    </span>
                  );
                })
              : "-"}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
