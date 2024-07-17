const{test,expect}=require('@playwright/test')

test('assertions',async({page}) =>{
    await page.goto('https://kitchen.applitools.com')
    //unique element
    await expect(page.locator('text=The Kitchen')).toHaveCount(2)
    //element is present click
    if(await (page.$('text=The Kitchen')))
    {
        await page.locator('text=The Kitchen').click()
    }
    //visible,hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect(page.locator('text=The Kitchen')).toBeHidden()
    //enabled,disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect(page.locator('text=The Kitchen')).toBeDisabled()

    //checking for the value
    await expect(page.locator('text=The Kitchen')).toHaveText("The Kitchen")
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The Ki')

    //check title
    await expect(page).toHaveTitle(/.*Kitchen/)



})

