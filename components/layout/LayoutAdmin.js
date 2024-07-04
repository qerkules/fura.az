
'use client'
import { useState } from "react"
import BackToTop from '../elements/BackToTop'
import ModalToggle from "../elements/ModalToggle"
import ModalToggle2 from "../elements/ModalToggle2"
import ModalToggle3 from "../elements/ModalToggle3"
import Sidebar from "./Sidebar"
import Header2 from './header/Header2'
export default function LayoutAdmin({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }
    // Toggle 
    const [isToggled1, setToggled1] = useState(false)
    const handleToggle1 = () => setToggled1(!isToggled1)
    const [isToggled2, setToggled2] = useState(false)
    const handleToggle2 = () => setToggled2(!isToggled2)
    const [isToggled3, setToggled3] = useState(false)
    const handleToggle3 = () => setToggled3(!isToggled3)


    return (
        <>
            <div id="wrapper">
                <div id="page" className="clearfix">
                    <Sidebar />
                    <div class="has-dashboard">
                        <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleToggle1={handleToggle1} isToggled1={isToggled1} handleToggle2={handleToggle2} isToggled2={isToggled2} handleToggle3={handleToggle3} isToggled3={isToggled3} />

                        <main id="main-content" class="site-main-dashboard">
                            <div class="page-dashboard-wrap">
                                <div class="dashboard">
                                    {children}
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
            <BackToTop />
            <ModalToggle handleToggle1={handleToggle1} isToggled1={isToggled1} handleToggle2={handleToggle2} isToggled2={isToggled2} handleToggle3={handleToggle3} isToggled3={isToggled3} />
            <ModalToggle2 handleToggle1={handleToggle1} isToggled1={isToggled1} handleToggle2={handleToggle2} isToggled2={isToggled2} handleToggle3={handleToggle3} isToggled3={isToggled3} />
            <ModalToggle3 handleToggle1={handleToggle1} isToggled1={isToggled1} handleToggle2={handleToggle2} isToggled2={isToggled2} handleToggle3={handleToggle3} isToggled3={isToggled3} />
        </>
    )
}
