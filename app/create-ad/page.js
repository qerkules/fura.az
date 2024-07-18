"use client";
import React from "react";
import Categories from "@/components/sections/Categories";
import Layout from "@/components/layout/Layout";

const page = () => {
  return (
    <Layout>
      <div className="create-ad-categories">
        <div className="create-ad-title">Select category:</div>
        <div className="themesflat-container">
          <div className="cat-container mobile-hider ">
            <a href="/create-trailer">
              <button className={`index-slider-items`} id="semi-trailer">
                <label htmlFor="semi-trailer">Semi-trailer</label>
                <img src="/assets/images/categories/n3.png" alt="" />
              </button>
            </a>
            <a href="/truck-create">
              <button className="index-slider-items" id="truck75">
                <label htmlFor="truck75">Truck</label>
                <img src="/assets/images/categories/n1.png" alt="" />
              </button>
            </a>
            <a href="/create-semi-truck">
              <button className="index-slider-items" id="truck">
                <label htmlFor="truck">Semi-trailer truck</label>
                <img src="/assets/images/categories/n2.png" alt="" />
              </button>
            </a>
            <a href="/create-co-ma">
              <button className="index-slider-items" id="cm">
                <label htmlFor="cm">Construction machinery</label>
                <img src="/assets/images/categories/n4.png" alt="" />
              </button>
            </a>
            <a href="/create-av">
              <button className="index-slider-items" id="av">
                <label htmlFor="av">Agricultural vehicle</label>
                <img src="/assets/images/categories/n5.png" alt="" />
              </button>
            </a>
            <a href="/create-bus">
              <button className="index-slider-items" id="bus">
                <label htmlFor="bus">Bus</label>
                <img src="/assets/images/categories/n6.png" alt="" />
              </button>
            </a>
            <a href="/create-forklift">
              <button className="index-slider-items" id="forklift">
                <label htmlFor="forklift">Forklift</label>
                <img src="/assets/images/categories/n7.png" alt="" />
              </button>
            </a>
            <a href="/create-sp">
              <button className="index-slider-items" id="sp">
                <label htmlFor="sp">Spare parts</label>
                <img src="/assets/images/categories/n8.png" alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
