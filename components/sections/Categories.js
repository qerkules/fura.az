import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Categories = ({ currentIndex }) => {
  const splideRef = useRef(null);
  const categories = [
    { path: "trailer", index: 0, name: "Trailer", image: "n3" },
    { path: "truck", index: 1, name: "Truck", image: "n1" },
    { path: "semi-truck", index: 2, name: "Semi Trailer Truck", image: "n2" },
    { path: "truck-under", index: 3, name: "Transporter Truck", image: "n1" },
    { path: "av", index: 4, image: "n5", name: "Agriculture Machineary" },
    { path: "bus", index: 5, image: "n6", name: "Bus" },
    { path: "co-ma", index: 6, image: "n4", name: "Construction Machineary" },
    { path: "forklift", index: 7, image: "n7", name: "Forklift" },
    { path: "sparepart", index: 8, image: "n8", name: "Spare part" },
    { path: "services", index: 9, image: "n2", name: "Logistic Service" },
  ];

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(currentIndex);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="cat-container desktop-hider">
        <Splide
          options={{
            perPage: 1,
            drag: "free",
            gap: "0px",
            pagination: true,
            arrows: false,
          }}
          ref={splideRef}
        >
          {categories.map((val) => (
            <SplideSlide>
              <a href={`/list/${val.path}`}>
                <button
                  className={`index-slider-items ${
                    currentIndex === val.index ? "active" : ""
                  }`}
                >
                  <label>{val.name}</label>
                  <img
                    src={`/assets/images/categories/${val.image}.png`}
                    alt={val.name}
                  />
                </button>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="themesflat-container">
        <div className="cat-container mobile-hider ">
          {categories.map((val) => (
            <a href={`/list-${val.path}`}>
              <button
                className={`index-slider-items ${
                  currentIndex === val.index ? "active" : ""
                }`}
              >
                <label>{val.name}</label>
                <img
                  src={`/assets/images/categories/${val.image}.png`}
                  alt={val.image}
                />
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
