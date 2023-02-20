import { cookies } from 'next/headers';
import { getProducts } from '../../database/products';
import Form from './Form';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your Pilates journey with confidence on our secure checkout page. Enjoy the convenience of online shopping while we handle the rest. Your personalized classes and equipment are just a few steps away.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default async function checkoutPage() {
  // Get cookie
  const products = await getProducts();
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    // Read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  // Calculate the total sum of price
  let totalPrice = 0;
  productsWithQuantity.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return (
    <div className={styles.checkout_formWrapper}>
      <main className={styles.checkout_formLayout}>
        <h1> Order summary </h1>
        <p>Total {totalPrice} €</p>
      </main>

      <Form />
    </div>
  );
}
