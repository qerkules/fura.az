'use client'
import Link from 'next/link'
import { useState } from "react"
import RangeSlider from '../elements/RangeSlider'


export default function SlideFormV2() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="tf-slide-form-v2">
                <div className="slide-form-v2">
                    <div className="slide-form-item">
                        <div className="slide-image">
                            <img src="/assets/images/slide/slide3.jpg" alt="" />
                            <div className="overlay" />
                        </div>
                        <div className="themesflat-container">
                            <div className="slider-wrap">
                                <div className="slide-content">
                                    <span className="sub-title">Trusted Dealer, Rental</span>
                                    <h1>Mercedez benz 2023 new car</h1>
                                    <span className="price">$ 180.99 / <span className="price-sale text-red">$2860</span></span>
                                    {/* Button */}
                                    <div className="btn-main">
                                        <span className="main_button_circle">
                                        </span>
                                        <Link href="/#" className="button_main_inner ">
                                            <span className="button_text_container">
                                                Go to listing
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Button */}
                                </div>
                                <div className="slide-box-form">
                                    <ul className="nav nav-pills form-v4 justify-content-between " id="pills-tab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                                                All Status</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>New Cars</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Used Cars</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content form-v4-content" id="pills-tabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <form method="post" id="search-forms" className="search-form-4">
                                                <div className="inner-group grid">
                                                    <div className="form-group">
                                                        <div className="group-select">

                                                            <select className="nice-select">
                                                                <option data-value className="option selected">Make</option>
                                                                <option data-value="Acura" className="option">Acura</option>
                                                                <option data-value="Audi" className="option">Audi</option>
                                                                <option data-value="Bentley" className="option">Bentley</option>
                                                                <option data-value="BMV" className="option">BMV</option>
                                                                <option data-value="Chevrolet" className="option">Chevrolet</option>
                                                                <option data-value="Ferrari" className="option">Ferrari</option>
                                                                <option data-value="Ford" className="option">Ford</option>
                                                                <option data-value="Lexus" className="option">Lexus</option>
                                                                <option data-value="Maybach" className="option">Maybach</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="group-select">

                                                        <select className="nice-select">
                                                            <option data-value className="option selected">Models</option>
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
                                                    <div className="widget widget-price ">
                                                        <div className="caption flex-two">
                                                            <p className="price-range">Price</p>
                                                        </div>
                                                        <RangeSlider />
                                                    </div>{/* /.widget_price */}
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="button-search-listing">
                                                        <i className="icon-search-1 me-2" />
                                                        2351 Cars
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <form method="post" id="search-forms2" className="search-form-4">
                                                <div className="inner-group grid">
                                                    <div className="form-group">
                                                        <div className="group-select">

                                                            <select className="nice-select">
                                                                <option data-value className="option selected">Make</option>
                                                                <option data-value="Acura" className="option">Acura</option>
                                                                <option data-value="Audi" className="option">Audi</option>
                                                                <option data-value="Bentley" className="option">Bentley</option>
                                                                <option data-value="BMV" className="option">BMV</option>
                                                                <option data-value="Chevrolet" className="option">Chevrolet</option>
                                                                <option data-value="Ferrari" className="option">Ferrari</option>
                                                                <option data-value="Ford" className="option">Ford</option>
                                                                <option data-value="Lexus" className="option">Lexus</option>
                                                                <option data-value="Maybach" className="option">Maybach</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="group-select">

                                                            <select className="nice-select">
                                                                <option data-value className="option selected">Models</option>
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
                                                        <div className="widget widget-price ">
                                                            <div className="caption flex-two">
                                                                <p className="price-range">Price</p>
                                                            </div>
                                                            <RangeSlider />
                                                        </div>{/* /.widget_price */}
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="button-search-listing">
                                                            <i className="icon-search-1 me-2" />
                                                            2351 Cars
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <form method="post" id="search-forms3" className="search-form-4">
                                                <div className="inner-group grid">
                                                    <div className="form-group">
                                                        <div className="group-select">

                                                            <select className="nice-select">
                                                                <option data-value className="option selected">Make</option>
                                                                <option data-value="Acura" className="option">Acura</option>
                                                                <option data-value="Audi" className="option">Audi</option>
                                                                <option data-value="Bentley" className="option">Bentley</option>
                                                                <option data-value="BMV" className="option">BMV</option>
                                                                <option data-value="Chevrolet" className="option">Chevrolet</option>
                                                                <option data-value="Ferrari" className="option">Ferrari</option>
                                                                <option data-value="Ford" className="option">Ford</option>
                                                                <option data-value="Lexus" className="option">Lexus</option>
                                                                <option data-value="Maybach" className="option">Maybach</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="group-select">

                                                            <select className="nice-select">
                                                                <option data-value className="option selected">Models</option>
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
                                                        <div className="widget widget-price ">
                                                            <div className="caption flex-two">
                                                                <p className="price-range">Price</p>
                                                            </div>
                                                            <RangeSlider />
                                                        </div>{/* /.widget_price */}
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="button-search-listing">
                                                            <i className="icon-search-1 me-2" />
                                                            2351 Cars
                                                        </button>
                                                    </div>
                                                </div>
                                            </form >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
