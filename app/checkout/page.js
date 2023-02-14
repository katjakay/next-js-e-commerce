import Link from 'next/link';
import styles from './page.modules.scss';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your Pilates journey with confidence on our secure checkout page. Enjoy the convenience of online shopping while we handle the rest. Your personalized classes and equipment are just a few steps away.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default function checkoutPage() {
  return (
    <div>
      <main className={styles.form_wrapper}>
        <span>
          <h4>Shipping Address</h4>
        </span>
        <hr />

        <form action="/send-data-here" method="post">
          <label htmlFor="first">First name:</label>
          <input data-test-id="checkout-first-name" name="first" />
          <label htmlFor="last">Last name:</label>
          <input data-test-id="checkout-last-name" name="last" />
          <br />
          <label htmlFor="e-mail">E-Mail:</label>
          <input data-test-id="checkout-email" name="e-mail" />
          <label htmlFor="last">Address:</label>
          <input data-test-id="checkout-address" name="address" />
          <label htmlFor="city">City:</label>
          <input data-test-id="checkout-postal-code" name="city" />
          <br />
          <label htmlFor="country">Country:</label>
          <input data-test-id="checkout-country" name="country" />
          <hr />
          <span>
            <h4>Credit Card Details</h4>
          </span>
          <label htmlFor="credit-card">Credit card number</label>
          <input data-test-id="checkout-credit-card" name="credit card" />
          <br />
          <label htmlFor="expiration-date">Credit card number</label>
          <input
            data-test-id="checkout-expiration-date"
            name="expiration date"
          />
          <label htmlFor="security-code">Credit card number</label>
          <input data-test-id="checkout-security-code" name="security code" />
          <br />
          <button href="/thankyou" data-test-id="checkout-confirm-order">
            confirm order
          </button>
        </form>
        <Link href="/thankyou">thank you [↙]</Link>
      </main>
    </div>
  );
}
