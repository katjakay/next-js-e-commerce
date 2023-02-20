import { expect, test } from '@playwright/test';

test('Add to cart, change quantity and remove from cart', async ({ page }) => {
  // Go to product overview
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'discover all products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on first product
  await page.getByRole('link', { name: 'PILATES RETREAT' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Add quantity to cart
  await page
    .getByRole('button', { name: 'add to cart' })
    .click({ clickCount: 1 });

  // check if product counts updates in header
  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('1');

  // Adding second product
  await page.getByRole('link', { name: 'discover all products' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByRole('link', { name: 'PILATES CLASS' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  // Update quantity
  await page
    .getByRole('button', { name: 'add to cart' })
    .click({ clickCount: 5 });

  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('[8]');

  // Go to cart page
  await expect(page.getByTestId('cart-link')).toBeVisible();
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Remove first product
  await expect(page.getByTestId('cart-product-remove-1')).toBeVisible();
  await page.getByTestId('cart-product-remove-1').click();

  await expect(page.getByTestId('cart-count')).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('[5]]');

  // Go to checkout
  await expect(page.getByTestId('cart-checkout')).toBeVisible();
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
});
