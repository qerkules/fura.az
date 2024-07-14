import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Categories = ({ currentIndex }) => {
  return (
    <>
      <div className="cat-container desktop-hider">
        <Splide
          options={{
            perPage: 2,
            drag: "free",
            gap: "1rem",
            pagination: false,
            arrows: false,
          }}
        >
          <SplideSlide>
            <a href="/car-list">
              <button
                className={`index-slider-items ${
                  currentIndex === true ? "active" : ""
                }`}
                id="semi-trailer"
              >
                <label htmlFor="semi-trailer">Semi-trailer</label>
                <img src="/assets/images/categories/n3.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="truck75">
                <label htmlFor="truck75">Truck</label>
                <img src="/assets/images/categories/n1.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="truck">
                <label htmlFor="truck">Semi-trailer truck</label>
                <img src="/assets/images/categories/n2.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="truck75">
                <label htmlFor="truck75">Truck</label>
                <img src="/assets/images/categories/n1.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="cm">
                <label htmlFor="cm">Construction machinery</label>
                <img src="/assets/images/categories/n4.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="av">
                <label htmlFor="av">Agricultural vehicle</label>
                <img src="/assets/images/categories/n5.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="bus">
                <label htmlFor="bus">Bus</label>
                <img src="/assets/images/categories/n6.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="forklift">
                <label htmlFor="forklift">Forklift</label>
                <img src="/assets/images/categories/n7.png" alt="" />
              </button>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/car-list">
              <button className="index-slider-items" id="sp">
                <label htmlFor="sp">Spare parts</label>
                <img src="/assets/images/categories/n8.png" alt="" />
              </button>
            </a>
          </SplideSlide>
        </Splide>
      </div>
      <div className="themesflat-container">
        <div className="cat-container mobile-hider ">
          <a href="/car-list">
            <button
              className={`index-slider-items ${
                currentIndex === true ? "active" : ""
              }`}
              id="semi-trailer"
            >
              <label htmlFor="semi-trailer">Semi-trailer</label>
              <img src="/assets/images/categories/n3.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="truck75">
              <label htmlFor="truck75">Truck</label>
              <img src="/assets/images/categories/n1.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="truck">
              <label htmlFor="truck">Semi-trailer truck</label>
              <img src="/assets/images/categories/n2.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="cm">
              <label htmlFor="cm">Construction machinery</label>
              <img src="/assets/images/categories/n4.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="av">
              <label htmlFor="av">Agricultural vehicle</label>
              <img src="/assets/images/categories/n5.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="bus">
              <label htmlFor="bus">Bus</label>
              <img src="/assets/images/categories/n6.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="forklift">
              <label htmlFor="forklift">Forklift</label>
              <img src="/assets/images/categories/n7.png" alt="" />
            </button>
          </a>
          <a href="/car-list">
            <button className="index-slider-items" id="sp">
              <label htmlFor="sp">Spare parts</label>
              <img src="/assets/images/categories/n8.png" alt="" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Categories;
