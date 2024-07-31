"use client";
import { Suspense, lazy } from "react";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import AdCardUser from "@/components/layout/AdCardUser";

const page = () => {
  const perPageCount = 15;
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalAdCount, setTotalAdCount] = useState(0);
  const [values, setValues] = useState([]);
  const [data, setData] = useState([]);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_LINK}/Vehicle/GetAllAdsByUser?CurrentPage=${currentPage}&PageSize=${perPageCount}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPageCount(data?.pageResponse?.totalPages || 1);
      setTotalAdCount(data?.pageResponse?.totalCount);
      setValues(data?.data?.adsList?.$values || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });

    fetchData();
  }, [currentPage]);

  return (
    <Layout>
      <div className="widget-car-service" style={{ marginTop: "40px" }}>
        <div className="tab-content" id="pills-tabContent">
          <div className={"tab-pane fade show active"}>
            <div className="themesflat-container">
              <div className="divider-header">Your Ads</div>
              <Suspense fallback={<p>Loading feed...</p>}>
                <div className="car-list-item">
                  {values.map((val) => {
                    return <AdCardUser key={val.id} data={val} />;
                  })}
                </div>
              </Suspense>
            </div>
          </div>
          <Stack spacing={2} alignItems="center" mt={2}>
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
          <div className="ad-banner">
            <img src="/assets/images/ads/ad-banner.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
