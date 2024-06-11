import { Page } from "@playwright/test";

export default class megaMenu{
    constructor(public page: Page){

    }

    async ClickOnMegaMenuPage(){
        await this.page.hover("//span[contains(text(),'Mega Menu')]");
        await this.page.click("//a[@title='Headphones']");
        
    }
}