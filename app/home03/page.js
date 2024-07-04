
import Layout from "@/components/layout/Layout"

import ExploreCar from "@/components/sections/ExploreCar"
import FormBuyCar from "@/components/sections/FormBuyCar"
import NewCars from "@/components/sections/NewCars"
import NewCars1 from "@/components/sections/NewCars1"
import OurDealers from "@/components/sections/OurDealers"
import SlideForm from "@/components/sections/SlideForm"
import TabBestDeals from "@/components/sections/TabBestDeals"
import Video from "@/components/sections/Video"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <SlideForm />
                <ExploreCar />
                <TabBestDeals />
                <Video />
                <NewCars />
                <NewCars1 />
                <OurDealers />
                <FormBuyCar />
            </Layout>
        </>
    )
}