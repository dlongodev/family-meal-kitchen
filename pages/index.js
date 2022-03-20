import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Family Meal Kitchen</title>
        <meta name="description" content="Family Style Italian American Cooking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
      <Image src='/public/img/logo.png' layout='fill' alt='' />
    </div>
  )
}
