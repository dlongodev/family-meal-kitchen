import styles from '../styles/Featured.module.css'
import { ButtonSolid } from '../styles/Button.styled'
import Image from 'next/image'


const Featured = () => {

    const images = [
        "/img/pan_chicken-francese.png",
        "/img/pan_chicken-parm.png",
        "/img/pan_wings-balsamico.png",
        "/img/pan_caesar-salad.png"
    ]

    return (
        <header className={`${styles.header} ${styles.shadow}`}>
            <h1 style={{ marginTop: "3rem" }}>Family Style Italian <br /> American Cooking</h1>
            <h2>Now booking Chef’s  Tables, Corporate Events and Consultations</h2>
            <div className={styles.btn_wrapper} ><ButtonSolid m="2rem 0">Plan Your Event</ButtonSolid></div>
            <div className={styles.photos}>
                {images.map((img, i) => (
                    <div className={styles.photo} key={i}>
                        <Image className={styles.photo} src={img} layout="fill" objectFit="scale-down" alt='' />
                    </div>
                ))}
            </div>
        </header>
    )
}

export default Featured