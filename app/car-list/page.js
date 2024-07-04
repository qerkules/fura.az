'use client'
import RangeSlider from "@/components/elements/RangeSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function CarList() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isToggled, setToggled] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setToggled(false)
            } else {
                setToggled(true)
            }
        }

        // Call the function once to set the initial state
        handleResize()

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const handleToggle = () => setToggled(!isToggled)

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="widget-banner-car-listing banner-car-listing-list">
                        <div className="themesflat-container full">
                            <div className="banner-car-listing">
                                <span className="sub-title">Save up to 15%</span>
                                <h1 className="title text-white">Autohix <span className="text-red">Rental</span> Car</h1>
                            </div>
                        </div>
                    </div>
                    {/* car-listing-list */}
                    <div className="widget-car-listing-list">
                        <div className="themesflat-container">
                            <div className="row car-listing-list">
                                <div className="col-md-12 col-lg-3">
                                    <div className="search-filter-listing-car">
                                        <div className="filter-header-list">
                                            <h6 className="title-filter">Search by Filter</h6>
                                            <div className="btn-filter">
                                                <i className="icon-Grid-view" onClick={handleToggle} />
                                            </div>
                                        </div>
                                        <form id="filter-list-car-side-bar" className="list-filter" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                            <div className="form-group">
                                                <div className="input-search-list">
                                                    <input type="search" className="form-control" placeholder="Search here..." />
                                                    <span className="input-group-text " id="search-addon">
                                                        <i className="icon-Vector-1" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="widget widget-price ">
                                                    <div className="caption flex-two">
                                                        <p className="price-range">Price</p>
                                                    </div>
                                                    <RangeSlider />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Used</option>
                                                        <option data-value="New" className="option">New</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">SUV</option>
                                                        <option data-value="Crossover" className="option">Crossover</option>
                                                        <option data-value="Compact" className="option">Compact</option>
                                                        <option data-value="Convertible" className="option">Convertible</option>
                                                        <option data-value="Hatchback" className="option">Hatchback</option>
                                                        <option data-value="Sedan" className="option">Sedan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">BMV</option>
                                                        <option data-value="Acura" className="option">Acura</option>
                                                        <option data-value="Audi" className="option">Audi</option>
                                                        <option data-value="Bentley" className="option">Bentley</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">X5</option>
                                                        <option data-value="3 Series" className="option">3 Series</option>
                                                        <option data-value="718 Boxster T" className="option">718 Boxster T</option>
                                                        <option data-value="718 Cayman" className="option">718 Cayman</option>
                                                        <option data-value="911 Carrera 4" className="option">911 Carrera 4</option>
                                                        <option data-value="A4" className="option">A4</option>
                                                        <option data-value="Bentayga" className="option">Bentayga</option>
                                                        <option data-value="Bentayga Azure" className="option">Bentayga Azure</option>
                                                        <option data-value="Bentayga Technology" className="option">Bentayga
                                                            Technology</option>
                                                        <option data-value="C Class" className="option">C Class</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Petrol</option>
                                                        <option data-value="Diesel" className="option">Diesel</option>
                                                        <option data-value="Electric" className="option">Electric</option>
                                                        <option data-value="Gasoline" className="option">Gasoline</option>
                                                        <option data-value="Hybrid" className="option">Hybrid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Manual Transmission</option>
                                                        <option data-value="Auto" className="option">Auto</option>
                                                        <option data-value="CVT" className="option">CVT</option>
                                                        <option data-value="DCT" className="option">DCT</option>
                                                        <option data-value="MT" className="option">MT</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group-wrap">
                                                <div className="form-group">
                                                    <div className="group-select">

                                                        <select className="nice-select">
                                                            <option data-value className="option selected">2024</option>
                                                            <option data-value={2023} className="option">2023</option>
                                                            <option data-value={2022} className="option">2022</option>
                                                            <option data-value={2021} className="option">2021</option>
                                                            <option data-value={2020} className="option">2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="group-select">

                                                        <select className="nice-select">
                                                            <option data-value className="option selected">RWD</option>
                                                            <option data-value="FWD" className="option">FWD</option>
                                                            <option data-value="AWD" className="option">AWD</option>
                                                            <option data-value="4WD" className="option">4WD</option>
                                                            <option data-value="2WD" className="option" />
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="Mileage" className="form-control" name="mileage" defaultValue={2500} />
                                            </div>
                                            <div className="form-group">
                                                <div className="group-select">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Black</option>
                                                        <option data-value="Red" className="option">Red</option>
                                                        <option data-value="White" className="option">White</option>
                                                        <option data-value="Yellow" className="option">Yellow</option>
                                                        <option data-value="Blue" className="option">Blue</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="engine-size" className="form-control" name="mileage" defaultValue="Enter Engine Size" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="location" className="form-control" name="mileage" defaultValue="Enter Location" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-9 listing-list-car-wrap">
                                    <form action="/" className="tf-my-listing-search">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="showing">Showing 1–12 of <span className="text-red">54</span> results</p>
                                            </div>
                                            <div className="col-md-6 toolbar-search-list">
                                                <div className="group-select-recently">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Recently Added</option>
                                                        <option data-value="new" className="option">New</option>
                                                        <option data-value="Recently Added" className="option">Recently Added</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-listing-all">
                                            <div className="condition-tab-wrap tf-search-condition-tab">
                                                <div className="nav" id="nav-tab" role="tablist">
                                                    <a className={activeIndex == 1 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(1)}>
                                                        All <span className="number-list">(100)</span>
                                                    </a>
                                                    <a className={activeIndex == 2 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(2)}>
                                                        New <span className="number-list">(29)</span>
                                                    </a>
                                                    <a className={activeIndex == 3 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(3)}>
                                                        Used <span className="number-list">(29)</span>
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
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="listing-list-car-grid ">
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#" /><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car16.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car23.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car17.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car18.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-pagination">
                                                <a className="prev page-numbers" href="#">
                                                    <i className="icon-3" />
                                                </a>
                                                <a className="page-numbers" href="#">1</a>
                                                <a className="page-numbers active" href="#">2</a>
                                                <a className="page-numbers" href="#">3</a>
                                                <a className="page-numbers" href="#">...</a>
                                                <a className="next page-numbers" href="#">
                                                    <i className="icon--1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="listing-list-car-grid ">
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#" /><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car16.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car23.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car17.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car18.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car16.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car23.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car17.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car18.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </div>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <i className="icon-heart-1-1" />
                                                                    <span>Favorite</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-shuffle-2-11" />
                                                                    <span>Compare</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-pagination">
                                                <a className="prev page-numbers" href="#">
                                                    <i className="icon-3" />
                                                </a>
                                                <a className="page-numbers" href="#">1</a>
                                                <a className="page-numbers active" href="#">2</a>
                                                <a className="page-numbers" href="#">3</a>
                                                <a className="page-numbers" href="#">...</a>
                                                <a className="next page-numbers" href="#">
                                                    <i className="icon--1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="listing-list-car-grid ">
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#" /><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car16.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car23.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car17.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car18.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car21.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    <div className="bl-item" />
                                                                    <div className="bl-item" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            <i className="icon-heart-1-1" />
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Mercedez benz - c class</a></h6>
                                                            <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div>
                                                            <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div>
                                                            <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tf-pagination">
                                                <a className="prev page-numbers" href="#">
                                                    <i className="icon-3" />
                                                </a>
                                                <a className="page-numbers" href="#">1</a>
                                                <a className="page-numbers active" href="#">2</a>
                                                <a className="page-numbers" href="#">3</a>
                                                <a className="page-numbers" href="#">...</a>
                                                <a className="next page-numbers" href="#">
                                                    <i className="icon--1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout >
        </>
    )
}