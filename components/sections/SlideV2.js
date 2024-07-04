
import Link from 'next/link'

export default function SlideV2() {
    return (
        <>
            <div className="widget-tf-slider-v2">
                <div className="slider-wrap ">
                    <div className="tf-slider-item ">
                        <div className="slide-item-image">
                            <img src="/assets/images/slide/slide2.jpg" alt="" />
                        </div>
                        <div className="themesflat-container">
                            <div className="slide-content t-al-center">
                                <span className="sub-title wow fadeInUp" data-wow-delay="100ms" data-wow-duration="2000ms">20% OFF FOR ONLINE BOOKing</span>
                                <h1 className="title-slide wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    Modern <span className="text-red">classic</span> incredible</h1>
                                <p className="description wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                                    Car is where early adopters and innovation seekers find</p>
                                <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>
                                            Find A Car
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/slide/shape2.png" className="shape2" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
