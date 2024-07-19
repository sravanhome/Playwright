const {test,expect} = require('@playwright/test');


test('recorded test @smoke', async ({ page }) => {
    await page.goto('https://saucedemo.com');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("john");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service',{exact: true})).toBeVisible();
});