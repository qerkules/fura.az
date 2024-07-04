
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        868: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
}

export default function Logo() {
    return (
        <>
            <section className="flat-brand">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-section t-al-center">
                                <h4 className="wow fadeInUp">our partners &amp; supporters</h4>
                            </div>
                            <div className="swiper-container carousel-5">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slogan-logo">
                                            <Link href="/#">
                                                <img src="/assets/images/partner/logo-partner.png" alt="images" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
