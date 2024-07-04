
import Link from 'next/link'

export default function MobieApp() {
    return (
        <>
            <div className="widget-mobie-app">
                <div className="themesflat-container">
                    <div className="mobie-app">
                        <div className="mobie-app-content">
                            <span className="sub-title">20% OFF FOR ONLINE BOOKing</span>
                            <div className="title">Download free <span className="text-red">mobile app</span> Today for you!
                            </div>
                            <div className="image-wrap">
                                <Link href="/#">
                                    <img src="./assets/images/banner/appst.png" alt="" />
                                </Link>
                                <Link href="/#">
                                    <img src="./assets/images/banner/ggplay.png" alt="" />
                                </Link>
                                <Link href="/#">
                                    <img src="./assets/images/banner/qr.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="mobie-app-image">
                            <img src="./assets/images/banner/mobie-car.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
