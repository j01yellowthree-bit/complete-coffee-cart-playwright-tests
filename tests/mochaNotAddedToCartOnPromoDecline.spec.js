import { test, expect } from '@playwright/test';

test('Discounted Mocha not added to the Cart after promo rejecting', async ({ page }) => {
  // 1. Open the Coffee Cart menu page https://coffee-cart.app/
  await page.goto('https://coffee-cart.app/');

  // 2. Click on the "Cappuccino" cup
  await page.locator('[aria-label="Cappuccino"]').click();

  // 3. Click on the "Espresso" cup
  await page.locator('[aria-label="Espresso"]').click();

  // 4. Click on the "Americano" cup
  await page.locator('[aria-label="Americano"]').click();

  // 5. Assert the message "It's your lucky day! Get an extra cup of Mocha for $4." is visible
  await expect(page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")).toBeVisible();

  // 6. Click the button "Nah, I'll skip."
  await page.getByRole('button', { name: "Nah, I'll skip." }).click();

  // 7. Click on the "Cart" link
  await page.getByRole('link', { name: 'Cart' }).click();

  // 8. Wait for the URL https://coffee-cart.app/cart 
  await page.waitForURL('https://coffee-cart.app/cart');

  // 9. Assert the "Espresso" listitem is visible in the cart
  await expect(page.getByRole('listitem').filter({ hasText: 'Espresso' })).toBeVisible();

  // 10. Assert the "(Discounted) Mocha" listitem is not visible in the cart
  await expect(page.getByRole('listitem').filter({ hasText: '(Discounted) Mocha' })).toBeHidden();

  // 11. Assert the "Cappuccino" listitem is visible in the cart
  await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toBeVisible();

  // 12. Assert the "Americano" listitem is visible in the cart
  await expect(page.getByRole('listitem').filter({ hasText: 'Americano' })).toBeVisible();
});

