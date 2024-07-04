'use client'
import Link from 'next/link'
import { useState } from 'react'
import VideoPopup from '../elements/VideoPopup'

export default function Slide() {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className="widget-tf-slider ">
                <div className="slider-wrap swiper-wrapper">
                    <div className="tf-slide-item swiper-slide">
                        <div className="slide-item-image">
                            <img src="/assets/images/slide/bg.jpg" alt="" />
                            <div className="overlay" />
                        </div>
                        <div className="slide-item-content">
                            <div className="slide-content">
                                <span className="wow fadeInUp sub-title" data-wow-delay="100ms" data-wow-duration="2000ms">Trusted Dealer, Rental</span>
                                <h1 className=" title-slide wow slideInUp" data-wow-delay="50ms" data-wow-duration="200ms">
                                    premium car Collection..</h1>
                                <p className="description wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    Car is where early adopters and innovation seekers find lively
                                    imaginative tech before it hits the mainstream.</p>
                                <div className="box">
                                    {/* Button */}
                                    <div className="btn-main wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms">
                                        <Link href="/#" className="button_main_inner ">
                                            <span>
                                                Go to listing
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Button */}
                                    <div className="video-wrap wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                                        <VideoPopup style={2} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide-image">
                                <img src="/assets/images/slide/icon.png" className="icon-shape wow swing" alt="" />
                                <div className="box-offer">
                                    <p>40 <span>%</span></p>
                                    <span>off</span>
                                </div>
                                <div className="box-car">
                                    <img src="/assets/images/slide/car.png" alt="" />
                                    <div className="dot-car">
                                        <div className="dot">
                                            <i className={isToggled ? "icon-Vector-5  active" : " icon-Vector-5 "} onClick={handleToggle}>
                                            </i>
                                            <div className={isToggled ? "content-price  active" : " content-price "}>
                                                <div className="proflile">
                                                    <span>Luxury Ford Car</span>
                                                    <span className="price">$13000</span>
                                                </div>
                                                <p>1421 San Pedro St, Los Angeles, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <span>(603) 555-0123</span>
                                <span>Contact@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
