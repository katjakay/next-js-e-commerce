'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

export default function Product(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <div>
      <button
        className={styles.oneProduct_counterButtons}
        onClick={() => {
          if (count <= 1) {
            setCount(1);
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <input
        className={styles.oneProduct_inputCount}
        data-test-id="product-quantity"
        readOnly
        value={count}
      />
      <button
        className={styles.oneProduct_counterButtons}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <br />
      <button
        className={styles.oneProduct_addToCartButton}
        data-test-id="product-add-to-cart"
        onClick={() => {
          const productsInCookies = getParsedCookie('productsCookie');
          if (!productsInCookies) {
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, quantity: count },
            ]);

            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });
          if (foundProduct) {
            foundProduct.quantity += count;
          } else {
            productsInCookies.push({ id: props.product.id, quantity: count });
          }

          setStringifiedCookie('productsCookie', productsInCookies);
          setCount(1);
          router.refresh();
        }}
      >
        ADD TO CART
      </button>

      <div className={styles.oneProduct_backNav}>
        <Link href="/cart">Go to cart [↙]</Link>
      </div>
    </div>
  );
}
