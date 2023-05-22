import styled from "styled-components";
import styles from "../styles/CartModal.module.css";

const CartModal = () => {
  return (
    <div className={styles.cart__container}>
      <div className={styles.cart__header}>
        <h1>Cart Summary</h1>
        <button>
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
          <li>
                <div className={styles.cart__item_title}>
                  <h2>Chicken Francese</h2>
                  <button
                    aria-label="Remove item"
                    title="Remove item"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="delete"
                      title="delete"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 4v6.47H12v3.236h40V10.47H42V4H22zm3.333 6.47V7.235H38.67v3.235H25.333zm20.001 9.707h3.333V59H15.334V20.177h3.333v35.588h26.667V20.177zm-15 29.116V23.412h3.334v25.881h-3.334z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="snipcart-item-line__content">
                  <div className="snipcart-item-line__body">
                    <div className="snipcart-item-line__info"></div>
                    <div className="snipcart-item-line__variants">
                      <div>
                        <div className="snipcart-item-custom-fields"></div>
                      </div>
                      <div className="snipcart-item-quantity snipcart-item-line__quantity">
                        <label className="snipcart-item-quantity__label snipcart__font--tiny">
                          Quantity
                        </label>
                        <div className="snipcart-item-quantity__quantity-price-container">
                          <div className="snipcart-item-quantity__quantity snipcart__font--std">
                            <button
                              aria-label="Decrement quantity"
                              title="Decrement quantity"
                              className="snipcart-button-icon is-small is-secondary"
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
                            <span className="snipcart__font--secondary snipcart__font--regular">
                              1
                            </span>
                            <button
                              aria-label="Increment quantity"
                              title="Increment quantity"
                              className="snipcart-button-icon is-small is-secondary"
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
                          <div className="snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary">
                            $60.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </li>
          <li></li>
        </ul>
        <div className={styles.cart__footer}>footer</div>
      </section>
    </div>
  );
};

export default CartModal;
