const {test,expect} = require('@playwright/test');

test('check title @smoke', async ({ page }) => {
    await page.goto('https://youtube.com');
    await expect(page).toHaveTitle(/YouTube/)
});
