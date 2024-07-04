
import BestSellingSlider2 from '../slider/BestSellingSlider2'

export default function BestsellingCar() {
    return (
        <>
            <div className="widget-best-selling-car">
                <div className="themesflat-container full">
                    <div className="best-selling-car-wrap">
                        <div className="heading-section t-al-center mb-46">
                            <span className="sub-title mb-6">20% OFF FOR ONLINE BOOKing</span>
                            <h2 className="title text-white">Top 10 bestseler car</h2>
                        </div>
                        <BestSellingSlider2 />
                    </div>
                </div>
            </div>
        </>
    )
}
