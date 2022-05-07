import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSnipcart } from "use-snipcart";

const NavBar = () => {
  const { cart = {} } = useSnipcart();
  const router = useRouter();
  const [isActive, setActive] = useState(false);

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
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.png"
                  width="160px"
                  height="160px"
                  alt="Family Meal Kithchen Logo"
                />
              </a>
            </Link>
          </div>
        ) : (
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.png"
                  width="95px"
                  height="95px"
                  alt="Family Meal Kithchen Logo"
                />
              </a>
            </Link>
          </div>
        )}
        <button className={styles.cart + " snipcart-checkout"}>
          <Image src="/img/icon-cart.svg" alt="" width="30px" height="30px" />
          <div className={styles.counter}>{cart.items?.count}</div>
        </button>
      </nav>
    </>
  );
};

export default NavBar
