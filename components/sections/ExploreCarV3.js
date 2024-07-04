
import Link from 'next/link'

export default function ExploreCarV3() {
    return (
        <>
            <div className="widget-explore-car">
                <div className="themesflat-container">
                    <div className="explore-car-wrap">
                        <div className="header-section-main mb-46">
                            <h2 className="title-section-main wow fadeInUp">Explore all cars</h2>
                            <div className="btn-read-more wow fadeInUp">
                                <Link className="more-link" href="/#">
                                    <span>View More</span>
                                    <i className="icon-arrow-up-right2" />
                                </Link>
                            </div>
                        </div>
                        <div className="explore-car">
                            <Link href="/#" className="explore-car-item">
                                <img src="./assets/images/banner/1.jpg" alt="" />
                                <h5 className="title-explore">Sedan</h5>
                            </Link>
                            <Link href="/#" className="explore-car-item">
                                <img src="./assets/images/banner/2.jpg" alt="" />
                                <h5 className="title-explore">SUV</h5>
                            </Link>
                            <Link href="/#" className="explore-car-item">
                                <img src="./assets/images/banner/3.jpg" alt="" />
                                <h5 className="title-explore">Hatchback</h5>
                            </Link>
                            <Link href="/#" className="explore-car-item">
                                <img src="./assets/images/banner/4.jpg" alt="" />
                                <h5 className="title-explore">Hybrid</h5>
                            </Link>
                            <Link href="/#" className="explore-car-item">
                                <img src="./assets/images/banner/5.jpg" alt="" />
                                <h5 className="title-explore">Coupe</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
