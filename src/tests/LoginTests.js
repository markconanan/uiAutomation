const homePage = require("../pages/HomePage.js")
const loginPage = require("../pages/LoginPage.js")
var formData = require("../resources/loginForm.json")

describe('LoginTests', () => {

    //verifies error messages for empty input
    it('TC_001 - Verify Error Messages for Empty Input', async () => {
        await homePage.clickLoginButton();
        await loginPage.clickSubmit()
        await expect(loginPage.getEmailErrorMessage()).toHaveText('Please enter your email address')
        await expect(loginPage.getPasswordErrorMessage()).toHaveText('Please enter your password')
    })

    //verifires error messages for invalid input
    it('TC_002 - Verify Error Messages for Invalid Email', async () => {
        await homePage.clickLoginButton();
        await loginPage.enterEmail(formData.invalidEmail)
        await loginPage.clickSubmit()
        await expect(loginPage.getEmailErrorMessage()).toHaveText('Please enter a valid email address')
    })


})


