
import Layout from "@/components/layout/Layout"
import CarListV2 from "@/components/sections/CarListV2"
import CarTheWeek from "@/components/sections/CarTheWeek"
import CategoryCar from "@/components/sections/CategoryCar"
import CounterCar from "@/components/sections/CounterCar"
import FeaturesCar from "@/components/sections/FeaturesCar"
import FormContact from "@/components/sections/FormContact"
import OurDealers from "@/components/sections/OurDealers"
import PopulerMakes2 from "@/components/sections/PopulerMakes2"
import SlideFormV2 from "@/components/sections/SlideFormV2"
export default function Home5() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <SlideFormV2 />
                <CarListV2 h5/>
                <CategoryCar />
                <div className="bg-category" />
                <CounterCar />
                <OurDealers />
                <CarTheWeek />
                <PopulerMakes2 />
                <FeaturesCar />
                <FormContact />
            </Layout>
        </>
    )
}