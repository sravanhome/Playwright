const{test,expect}= require('@playwright/test')
const {parseEnv} = require("node:util");

test('different locator', async({page}) => {
    await page.goto('https://www.demoblaze.com/')
    //Pausing the page to check the locator
    //await page.pause()
    //xpath locator
    await page.click("//*[@id=\"tbodyid\"]/div[1]/div/div/h4/a")
    //Locator by class name
    await page.getByRole('link',{name: 'Add to cart'}).click()
    //code to close the popup
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    })
    //navigation bar
    await page.getByRole('link', { name: 'Cart',exact: true  }).click()
    //Click Order button
    await page.locator('[data-target="#orderModal"]').click();
    //placeorderform
    await page.locator("#name").fill('john')
    await page.getByLabel('Country:').fill('USA')
    await page.locator("[id='city']").fill("california")
    await page.locator("#card").fill('5678-7890-6789')
    await page.getByLabel('month').fill('August')
    await page.getByLabel('year').fill('2029')
    await page.click('button:has-text("Purchase")')
    await page.click('button:has-text("OK")')
    await expect(page).toHaveTitle(/STORE/)
});
