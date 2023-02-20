'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './page.module.scss';

export default function FormComponent() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await router.push(`/thankyou`);
  };

  return (
    <div>
      <main className={styles.checkout_formWrapper}>
        <div className={styles.checkout_formLayout}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h4>Shipping Address</h4>

            <label htmlFor="first">First name</label>
            <input data-test-id="checkout-first-name" name="first" required />
            <label htmlFor="first">Last name</label>
            <input data-test-id="checkout-last-name" name="last" required />
            <br />
            <label htmlFor="e-mail">E-mail</label>
            <input data-test-id="checkout-email" name="e-mail" required />
            <label htmlFor="address">Address</label>
            <input data-test-id="checkout-address" name="address" required />
            <br />
            <label htmlFor="city">City</label>

            <input data-test-id="checkout-city" name="city" required />
            <label htmlFor="postal-code">Postal code</label>
            <input
              data-test-id="checkout-postal-code"
              name="postal-code"
              required
            />
            <label htmlFor="country">Country</label>
            <input data-test-id="checkout-country" name="country" required />
            <h4>Credit card details</h4>
            <label htmlFor="credit-card">Credit card number</label>
            <input
              data-test-id="checkout-credit-card"
              name="credit-card"
              required
            />
            <br />
            <label htmlFor="expiration-date">Expiration date</label>
            <input
              data-test-id="checkout-expiration-date"
              name="expiration-date"
              required
            />
            <br />
            <label htmlFor="security-code">Security code</label>
            <input
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
