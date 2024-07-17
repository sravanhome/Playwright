const{test,expect, chromium}=require('@playwright/test')

test('slowmotion',async({}) =>{

    //setting browser context and  for video recording
    const browser= await chromium.launch({
        slowMo: 500,
        headless: false
    })
    //folder and spec for the video 
    const context= await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    })
    const page= await context.newPage()
    await page.goto('https://kitchen.applitools.com')
    //unique element
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
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
    await context.close()

})
