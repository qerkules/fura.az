
'use client'
import ModalOfferPrice from "@/components/elements/ModalOfferPrice"
import ModalTestDriver from "@/components/elements/ModalTestDriver"
import Layout from "@/components/layout/Layout"
import ThumbSlider from "@/components/slider/ThumbSlider"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    roundLengths: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
}
export default function ListingDetails() {
    const [isToggled4, setToggled4] = useState(false)
    const handleToggle4 = () => setToggled4(!isToggled4)
    const [isToggled5, setToggled5] = useState(false)
    const handleToggle5 = () => setToggled5(!isToggled5)
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="widget-breakcrumb">
                        <div className="themesflat-container">
                            <div className="breakcrumb">
                                <div className="title-breakcrumb">
                                    <Link className="home" href="/">Home</Link>
                                    <span>Semi Trailer Truck</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Breakcrumb */}
                    {/* property-detail */}
                    <div className="widget-property-detail">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="wrap-property-car flex">
                                        <div className="box-1">
                                            <div className="icon-box-info flex">
                                                <div className="info flex">
                                                    <span>Category:</span>
                                                    <span className="fw-4">Standart Tractor</span>
                                                </div>
                                                <div className="info flex">
                                                    <span>Make:</span>
                                                    <span className="fw-4">Scania</span>
                                                </div>
                                                <div className="info flex">
                                                    <span>Model:</span>
                                                    <span className="fw-4">R500</span>
                                                </div>
                                              
                                            </div>
                                            <div className="title-heading">Scania R500</div>
                                            <div className="text-address">
                                                <i className="icon-map-1-1" />
                                                <p>Baku, Azerbaijan</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="gallary-property-details">
                                        <ThumbSlider />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="post-property">
                                        <div className="wrap-description wrap-style">
                                            <h4 className="title">Description</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered teration in some form, by injected humour, or randomised words which
                                                don't look even slight believable. If you are going to use a passa There
                                                are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered teration in some form look even
                                                by injected humour, or randomised There are many variations of passages of Lorem
                                                Ipsum available, but majority
                                                have suffered teration in some form, by injected humour, or randomised words
                                                which don't look even slight believable.
                                                If you are going to use a passa There are many variations of passages of Lorem
                                                Ipsum available, but majority
                                                have suffered teration in some form, by injected humour, or randomised many
                                                variations of passages of Lorem Ipsum available, but majority There are many
                                                variations of passages of </p>
                                        </div>
                                        <div className="wrap-car-overview wrap-style">
                                            <h4 className="title">Car Overview</h4>
                                            <div className="listing-info">
                                                <div className="row">
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Vector5" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Condition:</span>
                                                                <p className="listing-info-value">New</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group-1000002834" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Cylinders: </span>
                                                                <p className="listing-info-value">6</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className=" icon-Vector-13" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Stock Number:</span>
                                                                <p className="listing-info-value">N8990</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group5" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Fuel Type:</span>
                                                                <p className="listing-info-value">Petrol</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Vector-13" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">VIN Number:</span>
                                                                <p className="listing-info-value">84HKFI792KJDC</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group-15" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Doors:</span>
                                                                <p className="listing-info-value">4</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Vector-13" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Year:</span>
                                                                <p className="listing-info-value">2023</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Format-color-fill" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Color:</span>
                                                                <p className="listing-info-value">Black</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-dashboard-2" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Mileage: </span>
                                                                <p className="listing-info-value">28,000 miles</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group-22" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Seats:</span>
                                                                <p className="listing-info-value">5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Vector-22" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Transmission :</span>
                                                                <p className="listing-info-value">Automatic</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group-31" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">City MPG:</span>
                                                                <p className="listing-info-value">18</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-engine-1" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Engine Size:</span>
                                                                <p className="listing-info-value">4.8L</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-Group-31" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Highway MPG:</span>
                                                                <p className="listing-info-value">28</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 item">
                                                        <div className="inner listing-infor-box">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel-1" />
                                                            </div>
                                                            <div className="content-listing-info">
                                                                <span className="listing-info-title">Driver type: </span>
                                                                <p className="listing-info-value">2WD</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-car-feature wrap-style">
                                            <h4 className="title">Features</h4>
                                            <div className="tf-listing-info">
                                                <div id="tf-features">
                                                    <div className="features-item">
                                                        <h5 className="features-type-title">Safety</h5>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />A/C:
                                                            Front</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Central
                                                            locking</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Leather
                                                        </div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Sports
                                                            package</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Navigation system</div>
                                                    </div>
                                                    <div className="features-item">
                                                        <h5 className="features-type-title">Exterior</h5>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Front
                                                            fog light</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Rain
                                                            sensing wipe</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Rear
                                                            Spoilers</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Sun roof
                                                        </div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Navigation system</div>
                                                    </div>
                                                    <div className="features-item">
                                                        <h5 className="features-type-title">Interior</h5>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />A/C:
                                                            Front</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Child
                                                            safety locks</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Leather
                                                        </div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Driver
                                                            air bags</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Navigation system</div>
                                                    </div>
                                                    <div className="features-item">
                                                        <h5 className="features-type-title">Convenience</h5>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Power
                                                            steering</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Vanity
                                                            mirror</div>
                                                        <div className="listing-feature-wrap"><i className="icon-Vector-32" />Trunk
                                                            Light</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-car-location wrap-style">
                                            <h4 className="title">Features</h4>
                                            <div className="listing-address">
                                                <svg width={22} height={30} viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 29.1211C7.48438 23.8477 1.33203 16.6992 1.33203 10.5469C1.33203 5.21596 5.66908 0.878908 11 0.878908C16.3309 0.878908 20.668 5.21596 20.668 10.5469C20.668 16.6992 14.5156 23.8477 11 29.1211Z" stroke="#D01818" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11 14.9414C8.57697 14.9414 6.60547 12.9699 6.60547 10.5469C6.60547 8.12385 8.57697 6.15234 11 6.15234C13.423 6.15234 15.3945 8.12385 15.3945 10.5469C15.3945 12.9699 13.423 14.9414 11 14.9414Z" stroke="#D01818" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            </div>
                                            <div className="map2">
                                                <div id="map2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="driver-price-wrap mb-40">
                                        <div className="box-2 t-al-right">
                                            <div className="icon-boxs flex">
                                                <Link href="/#">
                                                    <i className="icon-heart-1-1" />
                                                    <span>Favorite</span>
                                                </Link>
                                                <Link href="/#">
                                                    <i className="icon-shuffle-2-11" />
                                                    <span>Compare</span>
                                                </Link>
                                            </div>
                                            <div className="price-wrap flex">
                                                <p className="price-sale">$46,000</p>
                                                <p className="price">$48,000</p>
                                            </div>
                                        </div>
                                           
                                    </div>
                                    <div className="author-contact-listing-wrap">
                                        <div className="author-contact-wrap">
                                            <div className="author-contact-avatar">
                                                <img src="./assets/images/avatar/avt-admin.png" title="image" />
                                            </div>
                                            <div className="author-contact-info">
                                                <h4 className="name"> Admin </h4>
                                                <p className="desc">Owner of listing</p>
                                                <span className="number-phone">
                                                    <i className=" icon-Group-14" />
                                                    +1900 67 xxx (show)
                                                </span>
                                            </div>
                                        </div>
                                        <form action="/" method="post" className="form-contact-admin" aria-label="Contact form">
                                            <div className="group-form">
                                                <input className="admin-form" aria-required="true" aria-invalid="false" placeholder="Your Name" type="text" />
                                                <i className="icon-user-1-1" />
                                            </div>
                                            <div className="group-form">
                                                <input className="admin-form" aria-required="true" aria-invalid="false" placeholder="Email" type="email" />
                                                <i className="icon-Group2" />
                                            </div>
                                            <div className="group-form">
                                                <input className="admin-form" aria-invalid="false" placeholder="Enter Phone" type="text" />
                                                <i className="icon-Group-14" />
                                            </div>
                                            <div className="group-form">
                                                <textarea className="admin-form" aria-invalid="false" defaultValue={""} />
                                                <i className="icon-edit-1" />
                                            </div>
                                            <button type="submit"> Send Message </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* property-detail */}
                    {/* related-single-listing */}
                    <div className="widget-related-single-listing">
                        <div className="themesflat-container">
                            <div className="related-single-listing swiper">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className="listing-grid-item swiper-slide">
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
                                            <Link href="/#" className="icon-favorite">
                                                <i className="icon-heart-1-1" />
                                            </Link>
                                            <span className="feature">Featured</span>
                                        </div>
                                        <div className="listing-item-content">
                                            <div className="listing-top-content">
                                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Mercedez benz - c class</Link></h6>
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
                                                        <Link href="/#">
                                                            <i className="icon-heart-1-1" />
                                                            <span>Favorite</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <i className="icon-shuffle-2-11" />
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-price-wrap">
                                                <div className="price-wrap">
                                                    <p className="price">$489</p>
                                                    <p className="price-sale">$399</p>
                                                </div>
                                                <div className="btn-read-more">
                                                    <Link className="more-link" href="/#">
                                                        <span>View details</span>
                                                        <i className="icon-arrow-right2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="listing-grid-item swiper-slide">
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
                                            <Link href="/#" className="icon-favorite">
                                                <i className="icon-heart-1-1" />
                                            </Link>
                                            <span className="feature">Featured</span>
                                        </div>
                                        <div className="listing-item-content">
                                            <div className="listing-top-content">
                                                <h6 className="title"><Link href="/listing-details">Mercedez benz - c class</Link></h6>
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
                                                        <Link href="/#">
                                                            <i className="icon-heart-1-1" />
                                                            <span>Favorite</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <i className="icon-shuffle-2-11" />
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-price-wrap">
                                                <div className="price-wrap">
                                                    <p className="price">$489</p>
                                                    <p className="price-sale">$399</p>
                                                </div>
                                                <div className="btn-read-more">
                                                    <Link className="more-link" href="/#">
                                                        <span>View details</span>
                                                        <i className="icon-arrow-right2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="listing-grid-item swiper-slide">
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
                                            <Link href="/#" className="icon-favorite">
                                                <i className="icon-heart-1-1" />
                                            </Link>
                                            <span className="feature">Featured</span>
                                        </div>
                                        <div className="listing-item-content">
                                            <div className="listing-top-content">
                                                <h6 className="title"><Link href="/listing-details">Mercedez benz - c class</Link></h6>
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
                                                        <Link href="/#">
                                                            <i className="icon-heart-1-1" />
                                                            <span>Favorite</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <i className="icon-shuffle-2-11" />
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-price-wrap">
                                                <div className="price-wrap">
                                                    <p className="price">$489</p>
                                                    <p className="price-sale">$399</p>
                                                </div>
                                                <div className="btn-read-more">
                                                    <Link className="more-link" href="/#">
                                                        <span>View details</span>
                                                        <i className="icon-arrow-right2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="listing-grid-item swiper-slide">
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
                                            <Link href="/#" className="icon-favorite">
                                                <i className="icon-heart-1-1" />
                                            </Link>
                                            <span className="feature">Featured</span>
                                        </div>
                                        <div className="listing-item-content">
                                            <div className="listing-top-content">
                                                <h6 className="title"><Link href="/listing-details">Mercedez benz - c class</Link></h6>
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
                                                        <Link href="/#">
                                                            <i className="icon-heart-1-1" />
                                                            <span>Favorite</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <i className="icon-shuffle-2-11" />
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-price-wrap">
                                                <div className="price-wrap">
                                                    <p className="price">$489</p>
                                                    <p className="price-sale">$399</p>
                                                </div>
                                                <div className="btn-read-more">
                                                    <Link className="more-link" href="/#">
                                                        <span>View details</span>
                                                        <i className="icon-arrow-right2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="listing-grid-item swiper-slide">
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
                                            <Link href="/#" className="icon-favorite">
                                                <i className="icon-heart-1-1" />
                                            </Link>
                                            <span className="feature">Featured</span>
                                        </div>
                                        <div className="listing-item-content">
                                            <div className="listing-top-content">
                                                <h6 className="title"><Link href="/listing-details">Mercedez benz - c class</Link></h6>
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
                                                        <Link href="/#">
                                                            <i className="icon-heart-1-1" />
                                                            <span>Favorite</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <i className="icon-shuffle-2-11" />
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-price-wrap">
                                                <div className="price-wrap">
                                                    <p className="price">$489</p>
                                                    <p className="price-sale">$399</p>
                                                </div>
                                                <div className="btn-read-more">
                                                    <Link className="more-link" href="/#">
                                                        <span>View details</span>
                                                        <i className="icon-arrow-right2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
            <ModalTestDriver isToggled4={isToggled4} handleToggle4={handleToggle4} />
            <ModalOfferPrice isToggled5={isToggled5} handleToggle5={handleToggle5} />
        </>
    )
}