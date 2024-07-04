'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
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
    },
}

export default function BestSellingSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper new-cars mybest-selling">
                <div className="swiper-wrapper">
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car14.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car13.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car14.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                    <div className="cut">
                                        <svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.296 14.0939C13.9707 14.0939 15.3284 12.8164 15.3284 11.2406C15.3284 9.66468 13.9707 8.38718 12.296 8.38718C10.6213 8.38718 9.26367 9.66468 9.26367 11.2406C9.26367 12.8164 10.6213 14.0939 12.296 14.0939Z" fill="white" />
                                            <path d="M9.45163 2.32436L7.71751 4.10772H4.71358C3.67121 4.10772 2.81836 4.91023 2.81836 5.89108V16.5913C2.81836 17.5721 3.67121 18.3746 4.71358 18.3746H19.8754C20.9177 18.3746 21.7706 17.5721 21.7706 16.5913V5.89108C21.7706 4.91023 20.9177 4.10772 19.8754 4.10772H16.8714L15.1373 2.32436H9.45163ZM12.2945 15.6996C9.67906 15.6996 7.55641 13.7022 7.55641 11.2412C7.55641 8.78013 9.67906 6.78276 12.2945 6.78276C14.9099 6.78276 17.0325 8.78013 17.0325 11.2412C17.0325 13.7022 14.9099 15.6996 12.2945 15.6996Z" fill="white" />
                                        </svg>
                                        <p>5</p>
                                    </div>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car13.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
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
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
            </Swiper>
        </>
    )
}
