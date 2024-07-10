"use client";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import React from "react";
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
const page = () => {

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="favorite-page">
          <div className="page-banner">
          </div>
          <div>
            <div className="themesflat-container">
            <div className="divider-header">Favorite Ads</div>
              <div className="car-list-item ">
                <AdCard path={"/listing-details"} data={data} />
                <AdCard path={"/listing-details"} data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
