const{test,expect}=require('@playwright/test')
const {newloginpage}=require('../../Pages/newloginpage')
const {commoncode} = require("../../Pages/commoncode");
const {shopbycatgeorypage}= require("../../Pages/shopbycatgeorypage")
const {checkoutpage} = require("../../Pages/checkoutpage")


const baseurl='https://ecommerce-playground.lambdatest.io/index.php?'


test.beforeEach(async({page})=>{
    await page.goto(`${baseurl}route=account/login`)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('existingshippingaddress',async({page})=>{
    const NewLoginPage = new newloginpage(page)
    const CommonCode = new commoncode(page)
    const Shopbycategeorypage= new shopbycatgeorypage(page)
    const CheckoutPage= new checkoutpage(page)
    NewLoginPage.mylogin()
    await CommonCode.havetitle('My Account')
    await Shopbycategeorypage.orderhtcphoneandaddtocart()
    await CheckoutPage.placeorder()
})

test('newshippingaddress',async({page}) =>{
    const NewloginPage = new newloginpage(page)
    const Commoncode= new commoncode(page)
    const Shopbycategeorypage= new shopbycatgeorypage(page)
    const CheckoutPage= new checkoutpage(page)
    NewloginPage.mylogin()
    await Commoncode.havetitle('My Account')
    await Shopbycategeorypage.orderhtcphoneandbuynow()
    await CheckoutPage.enternewaddress('s','s','myname','test','test','test','test')
    await CheckoutPage.placeorder()
})




