const{test,expect}=require('@playwright/test')
const {loginpage}=require('../Pages/loginpage')
const {orderformpage}=require('../Pages/orderformpage')
const {commoncode}=require('../Pages/commoncode')



test('pageobject',async({page}) =>{
    const Login= new loginpage(page)
    const Orderform= new orderformpage(page)
    const Commoncode= new commoncode(page)
    await page.goto('https://www.demoblaze.com/')
    await page.locator('id=login2').click()
    await Login.login('test','test')
    await page.getByRole('link',{name: 'Samsung galaxy s6'}).click()
    await page.locator('[class="btn btn-success btn-lg"]').click()
    Commoncode.closepopup()
    await Orderform.orderform('John','myown','mmywon','0000-00000-00000-000','08','00000')
})