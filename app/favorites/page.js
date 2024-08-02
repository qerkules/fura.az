"use client";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import React, { useEffect } from "react";
import axios from "axios";

const page = () => {
  const favorites = [];
  
  // let cookieValues = hasCookie("favorites")
  //   ? JSON.parse(getCookie("favorites"))
  //   : [];

  // cookieValues.length > 0 && cookieValues.map((i) => addToPage(i));

  // const addToPage = async (id) => {
  //   try {
  //     // axios.get(`${process.env.NEXT_PUBLIC_API_LINK}/`);
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   const fetchdata = async () => {};
  // }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="favorite-page">
          <div className="page-banner"></div>
          <div>
            <div className="themesflat-container">
              <div className="divider-header">Favorite Ads</div>
              <div className="car-list-item ">
                {/* <AdCard path={`${val.productTypeName}|${val.id}`} data={sttData[0]} />
                <AdCard path={`${val.productTypeName}|${val.id}`} data={sttData[0]} /> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
