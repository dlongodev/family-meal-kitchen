import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import { ButtonOutlined } from "../styles/Button.styled";

const NavBar = () => {
  const router = useRouter();

  const [isActive, setActive] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav
        className={
          router?.asPath === "/"
            ? styles.container
            : `${styles.container} ${styles.shadow}`
        }
      >
        <div
          ref={toggleRef}
          aria-controls="sidebar"
          id="toggle"
          className={
            isActive ? `${styles.toggle} ${styles.active}` : `${styles.toggle}`
          }
          onClick={handleToggle}
        ></div>
        <div
          id="sidebar"
          className={
            isActive
              ? `${styles.sidebar} ${styles.active}`
              : `${styles.sidebar}`
          }
          onClick={handleToggle}
        >
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <a className={styles.btn_outlined}>Place an Order</a>
              </Link>
            </li>
          </ul>
        </div>
        {router.asPath === "/" ? (
          <div className={styles.logo}>
            <Image
              src="/img/logo.png"
              width="200px"
              height="186px"
              alt="Family Meal Kithchen Logo"
            />
          </div>
        ) : (
          <div className={styles.logo}>
            <Image
              src="/img/logo.png"
              width="100px"
              height="93px"
              alt="Family Meal Kithchen Logo"
            />
          </div>
        )}
        <div className={styles.cart}>
          <Image
            src="/img/cart-shopping-solid.svg"
            alt=""
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>7</div>
        </div>
      </nav>
    </>
  );
};

export default NavBar
