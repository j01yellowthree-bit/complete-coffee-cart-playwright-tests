import { test, expect } from '@playwright/test';

test('Cart updated after clicking minus for drinks', async ({ page }) => {
 
  //1. Open the Coffee Cart menu page https://coffee-cart.app/
  await page.goto('https://coffee-cart.app/');

  //2.Click on the "Cappuccino" cup
  await page.locator('[aria-label="Cappuccino"]').click();

  //3.Click on the "Espresso" cup
  await page.locator('[aria-label="Espresso"]').click();

  //4.Click one the "Cart" link
  await page.getByRole('link', {name:'Cart'}).click();

  //5.Wait for the URL https://coffee-cart.app/cart 
  await page.waitForURL('https://coffee-cart.app/cart');

  //6. Assert that Espresso is visible in the cart
  await expect(page.getByRole('listitem').filter({ hasText: 'Espresso' })).toBeVisible();
  //7.Click "-" for Espresso
  await page.getByRole('button', { name: 'Remove one Espresso' }).click();

  //8.Assert that Espresso is removed from the cart
  await expect(page.getByRole('itemlist').filter({hasText:'Espresso'})).toBeHidden();

  //9.Assert that Cappucion is viisble in the cart
  await expect(page.getByRole('listitem').filter({hasText:'Cappuccino'})).toBeVisible();

  //10.Click - for Cappucion
  await page.getByRole('button', { name: 'Remove one Cappuccino' }).click();

  //11.Assert that Cappucion is removed from the cart
  await expect(page.getByRole('listitem').filter({ hasText: 'Cappuccino' })).toBeHidden();
  // 12. Assert the message "No coffee, go add some." is visible
await expect(page.getByText('No coffee, go add some.')).toBeVisible();
});

