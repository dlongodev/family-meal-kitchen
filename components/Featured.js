import styles from '../styles/Featured.module.css'
import { BtnLinkSolid } from '../styles/Button.styled'
import Image from 'next/image'
import Link from 'next/link'


const Featured = () => {

    return (
        <header className={`${styles.header}`}>
            {/* <div className={styles.photos}>
                <Image className={styles.photo} src="/img/hdr-img_mobile.png" layout="fill" objectFit="cover" alt='' />

            </div> */}
            <div className={styles.hdr_text}>
                <h1>WEBSITE UNDER CONSTRUCTION</h1>
                <h2><strong>In the meantime, to place an order text Chef Joe:</strong></h2>
                <div className={styles.btn_wrapper} >
                    {/* <Link href="/contact" passHref> */}
                        <BtnLinkSolid m="1rem" w="inherit">(754) 264-6268</BtnLinkSolid>
                    {/* </Link> */}
                </div>
            </div>
        </header>
    )
}

export default Featured