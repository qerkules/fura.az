
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function BookingCar() {
    return (
        <>
            <div className="widget-booking-car">
                <div className="themesflat-container">
                    <div className="booking-car">
                        <div className="header-section">
                            <div className="heading-section">
                                <span className="sub-title mb-6 wow fadeInUp">20% OFF FOR ONLINE BOOKing</span>
                                <h2 className="title wow fadeInUp">We,re Trusted Your Car <span className="text-red">Dealer</span></h2>
                            </div>
                            <p className="description wow fadeInUp">For 15 years, we raising the standard of used car
                                retailing with one
                                of the
                                most innovative and reliable used vehicle programmes ever created.
                                A comprehensive range of
                            </p>
                        </div>
                        <div className="brand-car">
                            <div className="w-470">
                                <div className="box-icon-list-v2">
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/1.png" alt="" />
                                        </div>
                                        <span className="title-icon">Acura</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/2.png" alt="" />
                                        </div>
                                        <span className="title-icon">Ford</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/3.png" alt="" />
                                        </div>
                                        <span className="title-icon">Bentley</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/4.png" alt="" />
                                        </div>
                                        <span className="title-icon">Cheavrolet</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/5.png" alt="" />
                                        </div>
                                        <span className="title-icon">Ferrari</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="icon-box v2-box">
                                        <div className="image-box-wrap">
                                            <img src="/assets/images/partner/6.png" alt="" />
                                        </div>
                                        <span className="title-icon">Mercedes</span>
                                        <div className="btn-con-box">
                                            <i className="icon-arrow-right2" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="brand-counter">
                                <div className="counter tf-counter">
                                    <div className="widget-counter counter-v2">
                                        <div className="number-counter number" data-to={20} data-speed={2000} data-waypoint-active="yes"><CounterUp count={20} /></div>
                                        <p>Skilled Speakers</p>
                                    </div>
                                    <div className="widget-counter counter-v2">
                                        <div className="number-counter number" data-to={12} data-speed={2000} data-waypoint-active="yes">
                                            <CounterUp count={12} /><span>k</span></div>
                                        <p>Active Customers</p>
                                    </div>
                                    <div className="widget-counter counter-v2">
                                        <div className="number-counter number" data-to={15} data-speed={2000} data-waypoint-active="yes"><CounterUp count={15} /></div>
                                        <p>Open Showroom</p>
                                    </div>
                                </div>
                                <div className="brand-image">
                                    <img src="./assets/images/page/car2.png" alt="" />
                                    <div className="car-box tf-counter">
                                        <span className="number" data-to={25} data-speed={2000} data-waypoint-active="yes"><CounterUp count={25} /></span>
                                        <p className="experience">year of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
