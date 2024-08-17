const{test,expect}=require('@playwright/test')

test.beforeEach(async({page})=> {
    await page.goto('https://saucedemo.com')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('id=password').fill('secret_sauce')
    await page.locator('id=login-button').click()
    await page.waitForURL("https://www.saucedemo.com/inventory.html")
})

test.afterEach(async({page}) =>{
    await page.close()
})


test('homepage @smoke',async ({page})=>{
    await page.locator("[name='add-to-cart-sauce-labs-backpack']").click()
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
})

test('logout @reg',async ({page})=>{
    await page.getByRole('button',{name: 'Open Menu'}).click()
    await page.locator('id=logout_sidebar_link').click()
})

