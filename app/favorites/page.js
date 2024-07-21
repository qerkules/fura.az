"use client";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import React from "react";
import { sttData } from "@/components/data/data";

const page = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="favorite-page">
          <div className="page-banner"></div>
          <div>
            <div className="themesflat-container">
              <div className="divider-header">Favorite Ads</div>
              <div className="car-list-item ">
                <AdCard path={"/listing-details"} data={sttData[0]} />
                <AdCard path={"/listing-details"} data={sttData[0]} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
