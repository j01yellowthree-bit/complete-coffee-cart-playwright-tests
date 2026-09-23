import { test, expect } from '@playwright/test';

test('Discounted Mocha added to the Cart after promo accepting', async ({ page }) => {
  // 1. Open the Coffee Cart menu page https://coffee-cart.app/
  await page.goto('https://coffee-cart.app/');

  // 2. Click on the "Cappuccino" cup
  await page.locator('[aria-label="Cappuccino"]').click();

  // 3. Click on the "Espresso" cup
  await page.locator('[aria-label="Espresso"]').click();

  // 4. Click on the "Americano" cup
  await page.locator('[aria-label="Americano"]').click();

  // 5. Assert the promo message is visible
  await expect(
    page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")
  ).toBeVisible();

  // 6. Click the button 'Yes, of course!'
  await page.getByRole('button', { name: 'Yes, of course!' }).click();

  // 7. Click on the "Cart" link
  await page.getByRole('link', { name: 'Cart' }).click();

  // 8. Wait for the URL https://coffee-cart.app/cart
  await page.waitForURL('https://coffee-cart.app/cart');

  // 9. Assert the "Espresso" has Total cost '$10.00'
  await expect(page.getByRole('listitem').filter({ hasText: 'Espresso' })).toContainText('$10.00');

  // 10. Assert the "(Discounted) Mocha" has Total cost '$4.00'
  await expect(page.getByRole('listitem').filter({ hasText: '(Discounted) Mocha' })).toContainText('$4.00');

  // 11. Assert the "Cappuccino" has Total cost '$19.00'
  await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toContainText('$19.00');

  // 12. Assert the "Americano" has Total cost '$7.00'
  await expect(page.getByRole('listitem').filter({ hasText: 'Americano' })).toContainText('$7.00');
});
