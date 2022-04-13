import Head from 'next/head'
import Featured from '../components/Featured'
import HomeServices from '../components/HomeServices'
import HomeSubSection from '../components/HomeSubSection'
import PanHeader from '../components/PanHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Family Meal Kitchen</title>
        <meta name="description" content="Family Style Italian American Cooking" />       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <HomeSubSection />
      <HomeServices />
      <PanHeader />
    </>
  )
}
