
import Link from 'next/link'

export default function ExploreCarV2() {
    return (
        <>
            <div className="widget-explore-car">
                <div className="themesflat-container">
                    <div className="explore-car-wrap">
                        <div className="header-section-main mb-46">
                            <h2 className="title-section-main wow fadeInUp">Explore Our cars</h2>
                            <div className="btn-read-more wow fadeInUp">
                                <Link className="more-link" href="/#">
                                    <span>View More</span>
                                    <i className="icon-arrow-up-right2" />
                                </Link>
                            </div>
                        </div>
                        <div className="box-car-wrap">
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c12.png" alt="" />
                                </div>
                                <span>Sedan</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c10.png" alt="" />
                                </div>
                                <span>Campers</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c8.png" alt="" />
                                </div>
                                <span>cabriolet</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c11.png" alt="" />
                                </div>
                                <span>Pickup</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c7.png" alt="" />
                                </div>
                                <span>Supercar</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="/assets/images/partner/c9.png" alt="" />
                                </div>
                                <span>Minivans</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
