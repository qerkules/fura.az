import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleToggle1, isToggled1, handleToggle2, isToggled2, handleToggle3, isToggled3 }) {
    return (
        <>
            <header id="header" className={`main-header header header-fixed  ${scroll ? "is-fixed is-small" : ""}`}>
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="themesflat-container w1700">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-container flex justify-space align-center">
                                    {/* Logo Box */}
                                    <div className="logo-box flex">
                                        <div className="logo"><Link href="/"><img src="/assets/images/logo/logo2@.png" alt="Logo" /></Link></div>
                                    </div>
                                    <div className="nav-outer flex align-center">
                                        {/* Main Menu */}
                                        <nav className="main-menu show navbar-expand-md">
                                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                                <Menu />
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
                            <MobileMenu />
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
