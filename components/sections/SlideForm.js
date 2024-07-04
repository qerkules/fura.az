'use client'
import { useState } from "react"
import RangeSlider from "../elements/RangeSlider"

export default function SlideForm() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="tf-slide-form">
                <div className="themesflat-container">
                    <div className="slide-form t-al-center">
                        <span className="wow fadeInUp" data-wow-delay="100ms" data-wow-duration="2000ms">Save up to <span className="text-red">15%</span></span>
                        <h1 className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">Find <span className="text-red">Perfect</span> Car. Let’s Go!</h1>
                        <p className="wow fadeInUp" data-wow-delay="600ms" data-wow-duration="2000ms">Unlimited mileage · No
                            hidden fees · Free cancellation</p>
                    </div>
                    {/* Tab */}
                    <div className="search-form-widget">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>All Cars</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Used
                                    car</button>
                            </li>
                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>New
                                    Cars</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                <form method="post" id="search-forms">
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
                                                    <option data-value="Bentayga Azure" className="option">Bentayga Azure
                                                    </option>
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
                            <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                <form method="post" id="search-forms2">
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
                                                    <option data-value="Bentayga Azure" className="option">Bentayga Azure
                                                    </option>
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
                            <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                <form method="post" id="search-forms3">
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
                                                    <option data-value="Bentayga Azure" className="option">Bentayga Azure
                                                    </option>
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
                                    </div >
                                </form >
                            </div >
                        </div >
                    </div >
                    {/* Tab */}
                </div >
            </div >
        </>
    )
}
