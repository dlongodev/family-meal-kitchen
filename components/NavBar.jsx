import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useRef, useState, useEffect } from "react"




const NavBar = () => {
  

  
  const [isActive, setActive] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(!isActive)
      }
    }
    document.addEventListener('click', handleClickOutside, false)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  }, [isActive])
  

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <div id="toggle" className={isActive ? `${styles.toggle} ${styles.active}` : `${styles.toggle}`} onClick={handleToggle}></div>
          <div ref={ref} id="sidebar" className={isActive ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`} onClick={handleToggle}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Place an Order</a></li>
            </ul>
          </div>
          <Image src="/img/logo.png" width={150} height={140} alt="Family Meal Kithchen Logo" />
        </div>
      </nav>
    </>
  )
}

export default NavBar
