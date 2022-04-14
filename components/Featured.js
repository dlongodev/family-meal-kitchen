import styles from '../styles/Featured.module.css'
import { ButtonSolid } from '../styles/Button.styled'
import Image from 'next/image'
import Link from 'next/link'


const Featured = () => {

    const images = [
        "/img/pan_chicken-francese.png",
        "/img/pan_chicken-parm.png",
        "/img/pan_wings-balsamico.png",
        "/img/pan_caesar-salad.png"
    ]

    return (
        <header className={`${styles.header} ${styles.shadow}`}>
            <div className={styles.photos}>
                <Image className={styles.photo} src="/img/hdr-img_mobile.png" layout="fill" objectFit="cover" alt='' />

            </div>
            <h1>Family Style Italian <br /> American Cooking</h1>
            <h2>Now booking Chef’s  Tables, Corporate Events and Consultations</h2>
            <div className={styles.btn_wrapper} >
                <Link href="/contact" passHref>
                    <ButtonSolid m="1rem 0" w="inherit">Plan Your Event</ButtonSolid>
                </Link>
            </div>
        </header>
    )
}

export default Featured