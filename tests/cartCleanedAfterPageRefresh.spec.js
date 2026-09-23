import { test, expect } from '@playwright/test';

test('Cart cleaned after page refresh', async ({ page }) => {
  // 1. Open the Coffee Cart menu page https://coffee-cart.app/
  await page.goto('https://coffee-cart.app/');

  // 2. Click on the "Cappuccino" cup
  await page.locator('[aria-label="Cappuccino"]').click();

  // 3. Click on the "Cart" link
  await page.getByRole('link', { name: 'Cart' }).click();

  // 4. Wait for the URL https://coffee-cart.app/cart
  await page.waitForURL('https://coffee-cart.app/cart');

  // 5. Assert Cappuccino is visible in the cart
await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toBeVisible();

  // 6. Reload the page
  await page.reload();

  // 7. Assert Cappuccino is not visible (hidden) in the cart
await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toBeHidden();
  // 8. Assert the message "No coffee, go add some." is visible
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
});

