"use client";
import React, { useEffect, useState } from "react";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import Categories from "@/components/sections/Categories";
import SearchFilter from "@/components/sections/SearchFilter";
import { Pagination, Stack } from "@mui/material";
import { getAllAds } from "@/components/tools/GetAds";
import { GetPath } from "@/components/tools/GetPath";

export default function CarList() {
  const path = GetPath().last;
  const perPageCount = 15;
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalAdCount, setTotalAdCount] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAds(currentPage, perPageCount, path);
        setPageCount(data?.pageResponse?.totalPages || 1);
        setTotalAdCount(data?.pageResponse.totalCount);
        setValues(data?.busesList?.$values || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });

    fetchData();
  }, [currentPage]);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="widget-banner-car-listing banner-car-listing-list forklift-bg">
            <div className="themesflat-container full">
              <div className="banner-car-listing">
                <h1 className="title text-white">Bus</h1>
              </div>
            </div>
          </div>

          <div className="widget-car-listing-list">
            <Categories currentIndex={5} />
            <div className="themesflat-container">
              <div className="row car-listing-list">
                <div className="col-md-12 col-lg-3">
                  <SearchFilter />
                </div>
                <div className="col-md-12 col-lg-9 listing-list-car-wrap">
                  <form action="/" className="tf-my-listing-search">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="showing">
                          Total count{" "}
                          <span className="text-red">{totalAdCount}</span>{" "}
                        </p>
                      </div>
                      <div className="col-md-6 toolbar-search-list">
                        <div className="group-select-recently">
                          <select className="nice-select">
                            <option data-value className="option selected">
                              Recently Added
                            </option>
                            <option data-value="new" className="option">
                              New
                            </option>
                            <option
                              data-value="Recently Added"
                              className="option"
                            >
                              Recently Added
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-listing-all">
                      <div className="condition-tab-wrap tf-search-condition-tab">
                        <div className="nav" id="nav-tab" role="tablist">
                          <a
                            className={
                              activeIndex == 1
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(1)}
                          >
                            All <span className="number-list">(100)</span>
                          </a>
                          <a
                            className={
                              activeIndex == 2
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(2)}
                          >
                            Sale <span className="number-list">(29)</span>
                          </a>
                          <a
                            className={
                              activeIndex == 3
                                ? "btn-condition-filter active"
                                : "btn-condition-filter"
                            }
                            onClick={() => handleOnClick(3)}
                          >
                            Rent <span className="number-list">(29)</span>
                          </a>
                        </div>
                      </div>
                      <div className="toolbar-list">
                        <div className="form-group">
                          <a className="btn-display-listing-grid active">
                            <i className="icon-th-list" />
                          </a>
                        </div>
                        <div className="form-group">
                          <a className="btn-display-listing-list">
                            <i className="icon-line-height" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="tab-content" id="nav-listing-car">
                    <div
                      className={
                        activeIndex == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="car-list-item ">
                        {values &&
                          values.map((val) => {
                            return (
                              <AdCard
                                key={val.id}
                                path={"/listing-details"}
                                data={val}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
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
          </div>
        </div>
      </Layout>
    </>
  );
}
