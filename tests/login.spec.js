const {test,expect} = require('@playwright/test');


test('check title', async ({ page }) => {
    await page.goto('https://youtube.com');
    await expect(page).toHaveTitle(/YouTube/)
});

