
import Link from 'next/link'

export default function CategoryCar() {
    return (
        <>
            <div className="widget-category-car">
                <div className="themesflat-container">
                    <div className="category-car-wrap mb--280">
                        <div className="heading-section t-al-center">
                            <span className="sub-title mb-6 wow fadeInUp">20% OFF FOR ONLINE BOOKing</span>
                            <h2 className="title wow fadeInUp">Browse By Your favorite <span className="red-title">Vehicles</span>types</h2>
                        </div>
                        <div className="category-car">
                            <div className="category-car-item">
                                <img src="./assets/images/car-list/category1.jpg" alt="" />
                                <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>Minivan</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="category-car-item">
                                <img src="./assets/images/car-list/category2.jpg" alt="" />
                                <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>Hatchback</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="category-car-item-wrap">
                                <div className="category-car-item">
                                    <img src="./assets/images/car-list/category3.jpg" alt="" />
                                    <div className="btn-main">
                                        <Link href="/#" className="button_main_inner">
                                            <span>Sedan</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="category-car-item">
                                    <img src="./assets/images/car-list/category4.jpg" alt="" />
                                    <div className="btn-main">
                                        <Link href="/#" className="button_main_inner">
                                            <span>Coupe</span>
                                        </Link>
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
