
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Not Found">
                <div className="widget-error-404">
                    <div className="themesflat-container">
                        <div className="error-404 t-al-center">
                            <div className="thumb-404">
                                <img src="./assets/images/page/404.png" alt="" />
                            </div>
                            <div className="error-404-text">
                                <h3>Oops! Page Not Found</h3>
                                <p>The page you are looking for is not exist.</p>
                            </div>
                            <div className="btn-main">
                                <Link href="/" className="button_main_inner">
                                    <span>Back to Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}