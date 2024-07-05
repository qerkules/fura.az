import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer id="footer" className="clearfix bg-footer2 pd-t81 re-hi">
                <div className="themesflat-container">
                    <div className="row footer-bottom">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <ul className="social-icon">
                                <li>
                                    <Link href="/#"><i className="icon-6" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-4" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-5" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-7" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                            <ul className="bottom-bar-menu">
                                <li><Link href="/#">Privacy &amp; Policy</Link></li>
                                <li><Link href="/#">Licensing</Link></li>
                                <li><Link href="/#">Instruction</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
