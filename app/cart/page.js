import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.modules.scss';

export default async function cartPage() {
  const products = await getProducts();
  const productsCookie = cookies().get('productsCookie');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    // read the cookie and find the product

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  let total = 0;
  productsWithQuantity.forEach((product) => {
    total += product.price * product.quantity;
  });

  const productsInCart = productsWithQuantity.filter(
    (product) => product.quantity > 0,
  );

  return (
    <main className={styles.cart_main}>
      <h3>ORDER SUMMARY</h3>
      {productsInCart.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Image
                src={`/images/${product.id}.png`}
                alt={product.type}
                width="156"
                height="207"
              />
              <h3>{product.firstName}</h3>
              <p>{product.price}</p>
              <p>QTY: {product.quantity}</p>
            </Link>
          </div>
        );
      })}
      <br />
      <p>Total: {total}</p>
      <br />
      <Link href="/checkout">
        <button>Checkout</button>
      </Link>
    </main>
  );
}
