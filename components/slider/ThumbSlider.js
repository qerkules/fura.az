"use client";
import React, { useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const ThumbSlider = () => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      const mainSplide = mainRef.current.splide;
      const thumbsSplide = thumbsRef.current.splide;

      mainSplide.sync(thumbsSplide);
    }
  }, []);

  return (
    <div>
      <Splide
        options={{
          type: 'fade',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        }}
        ref={mainRef}
        className='main-slider'
      >
        <SplideSlide className='main-slider-image'>
          <img src="/assets/images/car-list/car1.webp" alt="Image 1" />
        </SplideSlide>
        <SplideSlide className='main-slider-image'>
          <img src="/assets/images/car-list/car11.webp" alt="Image 2" />
        </SplideSlide>
        <SplideSlide className='main-slider-image'>
          <img src="/assets/images/car-list/car12.webp" alt="Image 3" />
        </SplideSlide>
        <SplideSlide className='main-slider-image'>
          <img src="/assets/images/car-list/car12.webp" alt="Image 3" />
        </SplideSlide>
        <SplideSlide className='main-slider-image'>
          <img src="/assets/images/car-list/car12.webp" alt="Image 3" />
        </SplideSlide>
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
        <SplideSlide>
          <img src="/assets/images/car-list/car1.webp" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/car-list/car11.webp" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/car-list/car12.webp" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/car-list/car12.webp" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/car-list/car12.webp" alt="Thumbnail 3" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ThumbSlider;
