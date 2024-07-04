
import PopularMakesTab1 from '../elements/PopularMakesTab1'

export default function PopulerMakes1({ h4 }) {
    return (
        <>
            <div className={`widget-populer-makes ${h4 ? "pt-0" : ""}`}>
                <div className="themesflat-container">
                    <div className="populer-makes">
                        <div className="heading-section t-al-center mb-46">
                            <span className="sub-title mb-6 wow fadeInUp">20% OFF FOR ONLINE BOOKing</span>
                            <h2 className="title wow fadeInUp">{h4 ? "Recently Added" : "Popular Makes by"}</h2>
                        </div>
                        <PopularMakesTab1 />
                    </div>
                </div>
            </div>
        </>
    )
}
