
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
        nextEl: ".swiper-button-next-tes",
        prevEl: ".swiper-button-prev-tes",
    },
    loop: true,
    speed: 600,
    parallax: true,
}
export default function TestimonialSlider() {
    return (
        <>
            <div className="swiper testimonial-swiper">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Delaer Service</span>
                        <h3 className="title">What client’s Says</h3>
                        <p className="description">The other hand we denounce with righteou indg ation and
                            dislike
                            men who are so beguiled and demorali ed by the of pleasure Events
                            moment.Dislike men who are so beguiled and demoraliz worlds
                            by the charms of pleasure “
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Delaer Service</span>
                        <h3 className="title">What client’s Says</h3>
                        <p className="description">The other hand we denounce with righteou indg ation and
                            dislike
                            men who are so beguiled and demorali ed by the of pleasure Events
                            moment.Dislike men who are so beguiled and demoraliz worlds
                            by the charms of pleasure “
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Delaer Service</span>
                        <h3 className="title">What client’s Says</h3>
                        <p className="description">The other hand we denounce with righteou indg ation and
                            dislike
                            men who are so beguiled and demorali ed by the of pleasure Events
                            moment.Dislike men who are so beguiled and demoraliz worlds
                            by the charms of pleasure “
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="btn-next-prev">
                    <div className="swiper-button-next-tes next">
                        <i className="icon-Vector-11" />
                    </div>
                    <div className="swiper-button-prev-tes prev">
                        <i className="icon-Vector-2" />
                    </div>
                </div>
            </div>
        </>
    )
}
