import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleToggle1, isToggled1, handleToggle2, isToggled2, handleToggle3, isToggled3 }) {
    return (
        <>
            <header id="header2" className="main-header">
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="themesflat-container full">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="flex justify-space align-center">
                                    {/* Logo Box */}
                                    <div className="logo-box flex">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/images/logo/logo2.png" alt="Logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="nav-outer flex align-center">
                                        {/* Main Menu */}
                                        <nav className="main-menu show navbar-expand-md">
                                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix">
                                                    <li className="dropdown2">
                                                        <Link href="/#">Home</Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/">Home Page 01</Link>
                                                            </li>
                                                            <li><Link href="/home02">Home Page 02</Link></li>
                                                            <li><Link href="/home03">Home Page 03</Link></li>
                                                            <li><Link href="/home04">Home Page 04</Link></li>
                                                            <li><Link href="/home05">Home Page 05</Link></li>
                                                            <li><Link href="/home06">Home Page 06</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown2">
                                                        <Link href="/#">Cars</Link>
                                                        <ul>
                                                            <li><Link href="/car-list">Car Listings</Link></li>
                                                            <li><Link href="/listing-details">Listings Details</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown2 current">
                                                        <Link href="/#">Page</Link>
                                                        <ul>
                                                            <li><Link href="/dashboard">Dashboard</Link></li>
                                                            <li className="current"><Link href="/my-inventory">My
                                                                Inventory</Link></li>
                                                            <li><Link href="/addcart">Add car</Link></li>
                                                            <li><Link href="/seller-profile">Seller Profile</Link>
                                                            </li>
                                                            <li><Link href="/dealer-details">Dealer Detail</Link></li>
                                                            <li><Link href="/404">404</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown2"><Link href="/#">News </Link>
                                                        <ul>
                                                            <li><Link href="/blog">Blog List</Link></li>
                                                            <li><Link href="/blog-single">Blog Detail</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/contact-us">Contact us </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        {/* Main Menu End*/}
                                    </div>
                                    <div className="header-account flex align-center">
                                        <div className="register ml--18">
                                            <div className="flex align-center">
                                                <a data-bs-toggle="modal" onClick={handleToggle1} role="button"><img src="/assets/images/avatar/avt.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="flat-bt-top sc-btn-top ml--20 ">
                                            <Link className="btn-icon-list" href="/car-list">
                                                <span>Listing Yours</span>
                                                <i className="icon-add-button-1" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header Lower */}
                {/* Mobile Menu  */}
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <Link href="/"><img src="/assets/images/logo/logo2@.png" alt="Logo Motorx" /></Link>
                        </div>
                        <div className="bottom-canvas">
                            <div className="menu-outer">
                                <MobileMenu />
                            </div>
                            <div className="help-bar-mobie login-box">
                                <a data-bs-toggle="modal" onClick={handleToggle1} role="button" className="fw-7 category"><i className="icon-user" />Login</a>
                            </div>
                            <div className="help-bar-mobie search">
                                <Link href="/#" className="fw-7 font-2"><i className="icon-loupe-1" />Search</Link>
                            </div>
                            <div className="help-bar-mobie compare">
                                <Link href="/#" className="fw-7 font-2"><i className="icon-shuffle-2-1" />Compare</Link>
                            </div>
                            <div className="help-bar-mobie cart">
                                <Link href="/#" className="fw-7 font-2"><i className="icon-Vector" />Cart</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* End Mobile Menu */}
            </header>

        </>
    )
}
