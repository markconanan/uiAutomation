const homePage = require("../pages/HomePage.js");
const LoginPage = require("../pages/LoginPage.js");
const AccountPage = require("../pages/AccountPage.js");
var formData = require("../resources/loginForm.json")

describe('Login Test', () => {

    it('TC_001 - Verify Error Messages for Empty Input', async () => {
        await homePage.clickLoginButton();
        await LoginPage.clickSubmit()
        await (await LoginPage.getEmailErrorMessage()).should.equals('Please enter your email address')
        await (await LoginPage.getPasswordErrorMessage()).should.equals('Please enter your password')
    });

    it('TC_002 - Verify Error Messages for Wrong Email and Password', async () => {
        await homePage.clickLoginButton();
        await LoginPage.enterEmail(formData.invalidEmail)
        await LoginPage.clickSubmit()
        await (await LoginPage.getEmailErrorMessage()).should.equals('Please enter a valid email address')
    });
});


