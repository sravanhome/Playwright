
const {expect}=require('@playwright/test')

export const newloginpage = class newloginpage{
    constructor(page) {
        this.page=page
        this.username=page.locator('id=input-email')
        this.password=page.locator('id=input-password')
        this.loginbutton=page.getByRole('button',{name:'Login'})
    }
    async login(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click()
    }
    async errormessage() {
        await expect(this.page.getByText(` Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.`, { exact: true })).toBeVisible();
    }
    async mylogin(){
        await this.username.fill('johnk@test.com')
        await this.password.fill('mytest')
        await this.loginbutton.click()
    }


}


