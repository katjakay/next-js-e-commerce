import { expect, test } from '@playwright/test';

test('test checkout flow, payment and thank you page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');
  await page.locator('[data-test-id="product-1"]').click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');
  await page.locator('[data-test-id="product-add-to-cart"]').click();
  await page.getByRole('link', { name: 'cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  await page.locator('[data-test-id="cart-checkout"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('[data-test-id="checkout-first-name"]').click();
  await page.locator('[data-test-id="checkout-first-name"]').fill('Agnes');
  await page.locator('[data-test-id="checkout-first-name"]').press('Tab');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('[data-test-id="checkout-last-name"]').fill('Pilar');
  await page.locator('[data-test-id="checkout-last-name"]').press('Tab');
  await page
    .locator('[data-test-id="checkout-email"]')
    .fill('agnespilar@gmail.com');
  await page.locator('[data-test-id="checkout-email"]').press('Tab');
  await page.locator('[data-test-id="checkout-address"]').fill('Waldviertel 3');
  await page.locator('[data-test-id="checkout-address"]').press('Tab');
  await page.locator('[data-test-id="checkout-city"]').fill('Horn');
  await page.locator('[data-test-id="checkout-city"]').press('Tab');
  await page.locator('[data-test-id="checkout-postal-code"]').fill('3580');
  await page.locator('[data-test-id="checkout-postal-code"]').press('Tab');
  await page.locator('[data-test-id="checkout-country"]').fill('Austria');
  await page.locator('[data-test-id="checkout-credit-card"]').click();
  await page
    .locator('[data-test-id="checkout-credit-card"]')
    .fill('123545676345');
  await page.locator('[data-test-id="checkout-expiration-date"]').click();
  await page.locator('[data-test-id="checkout-expiration-date"]').press('Tab');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page
    .locator('[data-test-id="checkout-expiration-date"]')
    .fill('2030-01');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('[data-test-id="checkout-security-code"]').click();
  await page.locator('[data-test-id="checkout-security-code"]').fill('123');
  await page.locator('[data-test-id="checkout-confirm-order"]').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/thankyou');
  await page.getByText('Thank you! Your order was placed successfully.');
});
