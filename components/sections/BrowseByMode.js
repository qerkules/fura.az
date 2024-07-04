
import Link from 'next/link'

export default function BrowseByMode() {
    return (
        <>
            <div className="widget-browse-by-mode">
                <div className="themesflat-container">
                    <div className="browse-by-mode">
                        <div className="heading-section">
                            <span className="sub-title mb-6 wow fadeInUp">Trusted Car Delaer Service</span>
                            <h2 className="title mb-40 wow fadeInUp">Browse By Body</h2>
                            <p className="description wow fadeInUp">For 15 years, we raising the standard of used car
                                retailing with
                                one of the most innovative and reliable used vehicle
                            </p>
                            <div className="btn-main mt-40 wow fadeInUp">
                                <Link href="/#" className="button_main_inner">
                                    <span>View All Listings</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-722">
                            <div className="box-icon-list">
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c1.png" alt="" />
                                    </div>
                                    <span className="title-icon">Sedan</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c2.png" alt="" />
                                    </div>
                                    <span className="title-icon">Cuv</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c3.png" alt="" />
                                    </div>
                                    <span className="title-icon">cabriolet</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c4.png" alt="" />
                                    </div>
                                    <span className="title-icon">Pickup</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c5.png" alt="" />
                                    </div>
                                    <span className="title-icon">Supercar</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                                <Link href="/#" className="icon-box v1-box">
                                    <div className="image-box-wrap">
                                        <img src="/assets/images/partner/c6.png" alt="" />
                                    </div>
                                    <span className="title-icon">Suv</span>
                                    <div className="btn-con-box">
                                        <i className="icon-arrow-right2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
