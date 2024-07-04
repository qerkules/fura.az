
import Layout from "@/components/layout/Layout"

import CalculatorForm from "@/components/sections/CalculatorForm"
import ExploreCarV3 from "@/components/sections/ExploreCarV3"
import NewCars2 from "@/components/sections/NewCars2"
import NewCars3 from "@/components/sections/NewCars3"
import PopulerMakes3 from "@/components/sections/PopulerMakes3"
import SearchForm from "@/components/sections/SearchForm"
import SlideV3 from "@/components/sections/SlideV3"
import SpecialCar from "@/components/sections/SpecialCar"
export default function Home6() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <SlideV3 />
                <SearchForm />
                <ExploreCarV3 />
                <PopulerMakes3 />
                <SpecialCar />
                <NewCars2 />
                <NewCars3 />
                <CalculatorForm />
            </Layout>
        </>
    )
}