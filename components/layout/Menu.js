import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()

    return (
        <>
            <ul className="navigation clearfix">
                <li className="dropdown2">
                    <Link href="/#">Home</Link>
                    <ul>
                        <li className={pathname == "/" ? "current" : ""}>
                            <Link href="/">Home Page 01</Link>
                        </li>
                        <li  className={pathname == "/home02" ? "current" : ""}><Link href="/home02">Home Page 02</Link>
                        </li>
                        <li className={pathname == "/home03" ? "current" : ""}><Link href="/home03">Home Page 03</Link></li>
                        <li className={pathname == "/home04" ? "current" : ""}><Link href="/home04">Home Page 04</Link></li>
                        <li className={pathname == "/home05" ? "current" : ""}><Link href="/home05">Home Page 05</Link></li>
                        <li className={pathname == "/home06" ? "current" : ""}><Link href="/home06">Home Page 06</Link></li>
                    </ul>
                </li>
                <li className="dropdown2">
                    <Link href="/#">Cars</Link>
                    <ul>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">Car Listings</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">Listings Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown2">
                    <Link href="/#">Page</Link>
                    <ul>
                        <li className={pathname == "/dashboard" ? "current" : ""}><Link href="/dashboard">Dashboard</Link></li>
                        <li className={pathname == "/my-inventory" ? "current" : ""}><Link href="/my-inventory">My Inventory</Link></li>
                        <li className={pathname == "/addcart" ? "current" : ""}><Link href="/addcart">Add car</Link></li>
                        <li className={pathname == "/seller-profile" ? "current" : ""}><Link href="/seller-profile">Seller Profile</Link></li>
                        <li className={pathname == "/dealer-details" ? "current" : ""}><Link href="/dealer-details">Dealer Detail</Link></li>
                        <li className={pathname == "/404" ? "current" : ""}><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown2"><Link href="/#">News </Link>
                    <ul>
                        <li className={pathname == "/blog" ? "current" : ""}><Link href="/blog">Blog List</Link></li>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">Blog Detail</Link></li>
                    </ul>
                </li>
                <li className={pathname == "/contact-us" ? "current" : ""}><Link href="/contact-us">Contact us </Link>
                </li>
            </ul>
        </>
    )
}
