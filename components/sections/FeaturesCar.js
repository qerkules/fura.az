
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function FeaturesCar() {
    return (
        <>
            <div className="widget-feature-car">
                <div className="themesflat-container full">
                    <div className="feature-car">
                        <div className="feature-car-content">
                            <div className="heading-section">
                                <span className="sub-title mb-6 wow fadeInUp">Trusted Car Delaer Service</span>
                                <h2 className="title mb-40 wow fadeInUp">Frequently Questions &amp; Asking Zone..</h2>
                                <p className="description wow fadeInUp">For 15 years, we raising the standard of used car
                                    retailing with
                                    we raising the
                                    standard of used car ret one of the most innovative and reliable
                                </p>
                            </div>
                            <div className="list-icon-check">
                                <ul>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>we are the best car provider agency with great service</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Get Best Super servicing for car &amp; Rental Service</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Expert Mechanic for fiitings and servicing car &amp; Rental</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-main">
                                <Link href="/#" className="button_main_inner">
                                    <span>Get started</span>
                                </Link>
                            </div>
                        </div>
                        <div className="feature-car-video video-wrap">
                            <img src="./assets/images/page/video.jpg" alt="" />
                            <VideoPopup style={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
