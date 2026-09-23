import { test, expect } from '@playwright/test';

test('Cart updated after clicking plus for drinks', async ({ page }) => {
//1.Open the Coffee Cart menu page https://coffee-cart.app/
  await page.goto('https://coffee-cart.app/');
  //2.Click on the "Cappuccino" cup
await page.locator('[aria-label="Cappuccino"]').click();
//3.Click on the "Espresso" cup
await page.locator('[aria-label="Espresso"]').click();
//4.Click one the "Cart" link
await page.getByRole('link', { name: 'Cart' }).click();
//5.Wait for the URL https://coffee-cart.app/cart 
await page.waitForURL('https://coffee-cart.app/cart');
//6.Assert Total Cost for Espresso is '$10.00'
await expect(page.getByRole('listitem').filter({hasText:'Espresso'})).toContainText('$10.00');
//7.Click + for Espresso
await page.getByRole('button', { name: 'Add one Espresso' }).click();
//8.Assert that Total Cost for Espresso is '$20.00'
await expect(page.getByRole('listitem').filter({hasText:'Espresso'})).toContainText('$20.00');
//9.Assert Total Cost for Cappuccino is '$19.00'
await expect(page.getByRole('listitem').filter({hasText:'Cappuccino'})).toContainText('$19.00');
//10.Click + for Cappucino
await page.getByRole('button', { name: 'Add one Cappuccino' }).click();
//11. Assert Total Cost for Cappuccino is '$38.00'
await expect(page.getByRole('listitem').filter({hasText:'Cappuccino'})).toContainText('$38.00');
//12.Assert the Total cost of the Cart is $58.00
await expect(page.getByText('Total: $58.00')).toBeVisible();



});
