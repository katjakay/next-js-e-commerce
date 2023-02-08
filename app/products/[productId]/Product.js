'use client';

import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.modules.scss';

// productsCookie = [ {id: number, quantity: number  },  ]

export default function Product(props) {
  return (
    <div>
      <button
        onClick={() => {
          const productsInCookies = getParsedCookie('productsCookie');
          if (!productsInCookies) {
            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });
          if (foundProduct) {
            foundProduct.quantity--;
            if (foundProduct.quantity < 0) {
              foundProduct.quantity = 0;
            }
            setStringifiedCookie('productsCookie', productsInCookies);
          }
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          const productsInCookies = getParsedCookie('productsCookie');
          if (!productsInCookies) {
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, quantity: 1 },
            ]);
            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });
          // my product is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundProduct
            foundProduct.quantity++;
          } else {
            productsInCookies.push({ id: props.product.id, quantity: 1 });
          }
          setStringifiedCookie('productsCookie', productsInCookies);
        }}
      >
        +
      </button>
      <button href="/" className={styles.addToCartButton}>
        {' '}
        Add to cart
      </button>
    </div>
  );
}
