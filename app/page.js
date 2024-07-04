import Layout from "@/components/layout/Layout"
import BrowseByMode from "@/components/sections/BrowseByMode"
import CarBannerV1 from "@/components/sections/CarBannerV1"
import CarBlogV1 from "@/components/sections/CarBlogV1"
import CarListV2 from "@/components/sections/CarListV2"
import CounterCar from "@/components/sections/CounterCar"
import FeaturesCar from "@/components/sections/FeaturesCar"
import IconBox from "@/components/sections/IconBox"
import Logo from "@/components/sections/Logo"
import Quote from "@/components/sections/Quote"
import SellingCar from "@/components/sections/SellingCar"
import Slide from "@/components/sections/Slide"
import SlideSearchCar from "@/components/sections/SlideSearchCar"
import TabCarService from "@/components/sections/TabCarService"
import TestimonialCar from "@/components/sections/TestimonialCar"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                <Slide />
                <SlideSearchCar />
                <IconBox />
                <TabCarService />
                <BrowseByMode />
                <Logo />
                <CarListV2 />
                <Quote />
                <SellingCar />
                <CounterCar />
                <TestimonialCar />
                <FeaturesCar />
                <CarBannerV1 />
                <CarBlogV1 />
            </Layout>
        </>
    )
}