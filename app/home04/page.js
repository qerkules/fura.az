
import Layout from "@/components/layout/Layout"
import BannerV2H4 from "@/components/sections/BannerV2H4"
import BlogV2 from "@/components/sections/BlogV2"
import CalculatorForm from "@/components/sections/CalculatorForm"
import ExploreCarV2 from "@/components/sections/ExploreCarV2"
import PopulerMakes1 from "@/components/sections/PopulerMakes1"
import SlideFormV2 from "@/components/sections/SlideFormV2"
import TabBestDeals from "@/components/sections/TabBestDeals"
import TestimonialV2 from "@/components/sections/TestimonialV2"
export default function Home4() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <SlideFormV2 />
                <ExploreCarV2 />
                <TabBestDeals />
                <BannerV2H4 />
                <PopulerMakes1 h4/>
                <TestimonialV2 />
                <CalculatorForm />
                <BlogV2 h4/>
            </Layout>
        </>
    )
}