import './global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';
import star from '../public/star.png';
import styles from './layout.module.scss';

export default async function RootLayout({ children }) {
  const products = await getProducts();
  const productsCookie = cookies().get('cart');

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

  // Calculate total sum of price
  let totalQuantity = 0;
  productsWithQuantity.forEach((product) => {
    totalQuantity += product.quantity;
  });

  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>
          <nav>
            <a>
              <Image href="/" src={star} alt="star" width="36" height="36" />
            </a>
            <a href="/" className={styles.logo}>
              KA-LINAW Pilates
            </a>

            <div>
              <Link href="/">Home</Link>
              <Link data-test-id="products-link" href="/products">
                Products
              </Link>
              <Link href="/cart" data-test-id="cart-link">
                Cart<div data-test-id="cart-count">{totalQuantity}</div>
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <div>
            <ul>
              <li href="/">Home</li>
              <li data-test-id="products-link" href="/products">
                Products
              </li>
              <li href="/">About Kalinaw</li>
            </ul>
          </div>
          <div>
            <ul>
              <li href="/">Privacy Policy</li>
              <li href="/">Cookies</li>
              <li href="/">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li href="/">Contact</li>
              <li href="/">+43 677 637 3648</li>
              <li href="/">pilates@kalinaw.com</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
