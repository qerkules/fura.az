"use client";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import AdCardTrailer from "@/components/layout/AdCardTrailer";
import AdCardSparePart from "@/components/layout/AdCardSparepart";
import useUser from "@/components/hooks/useUser";

const page = () => {
  const [username] = useUser();
  let favorites = [];
  let adPath = "";
  const [data, setData] = useState([]);

  let cookieValues = hasCookie("favorites")
    ? JSON.parse(getCookie("favorites"))
    : [];

  const addToPage = async (i) => {
    favorites.push(i);

    favorites.length > 0 && setData(favorites);
  };

  const getUserFavorites = async () => {
    try {
      axios.get();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (username) {
      // getUserFavorites();
    }
    cookieValues.length > 0 && cookieValues.map((i) => addToPage(i));
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="favorite-page">
          <div className="page-banner"></div>
          <div>
            <div className="themesflat-container">
              <div className="divider-header">Favorite Ads</div>
              <div className="car-list-item ">
                {data.length > 0 &&
                  data.map((val) => {
                    if (adPath === "trailer" || adPath === "Semi-Trailer")
                      return (
                        <AdCardTrailer
                          key={val.id}
                          path={`${val.productTypeName}|${val.id}`}
                          data={val}
                        />
                      );
                    if (adPath === "sparepart" || adPath === "Sparepart")
                      return (
                        <AdCardSparePart
                          key={val.id}
                          path={`${val.productTypeName}|${val.id}`}
                          data={val}
                        />
                      );

                    return (
                      <AdCard
                        key={val.id}
                        path={`${val.productTypeName}|${val.id}`}
                        data={val}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
