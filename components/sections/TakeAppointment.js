
import Link from 'next/link'

export default function TakeAppointment() {
    return (
        <>
            <div className="widget-take-appointement">
                <div className="themesflat-container">
                    <div className="take-appointement mg-take">
                        <div className="take-appointement-content">
                            <span className="sub-title">Best selling Car</span>
                            <h3 className="title">modern interior living room blueprint</h3>
                            <div className="price">From <span className="text-red">$12499.00</span></div>
                            <div className="btn-main">
                                <Link href="/#" className="button_main_inner">
                                    <span>Buy Now</span>
                                </Link>
                            </div>
                        </div>
                        <div className="take-appointement-image">
                            <div className="offer-bg">
                                <div className="offer">
                                    <div className="offer-sale">29<span>% off</span></div>
                                </div>
                            </div>
                            <img src="./assets/images/page/car3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
