const homePage = require("../pages/HomePage.js")
const LoginPage = require("../pages/LoginPage.js")
var formData = require("../resources/loginForm.json")


describe('Login Test', () => {

    it('TC_001 - Verify Error Messages for Empty Input', async () => {
        await homePage.clickLoginButton();
        await LoginPage.clickSubmit()
        await expect(LoginPage.getEmailErrorMessage()).toHaveText('Please enter your email address')
        await expect(LoginPage.getPasswordErrorMessage()).toHaveText('Please enter your password')
    })

    it('TC_002 - Verify Error Messages for Invalid Email', async () => {
        await homePage.clickLoginButton();
        await LoginPage.enterEmail(formData.invalidEmail)
        await LoginPage.clickSubmit()
        await expect(LoginPage.getEmailErrorMessage()).toHaveText('Please enter a valid email address')
    })


})


