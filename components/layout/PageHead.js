import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Fura Az Truck Dealer"}
                </title>
            </Head>
        </>
    )
}

export default PageHead