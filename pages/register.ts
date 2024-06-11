import { Page } from "@playwright/test";

export default class registerPage{

    constructor(public page: Page) {
        
    }
    async enterFirstName(firstname: string) {

        await this.page.locator("#input-firstname").type(firstname)
    
    }

    async enterLastName(lastname: string) {

        await this.page.locator("#input-lastname").type(lastname);
    
    }


    async enterEmail(email: string) {

        await this.page.locator("#input-email").type(email);
    
    }

    async enterTelephone(telephone: string) {

        await this.page.locator('input[name="telephone"]').type(telephone); 
        
             }
    async enterPassword(password: string) {

        await this.page.locator("#input-password").type(password);
    
    }
    async enterConfirmPassword(password: string) {

        await this.page.locator("#input-confirm").type(password);
    
    }

    async issubscribedChecked(){

         return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickTearmAndCondition() {
        await this.page.check("#input-agree");
    }
    async clickContinueBtn() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
             this.page.click("input[value='Continue']")
        ])
        
    
    }

 


}