'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.scss';

export default function FormComponent() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await router.push(`/thankyou`);
  };

  return (
    <div>
      <h4>Shipping Address</h4>

      <main className={styles.checkout_formWrapper}>
        <div className={styles.checkout_formLayout}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="first">First name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-first-name"
              name="first"
              required
            />
            <label htmlFor="first">Last name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-last-name"
              name="last"
              required
            />
            <br />
            <label htmlFor="e-mail">E-mail</label>
            <input
              onChange={onChange}
              data-test-id="checkout-email"
              name="e-mail"
              required
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={onChange}
              data-test-id="checkout-address"
              name="address"
              required
            />
            <br />
            <label htmlFor="city">City</label>

            <input
              onChange={onChange}
              data-test-id="checkout-city"
              name="city"
              required
            />
            <label htmlFor="postal-code">Postal code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-postal-code"
              name="postal-code"
              required
            />
            <label htmlFor="country">Country</label>
            <input
              onChange={onChange}
              data-test-id="checkout-country"
              name="country"
              required
            />
            <hr className={styles.checkout_lineBreak} />
            <h4>Credit card details</h4>
            <label htmlFor="credit-card">Credit card number</label>
            <input
              onChange={onChange}
              data-test-id="checkout-credit-card"
              name="credit-card"
              required
            />
            <br />
            <label htmlFor="expiration-date">Expiration date</label>
            <input
              onChange={onChange}
              data-test-id="checkout-expiration-date"
              name="expiration-date"
              required
            />
            <br />
            <label htmlFor="security-code">Security code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-security-code"
              name="security-code"
              required
            />
            <br />
            <button
              className={styles.formButtonLayout}
              data-test-id="checkout-confirm-order"
            >
              confirm order
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
