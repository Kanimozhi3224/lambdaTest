import test, {Page, expect}from "@playwright/test";
import loginPage from "../pages/login";
import registerPage from "../pages/register";
import megaMenu from "../pages/megaMenu";


const email = "kaninemo303@gmail.com";
const password = "kani@123";
test ("register test-01",async({page, baseURL})=>{
await page.goto('${baseURL}route=account/register');
const register =new registerPage(page);

await register.enterFirstName("kanimozhi");
await register.enterLastName("s");
await register.enterEmail(email);
await register.enterTelephone("1234567890");
await register.enterPassword(password);
await register.enterConfirmPassword(password);
// expect (register.issubscribedChecked()).toBeChecked();
await register.clickTearmAndCondition();
})


test ("login test-02",async({page, baseURL})=>{
    await page.goto('${baseURL}route=account/login');
    const login =new loginPage(page);

    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.ClickloginBtn();
    expect (await page.title()).toBe("My Account");
}) 



