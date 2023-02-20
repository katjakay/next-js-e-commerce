import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';
import RemoveProductButton from './RemoveProductButton';

export const metadata = {
  title: 'Cart',
  description:
    'Your journey to wellness is just a few clicks away. Review your Pilates purchases and complete your transaction securely on our online store. Embrace a healthier, stronger you with our personalized classes and equipment.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default async function cartPage() {
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
  // Render only products with quantity to cart list
  const productsInCart = productsWithQuantity.filter(
    (product) => product.quantity > 0,
  );

  return (
    <span>
      <main className={styles.cart_pageWrapper}>
        <h1 className={styles.cart_h1}>ORDER SUMMARY</h1>
        <hr className={styles.cart_lineBreak} />
        <div className={styles.cart_imageLayout}>
          {productsInCart.map((product) => {
            return (
              <div
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/images/${product.id}.png`}
                    alt={product.type}
                    width="156"
                    height="207"
                  />
                  <span className={styles.cart_textLayout}>
                    <h3>{product.firstName}</h3>
                    <div data-test-id={`cart-product-quantity-${product.id}`}>
                      <p>QTY: {product.quantity}</p>
                    </div>
                    <p>{product.price} €</p>
                  </span>
                </Link>
                <div
                  data-test-id={`cart-product-remove-${product.id}`}
                  className={styles.cart_removeButton}
                >
                  <RemoveProductButton product={product} />
                </div>
              </div>
            );
          })}
          <br />
          <p className={styles.cart_totalPriceLayout}>Total {totalPrice} €</p>
          <Link href="/checkout">
            <button
              className={styles.cart_checkoutButton}
              data-test-id="cart-checkout"
            >
              Checkout
            </button>
          </Link>
          <div className={styles.cart_cartBackToProducts}>
            <a href="/products">Back to Products [↙]</a>
          </div>
        </div>
      </main>
    </span>
  );
}
