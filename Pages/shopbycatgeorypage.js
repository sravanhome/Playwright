export const shopbycatgeorypage= class shopbycatgeorypage{
    constructor(page) {
        this.page= page
        this.shopbycategory= page.getByRole('button',{name:'Shop by Category'})
        this.phones=page.getByRole('link',{name:'Phone, Tablets & Ipod'})
        this.htc=page.getByRole('link',{name:'HTC Touch HD HTC Touch HD HT'})
        this.buynow=page.getByRole('button', { name: 'Buy now' })
        this.addtocart=page.getByRole('button', { name: 'Add to Cart' })
    }
    async orderhtcphoneandbuynow(){
        await this.shopbycategory.click()
        await this.phones.click()
        await this.htc.click()
        await this.buynow.click()
    }
    async orderhtcphoneandaddtocart(){
        await this.shopbycategory.click()
        await this.phones.click()
        await this.htc.click()
        await this.addtocart.click()
    }

}