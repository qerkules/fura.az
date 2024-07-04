import TestimonialSliderV2 from "../slider/TestimonialSliderV2"


export default function TestimonialV2() {
    return (
        <>
            <div className="widget-testimonial-v2">
                <div className="themesflat-container">
                    <div className="testimonial-v2">
                        <TestimonialSliderV2 />
                        <div className="testimonial-v2-image">
                            <div className="icon">
                                <i className=" icon-quote-1" />
                            </div>
                            <img src="./assets/images/testimonial/frame.png" alt="" className="frame" />
                            <img src="./assets/images/testimonial/image-frame.png" alt="" className="avata" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
