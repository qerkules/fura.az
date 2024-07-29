"use client";
import { Suspense, lazy } from "react";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
const AdCardForklift = lazy(() =>
  import("@/components/layout/AdCard")
);
const page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_API_LINK
        }/Ad/GetAllAdsByUser?CurrentPage=${1}&PageSize=${10}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response?.data?.adsList?.$values);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="widget-car-service" style={{ marginTop: "40px" }}>
        <div className="tab-content" id="pills-tabContent">
          <div className={"tab-pane fade show active"}>
            <div className="themesflat-container">
              <div className="divider-header">Your Ads</div>
              <Suspense fallback={<p>Loading feed...</p>}>
                <div className="car-list-item">
                  {data.map((val) => {
                    return <AdCardForklift key={val.id} data={val} />;
                  })}
                </div>
              </Suspense>
              <div className="ad-banner">
                <img src="/assets/images/ads/ad-banner.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
