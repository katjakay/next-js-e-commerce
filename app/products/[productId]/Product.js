'use client';

import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function Product(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <input readOnly value={count} />
      <button
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
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <button
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
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
