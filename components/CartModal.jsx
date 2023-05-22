import styled from "styled-components"
import styles from "../styles/CartModal.module.css"


const CartModal = () => {
  return (
    <div className={styles.cart__container}>
        <div className={styles.cart__header}>
            <h1>Cart Summary</h1>
            <button><svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="close cart" title="close cart"><path d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z" fill="currentColor"></path></svg></button>
        </div>
    </div>
  )
}

export default CartModal