'use client';

import { useRouter } from 'next/navigation';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';
import styles from './page.module.scss';

export default function DeleteProduct(props) {
  const router = useRouter();

  return (
    <button
      data-test-id="cart-product-remove-<product id>"
      className={styles.cart_Button}
      onClick={() => {
        const productsInCookies = getParsedCookie('cart');

        const foundProduct = productsInCookies.filter((productInCookie) => {
          return productInCookie.id !== props.product.id;
        });

        setStringifiedCookie('cart', foundProduct);
        router.refresh();
      }}
    >
      [ x ]
    </button>
  );
}
