import { test, expect } from '@playwright/test';

const articulos = ['Canon EOS 5D', 'MacBook', 'Apple Cinema 30"'];
for (const articulo of articulos) {
  test(`testing with ${articulo}`, async ({ page }) => {
    
    const locator = page.locator('div.caption h4 a').first();

    await page.goto("http://opencart.abstracta.us");
    await page.fill("input[name='search']", articulo);
    await page.click('.input-group-btn', { button: 'left' });
    await expect(locator).toContainText(articulo.toString());


  });
}