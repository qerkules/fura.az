'use client'
import Link from 'next/link'
import { useState } from "react"

export default function CarListV2({ h5 }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className={`${h5 ? "widget-car-list-v2-h5" : "widget-car-list-v2"} `}>
                <div className="themesflat-container">
                    <div className="header-tab mb-46">
                        <div className="heading-section">
                            {!h5 && <span className="sub-title mb-10 wow fadeInUp">Trusted Car Delaer Service</span>}
                            <h2 className={`${h5 ? "title-section-main" : "title"} wow fadeInUp`}>{`${!h5 ? "Popular Makes by" : "Explore All Cars"}`}</h2>
                        </div>
                        <ul className="nav nav-pills tab-car-service-v2 justify-content-end" id="pills-tab-service-v2" role="tablist">
                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}> Cadilliac</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Audi</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Bmw</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(4)}>
                                <button className={activeIndex == 4 ? "nav-link active" : "nav-link"}>Mercedez</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(5)}>
                                <button className={activeIndex == 5 ? "nav-link active" : "nav-link"}>Haundai </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent-v2">
                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                            {/* Widget Car Service */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/1.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/2.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widget Car Service */}
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                            {/* Widget Car Service */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/1.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/2.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widget Car Service */}
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                            {/* Widget Car Service */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/1.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/2.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widget Car Service */}
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"}>
                            {/* Widget Car Service */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/1.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/2.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widget Car Service */}
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"}>
                            {/* Widget Car Service */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/1.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                    <div className="tf-car-service-v2">
                                        <Link href="/listing-details" className="image">
                                            <div className="stm-badge-top">
                                                <div className="feature-group">
                                                    <span className="featured">Featured</span>
                                                    <span className="year">2023</span>
                                                </div>
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/images/cart-service/2.jpg" className="img-responsive" alt="Image Car Service" />
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title">Mini Cooper 3 Similar</span>
                                            <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                            <div className="bottom-btn-wrap">
                                                <div className="price-group">
                                                    <span className="price-sale">$3958</span>
                                                    <span className="price">$7894</span>
                                                </div>
                                                <div className="btn-group">
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-heart-1-1" />
                                                    </Link>
                                                    <Link href="/#" className="icon-service">
                                                        <i className="icon-shuffle-2-11" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widget Car Service */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
