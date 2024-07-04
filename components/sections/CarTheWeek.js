
import BestSellingSlider from '../slider/BestSellingSlider'

export default function CarTheWeek() {
    return (
        <>
            <div className="widget-car-the-week">
                <div className="themesflat-container">
                    <div className="car-the-week">
                        <h2 className="title-section-main t-al-center mb-46 wow fadeInUp"> Deals of the Week</h2>
                        <BestSellingSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
