export const registrationpage= class registrationpage{
    constructor(page) {
        this.page=page
        this.firstname=page.locator('id=input-firstname')
        this.lastname=page.locator('id=input-lastname')
        this.email=page.locator('id=input-email')
        this.telephone=page.locator('id=input-telephone')
        this.password=page.locator('id=input-password')
        this.passwordconfirm=page.locator('id=input-confirm')
        this.subscribebutton=page.getByText('No',{exact:true})
        this.privacypolicy=page.getByText('I have read and agree to the')
        this.continuebutton=page.getByText('Continue',{exact:true})
    }
    async registration(firstname,lastname,email,telephone,password,passwordconfirm){
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.telephone.fill(telephone)
        await this.password.fill(password)
        await this.passwordconfirm.fill(passwordconfirm)
        await this.subscribebutton.click()
        await this.privacypolicy.click()
        await this.continuebutton.click()
    }
}