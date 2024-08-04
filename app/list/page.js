"use client";
import { useEffect, useState } from "react";
import { getAllAds } from "@/components/tools/GetAds";
import { useRouter } from "next/navigation";
import { Pagination, Stack } from "@mui/material";
import Categories from "@/components/sections/Categories";
import AdCard from "@/components/layout/AdCard";
import { GetPath } from "@/components/tools/GetPath";
import Layout from "@/components/layout/Layout";

export default function page() {
  const router = useRouter();
  const path = GetPath().last;
  const [activeIndex, setActiveIndex] = useState(1);
  const [values, setValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalAdCount, setTotalAdCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAds(currentPage, 24, path);
        setPageCount(data?.pageResponse?.totalPages || 1);
        setTotalAdCount(data?.pageResponse.totalCount);
        setValues(data?.ads || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <Layout>
      <div className="widget-car-service">
        <div className="mt-110">
          <Categories currentIndex={false} />
        </div>
        <div className="themesflat-container">
          <div className="ad-banner">
            <img src="/assets/images/ads/ad-banner.jpg" />
          </div>
        </div>
        <div className="themesflat-container">
          <div className="row car-listing-list">
            <div className=" listing-list-car-wrap">
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
                        <option data-value="Recently Added" className="option">
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
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className={"tab-pane fade show active"}>
            {/* <div className="full-background">
              <div className="themesflat-container">
                <div className="divider-header ">Premium Ads</div>
                <div className="car-list-item ">
                  <AdCardSparepart premium={true} />
                  <AdCardTrailer premium={true} />
                </div>
              </div>
            </div> */}
            <div className="themesflat-container">
              <div className="divider-header">Todays Ads Exclusive</div>
              <div className="car-list-item">
                {values &&
                  values.map((val) => {
                    if (val.productTypeName !== "Semi-Trailer") {
                      return (
                        <AdCard
                          key={val.id}
                          path={`${val.productTypeName}|${val.id}`}
                          data={val}
                        />
                      );
                    }
                  })}
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
          <div
            className={
              activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          ></div>
          <div
            className={
              activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
          ></div>
        </div>
      </div>
    </Layout>
  );
}
