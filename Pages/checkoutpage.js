import {expect} from "@playwright/test";

export const checkoutpage = class checkoutpage{
    constructor(page) {
        this.page= page
        this.agreeterms= page.getByText('I have read and agree to the Terms & Conditions')
        this.continue=page.getByRole('button', { name: 'Continue' })
        this.confirmorder=page.getByRole('button', { name: 'Confirm Order' })
        this.continue2=page.getByRole('link', { name: 'Continue' })
        this.firstname= page.getByRole('textbox', { name: 'First Name*' })
        this.lastname=page.getByRole('textbox', { name: 'Last Name*' })
        this.company=page.getByRole('textbox', { name: 'Company' })
        this.address1=page.getByRole('textbox', { name: 'Address 1*' })
        this.address2=page.getByRole('textbox', { name: 'Address 2' })
        this.city= page.getByRole('textbox', { name: 'City*' })
        this.postcode=page.getByRole('textbox', { name: 'Post Code*' })
        this.newaddress= page.locator('#payment-address').getByText('I want to use a new address')
    }
    async placeorder(){
        await this.page.waitForTimeout(100)
        await this.agreeterms.click()
        await this.continue.click()
        await expect(this.page).toHaveTitle('Confirm Order')
        await this.confirmorder.click()
        await expect(this.page).toHaveTitle('Your order has been placed!')
        await this.continue2.click()
    }
    async enternewaddress(firstname,lastname,company,address1,address2,city,postalcode){
        await this.newaddress.click()
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.company.fill(company)
        await this.address1.fill(address1)
        await this.address2.fill(address2)
        await this.city.fill(city)
        await this.postcode.fill(postalcode)
    }
}