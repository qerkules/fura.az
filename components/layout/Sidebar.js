import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Sidebar() {
    const pathname = usePathname() 
    return (
        <>
            <div className="sidebar-dashboard">
                <div className="db-logo">
                    <Link href="/"><img src="assets/images/logo/logo2.png" alt="Logo" /></Link>
                </div>
                <div className="db-profile">
                    <img src="./assets/images/avatar/avt-blog.jpg" alt />
                    <div className="name">Mehedii Mohammad</div>
                    <p className="seller">Private Seller</p>
                </div>
                <div className="db-menu">
                    <ul>
                        <li className={pathname == "/dashboard" ? "active" : ""}>
                            <Link href="/dashboard">
                                <div className="icon">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 8.83333H7.16667V0.5H0.5V8.83333ZM0.5 15.5H7.16667V10.5H0.5V15.5ZM8.83333 15.5H15.5V7.16667H8.83333V15.5ZM8.83333 0.5V5.5H15.5V0.5H8.83333Z" fill="#D01818" />
                                    </svg>
                                </div>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className={pathname == "/my-inventory" ? "active" : ""}>
                            <Link href="/my-inventory">
                                <div className="icon">
                                    <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99167 14.4493L1.85 9.67435L0.5 10.7243L8 16.5577L15.5 10.7243L14.1417 9.66602L7.99167 14.4493ZM8 12.3327L14.1333 7.55768L15.5 6.49935L8 0.666016L0.5 6.49935L1.85833 7.55768L8 12.3327Z" fill="#D01818" />
                                    </svg>
                                </div>
                                <p>My Inventory</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#">
                                <div className="icon">
                                    <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.0013 15.7917L7.79297 14.6917C3.5013 10.8 0.667969 8.23333 0.667969 5.08333C0.667969 2.51667 2.68464 0.5 5.2513 0.5C6.7013 0.5 8.09297 1.175 9.0013 2.24167C9.90964 1.175 11.3013 0.5 12.7513 0.5C15.318 0.5 17.3346 2.51667 17.3346 5.08333C17.3346 8.23333 14.5013 10.8 10.2096 14.7L9.0013 15.7917Z" fill="#D01818" />
                                    </svg>
                                </div>
                                <p>My Favorites</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#">
                                <div className="icon">
                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3081 9.79166C15.3452 9.51296 15.3638 9.22497 15.3638 8.9184C15.3638 8.62112 15.3452 8.32384 15.2988 8.04514L17.1846 6.57732C17.3519 6.44726 17.3983 6.19643 17.2961 6.01063L15.5124 2.92635C15.401 2.72197 15.1687 2.65694 14.9643 2.72197L12.744 3.61381C12.2795 3.26079 11.7871 2.96351 11.239 2.74055L10.9046 0.38089C10.8674 0.15793 10.6816 0 10.4587 0H6.89132C6.66836 0 6.49185 0.15793 6.45469 0.38089L6.12025 2.74055C5.57214 2.96351 5.07048 3.27008 4.61527 3.61381L2.39496 2.72197C2.19058 2.64765 1.95833 2.72197 1.84685 2.92635L0.0724623 6.01063C-0.0390177 6.20572 -0.00185778 6.44726 0.183942 6.57732L2.06981 8.04514C2.02336 8.32384 1.9862 8.63041 1.9862 8.9184C1.9862 9.20639 2.00478 9.51296 2.05123 9.79166L0.165362 11.2595C-0.00185777 11.3895 -0.0483076 11.6404 0.0538823 11.8262L1.83756 14.9104C1.94904 15.1148 2.18129 15.1799 2.38567 15.1148L4.60598 14.223C5.07048 14.576 5.56285 14.8733 6.11096 15.0962L6.4454 17.4559C6.49185 17.6789 6.66836 17.8368 6.89132 17.8368H10.4587C10.6816 17.8368 10.8674 17.6789 10.8953 17.4559L11.2297 15.0962C11.7779 14.8733 12.2795 14.576 12.7347 14.223L14.955 15.1148C15.1594 15.1891 15.3917 15.1148 15.5031 14.9104L17.2868 11.8262C17.3983 11.6218 17.3519 11.3895 17.1753 11.2595L15.3081 9.79166ZM8.675 12.2628C6.83558 12.2628 5.3306 10.7578 5.3306 8.9184C5.3306 7.07898 6.83558 5.574 8.675 5.574C10.5144 5.574 12.0194 7.07898 12.0194 8.9184C12.0194 10.7578 10.5144 12.2628 8.675 12.2628Z" fill="#D01818" />
                                    </svg>
                                </div>
                                <p>Profile Setting</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay-dashboard">
            </div>

        </>
    )
}
