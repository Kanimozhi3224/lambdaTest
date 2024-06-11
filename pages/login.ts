import {Page} from "@playwright/test"

export default class loginPage{

    constructor(public page: Page) {

    }

    async enterEmail(email:string){

        this.page.locator("#input-email").type(email);

    }
    async enterPassword(password:string){

        this.page.locator("#input-password").type(password);

    }
    async ClickContinueBtn(){

        this.page.click("input[value='Login']");

    }


}