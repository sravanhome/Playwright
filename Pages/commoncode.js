export const commoncode= class commoncode {

    constructor(page) {
        this.page=page;
    }
    async closepopup(page){
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        })
    }

}
