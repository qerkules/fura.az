import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer id="footer" className="clearfix bg-footer2 pd-t81 re-hi">
                <div className="themesflat-container">
                    <div className="row footer-top">
                        <div className="col-lg-6 col-md-12 col-12 pd-r80 ">
                            <h2 className="title-footer-top">Do you Have <span className="red-title">something</span> to sell
                                through us?</h2>
                            {/* <img className="icon-ft" src="/assets/images/page/shape-footer.png" alt="" /> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 t-al-right pt-20">
                            <Link href="/#" className="btn-sell">Sell your car today</Link>
                        </div>
                    </div>
                    <div className="row footer-main">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-info">
                                <img src="/assets/images/logo/logo2.png" alt="Logo Footer" />
                                <p>The world’s first and largest digital market for crypto collectibles and non-fungible
                                    (NFTs). Buy</p>
                                <ul>
                                    <li>
                                        <i className="icon-Vector1" />
                                        <p>14 New South Head Rd,Triple 3148London, UK</p>
                                    </li>
                                    <li>
                                        <i className="icon-Group-1" />
                                        <p>needhelp@company.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu pl-60">
                                <h3>Quick Links</h3>
                                <ul className="box-menu">
                                    <li><Link href="/#">Dealer Locator</Link></li>
                                    <li><Link href="/#">Service Locator</Link></li>
                                    <li><Link href="/#">Pre-owned</Link></li>
                                    <li><Link href="/#">Accessori Originali</Link></li>
                                    <li><Link href="/#">Spare Parts</Link></li>
                                    <li><Link href="/#"> Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu pl-30">
                                <h3>Research</h3>
                                <ul className="box-menu">
                                    <li><Link href="/#">Build &amp; Price A Vehicle</Link></li>
                                    <li><Link href="/#">Compare Models</Link></li>
                                    <li><Link href="/#"> Warranty</Link></li>
                                    <li><Link href="/#">Download a Brochure</Link></li>
                                    <li><Link href="/#">Sign-Up for Updates</Link></li>
                                    <li><Link href="/#">Mail Me a Brochure</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu widget-form">
                                <h3>Newsletter</h3>
                                <form method="post" className="email-footer-form form-submit" action="#" acceptCharset="utf-8">
                                    <div className="text-wrap clearfix">
                                        <fieldset className="email-wrap style-text">
                                            <input type="email" className="tb-my-input" name="email" placeholder="Enter Email Adress" required />
                                        </fieldset>
                                        <button name="submit" type="submit" className="btn-submit-email">
                                            <i className="icon-Group" />
                                        </button>
                                    </div>
                                    <div className="tfad-listing-feature">
                                        <div className="radio">
                                            <input id="front" type="checkbox" name="check" defaultValue="check" />
                                            <label htmlFor="front" className="text-white">I agree to all your terms and
                                                policies</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <p className="coppy-right">Made with ❤️ by <Link href="/#">Themesflat</Link></p>
                        </div>
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
                <img src="/assets/images/page/ft-left.png" alt="left" className="shape-left" />
                <img src="/assets/images/page/ft-right.png" alt="right" className="shape-right" />
            </footer>

        </>
    )
}
