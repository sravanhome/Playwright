const {expect}=require('@playwright/test')
export const commoncode= class commoncode {

    constructor(page) {
        this.page=page
    }
    async errormessage(error){
        await expect(this.page.getByText(error, { exact: true })).toBeVisible();

    }
    async havetitle(title){
        await expect(this.page).toHaveTitle(title)
    }
    async closepopup(page){
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`)
            dialog.dismiss().catch(() => {})
        })


    }

}
