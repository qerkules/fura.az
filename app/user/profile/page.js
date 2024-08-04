"use client";
import Layout from "@/components/layout/Layout";
import React, { Suspense, useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import AdCardUser from "@/components/layout/AdCardUser";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalAdCount, setTotalAdCount] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API_LINK}/Vehicle/GetAllAdsByUser?CurrentPage=${currentPage}&PageSize=15`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPageCount(data?.pageResponse?.totalPages || 1);
        setTotalAdCount(data?.pageResponse?.totalCount);
        setValues(data?.data?.ads || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <Layout>
      <div className="themesflat-container profile-container">
        <div className="myprofile-title"> My Ads</div>

        {/* <div className="balance-container">
          <div>Your Balance 15.00 $</div>
          <div>Top up Balance</div>
        </div> */}
        <div className="my-ads-container">
          <div className="my-ads-category active">Vehicle Ads</div>
          <div className="my-ads-category">Semi-Trailer Ads</div>
          <div className="my-ads-category">Sparepart Ads</div>
          <div className="my-ads-category">Services Ads</div>
        </div>
        <div className="widget-car-service" style={{ marginTop: "40px" }}>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active">
              <div className="car-list-item">
                {values.length > 0 ? (
                  values.map((val) => {
                    return <AdCardUser key={val.id} data={val} />;
                  })
                ) : (
                  <div>Create Ad</div>
                )}
              </div>
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
          <div className="mt-15 themesflat-container">
            <div className="ad-banner">
              <img src="/assets/images/ads/ad-banner.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
