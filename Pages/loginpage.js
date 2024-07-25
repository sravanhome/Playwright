export const loginpage = class LoginPage{
    constructor(page) {
        this.page=page
        this.username=page.locator('id=loginusername')
        this.password=page.locator('id=loginpassword')
        this.loginButton= page.getByRole('button',{name: 'Log in'})
    }

    async login(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}