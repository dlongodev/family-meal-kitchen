import styled from "styled-components";
import styles from "../styles/CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeMenuItem,
  decreaseQuantity,
  addMenuItem,
} from "../redux/cartSlice";
import { useRouter } from "next/router";


const CartModal = ({isCartModalOpen, setIsCartModalOpen}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const openCartPage = () => {
    setIsCartModalOpen(false)
    router.push("/cart")
  }


  return (
    <div className={isCartModalOpen ? `${styles.cart__container} ${styles.cart__active}` : `${styles.cart__container}`}>
      <div className={styles.cart__header}>
        <h1>Cart Summary</h1>
        <button onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="close cart"
            title="close cart"
          >
            <path
              d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <section className={styles.cart__content}>
        <ul>
      {cart?.menuItems.map((item, index) => 
          <li  key={item._id} >
            <div className={styles.cart__item_title}>
              <h2>{item.title}</h2>
              <button aria-label="Remove item" title="Remove item" onClick={() =>
                          dispatch(
                            removeMenuItem({
                              index,
                              quantity: item.quantity,
                              total: item.price * item.quantity,
                            })
                          )
                        }>
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="delete"
                  title="delete"
                >
                  <path
                    d="M22 4v6.47H12v3.236h40V10.47H42V4H22zm3.333 6.47V7.235H38.67v3.235H25.333zm20.001 9.707h3.333V59H15.334V20.177h3.333v35.588h26.667V20.177zm-15 29.116V23.412h3.334v25.881h-3.334z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <div className={styles.cart__quantity_container}>
              <div className={styles.cart__quantity_item}>
                <label>
                  Quantity
                </label>
                <div className={styles.cart__quantity_price_container}>
                  <div className={styles.cart__quantity_display_container}>
                    <button
                      aria-label="Decrement quantity"
                      title="Decrement quantity"
                      onClick={() =>
                        dispatch(decreaseQuantity(item._id))
                      }
                    >
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt=""
                        title=""
                        className="snipcart__icon"
                      >
                        <path
                          d="M48 31H16v2.462h32V31z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <span>
                    {item.quantity}
                    </span>
                    <button
                      aria-label="Increment quantity"
                      title="Increment quantity"
                      onClick={() =>
                        dispatch(
                          addMenuItem({
                            ...item,
                            quantity: 1,
                            price: item.price,
                          })
                        )
                      }
                    >
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt=""
                        title=""
                        className="snipcart__icon"
                      >
                        <path
                          d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className={styles.cart__price}>
                  ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </li>
          )}
        </ul>
        <div className={styles.cart__footer}><button onClick={openCartPage}>View Detailed Cart</button></div>
      </section>
    </div>
  );
};

export default CartModal;
