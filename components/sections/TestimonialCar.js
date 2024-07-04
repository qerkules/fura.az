import TestimonialSlider from "../slider/TestimonialSlider"


export default function TestimonialCar() {
    return (
        <>
            <div className="widget-testimonial-car">
                <div className="themesflat-container">
                    <div className="testimonial-car-v1">
                        <div className="image-thumbs">
                            <div className="icon-quote">
                                <i className="icon-581419696" />
                            </div>
                            <img src="./assets/images/testimonial/tes1.jpg" alt="image" />
                            <div className="rating">
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                            </div>
                        </div>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
