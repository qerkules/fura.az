
import Link from 'next/link'
import BestSellingSlider from '../slider/BestSellingSlider'

export default function NewCars2() {
    return (
        <>
            <div className="widget-new-cars new-car-v2-h6">
                <div className="themesflat-container">
                    <div className="new-cars-wrap">
                        <div className="header-section-main mb-46">
                            <h2 className="title-section-main wow fadeInUp">New cars</h2>
                            <div className="btn-read-more wow fadeInUp">
                                <Link className="more-link" href="/car-list">
                                    <span>View More</span>
                                    <i className="icon-arrow-up-right2" />
                                </Link>
                            </div>
                        </div>
                        <BestSellingSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
