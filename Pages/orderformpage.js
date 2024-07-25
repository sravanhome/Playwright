export const orderformpage= class OrderForm{
    constructor(page) {
        this.page=page
        this.page.locator('id=cartur')
        this.page.locator('[data-target="#orderModal"]')
        this.page.locator('id=name')
        this.page.locator('id=country')
        this.page.locator('#city')
        this.page.locator('#card')
        this.page.locator('#month')
        this.page.locator('#year')
        this.page.getByRole('button',{name:'Purchase'})

    }
    async orderform(name,country,city,card,month,year) {
        await this.page.locator('id=cartur').click()
        await this.page.locator('[data-target="#orderModal"]').click()
        await this.page.locator('id=name').fill(name)
        await this.page.locator('id=country').fill(country)
        await this.page.locator('#city').fill(city)
        await this.page.locator('#card').fill(card)
        await this.page.locator('#month').fill(month)
        await this.page.locator('#year').fill(year)
        await this.page.getByRole('button',{name:'Purchase'}).click()
        await this.page.click('button:has-text("OK")')
    }
}