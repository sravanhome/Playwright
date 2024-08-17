const{test,expect}=require('@playwright/test')
const{newloginpage}=require('../../Pages/newloginpage')
const{commoncode}=require('../../Pages/commoncode')

const baseurl='https://ecommerce-playground.lambdatest.io/index.php?'

test.beforeEach(async({page})=>{
    await page.goto(`${baseurl}route=account/login`)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Login',async({page})=>{
    const NewLoginPage= new newloginpage(page)
    NewLoginPage.login('johnk@test.com','mytest')
    await expect(page).toHaveTitle('My Account')
})

test('Invalidlogin',async({page})=>{
    const NewLoginPage= new newloginpage(page)
    const CommonCode= new commoncode(page)
    NewLoginPage.login('myname1@test.com','myname')
    await CommonCode.errormessage(` Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.`)
})

test('Loginempty',async({page})=>{
    const NewLoginPage= new newloginpage(page)
    const CommonCode= new commoncode(page)
    NewLoginPage.login('','')
    await CommonCode.errormessage(` Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.`)
})