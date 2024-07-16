"use client";
import { useEffect, useState } from "react";
import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import Categories from "@/components/sections/Categories";
import SearchFilter from "@/components/sections/SearchFilter";
import { Pagination, Stack } from "@mui/material";
const data = [
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  {
    id: 1,
    saleOrRent: "sale",
    price: "50.000",
    priceCurrency: "$",
    isPremium: true,
    images: [
      "./assets/images/car-list/car1.webp",
      "./assets/images/car-list/car11.webp",
      "./assets/images/car-list/car12.webp",
    ],
    brand: "Scania",
    model: "R500",
    category: "Standart Tractor",
    year: 2020,
    horsePower: "500 hp",
    distance: "200500km",
    createDate: "6/30/2024 3:09:24 PM",
    path: "listing-details"
  },
  
];

export default function CarList() {
  const ITEMS_PER_PAGE = 10;
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const onPageclick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Replace `data` with the actual data fetching logic
      // For example, if using `axios`: const result = await axios.get('/api/data');
      // const data = result.data;
      console.log(data.length / ITEMS_PER_PAGE);
      setPageCount(Math.ceil(data.length / ITEMS_PER_PAGE));
    };

    fetchData();
  }, [data.length]);

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = data.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="widget-banner-car-listing banner-car-listing-list">
            <div className="themesflat-container full">
              <div className="banner-car-listing">
                <h1 className="title text-white">
                  Semi <span className="text-red">Trailer</span> Truck
                </h1>
              </div>
            </div>
          </div>

          {/* car-listing-list */}
          <div className="widget-car-listing-list">
            <Categories currentIndex={true} />
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
                          Showing 1–12 of <span className="text-red">54</span>{" "}
                          results
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
                      <div className="divider-header ">Premium Ads</div>
                      <div className="car-list-item ">
                        <AdCard data={data[0]} />
                        <AdCard data={data[0]} />
                        <AdCard data={data[0]} />
                        <AdCard data={data[0]} />
                        <AdCard data={data[0]} />
                        <AdCard data={data[0]} />
                      </div>
                      <div className="ad-banner">
                        <img src="/assets/images/ads/ad-banner.jpg" />
                      </div>
                      <div className="car-list-item ">
                        {currentPageData.map((val, index) => {
                          return <AdCard key={index} data={val} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Pagination pageCount={pageCount} onPageChange={onPageclick} /> */}
            <Stack spacing={2} alignItems="center" mt={2}>
              <Pagination
                count={pageCount} // Set the total number of pages
                page={currentPage + 1} // MUI Pagination uses 1-based index, so add 1 to `currentPage`
                onChange={(event, page) => setCurrentPage(page - 1)} // Subtract 1 to get 0-based index
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
