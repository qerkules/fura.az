"use client";
import React, { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const ThumbSlider = ({ images }) => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      const mainSplide = mainRef.current.splide;
      const thumbsSplide = thumbsRef.current.splide;

      mainSplide.sync(thumbsSplide);
    }
  }, []);

  const handleFullScreen = () => {
    
  }

  return (
    <div>
      <Splide
        options={{
          type: "fade",
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        }}
        ref={mainRef}
        className="main-slider"
      >
        {images?.map((img) => (
          <SplideSlide key={img.id} className="main-slider-image" onClick={handleFullScreen}>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${img.filePath}`}
              alt={img.fileName}
            />
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        options={{
          fixedWidth: 100,
          fixedHeight: 64,
          isNavigation: true,
          gap: 10,
          pagination: false,
          cover: true,
          breakpoints: {
            600: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
          },
        }}
        ref={thumbsRef}
      >
        {images?.map((img) => (
          <SplideSlide key={img.id} className="main-slider-image">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${img.filePath}`}
              alt={img.fileName}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ThumbSlider;
