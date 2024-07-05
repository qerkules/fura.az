import Layout from "@/components/layout/Layout"
import TabCarService from "@/components/sections/TabCarService"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                <TabCarService />
            </Layout>
        </>
    )
}