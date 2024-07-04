
import Layout from "@/components/layout/Layout"

import BannerV2 from "@/components/sections/BannerV2"
import BestDeals from "@/components/sections/BestDeals"
import BestsellingCar from "@/components/sections/BestsellingCar"
import BlogV2 from "@/components/sections/BlogV2"
import BookingCar from "@/components/sections/BookingCar"
import CategoryCar from "@/components/sections/CategoryCar"
import FeatureV2Car from "@/components/sections/FeatureV2Car"
import MobieApp from "@/components/sections/MobieApp"
import PopulerMakes1 from "@/components/sections/PopulerMakes1"
import SearchForm from "@/components/sections/SearchForm"
import SlideV2 from "@/components/sections/SlideV2"
import TakeAppointment from "@/components/sections/TakeAppointment"
import TestimonialV2 from "@/components/sections/TestimonialV2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <SlideV2 />
                <SearchForm />
                <BookingCar />
                <CategoryCar />
                <FeatureV2Car />
                <TakeAppointment />
                <BestDeals />
                <BannerV2 />
                <TestimonialV2 />
                <BestsellingCar />
                <PopulerMakes1 />
                <MobieApp />
                <BlogV2 />
            </Layout>
        </>
    )
}