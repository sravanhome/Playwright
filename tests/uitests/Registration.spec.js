const{test,expect}= require('@playwright/test')
const{registrationpage}=require('../../Pages/registrationpage')


const baseurl='https://ecommerce-playground.lambdatest.io/index.php?'

test('Registration',async({page})=>{
    const RegistrationPage=new registrationpage(page)
    await page.goto(`${baseurl}route=account/register`)
    await RegistrationPage.registration('john','k','johnk@test.com','999-999-9867','mytest',
        'mytest')
})





