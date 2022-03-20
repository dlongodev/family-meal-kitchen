import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const NavBar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" width={150} height={140} alt="Family Meal Kithchen Logo" />
        </div>
      </nav>
    </>
  )
}

export default NavBar
