import styles from '../styles/Featured.module.css'
import { BtnLinkSolid } from '../styles/Button.styled'
import Image from 'next/image'
import Link from 'next/link'


const Featured = () => {

    return (
        <header className={`${styles.header} ${styles.shadow}`}>
            <div className={styles.photos}>
                <Image className={styles.photo} src="/img/hdr-img_mobile.png" layout="fill" objectFit="cover" alt='' />

            </div>
            <div className={styles.hdr_text}>
                <h1>Family Style Italian <br /> American Cooking</h1>
                <h2>Now booking Chef’s  Tables, Corporate Events and Consultations</h2>
                <div className={styles.btn_wrapper} >
                    <Link href="/contact" passHref>
                        <BtnLinkSolid m="1rem 0" w="inherit">Plan Your Event</BtnLinkSolid>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Featured