//contains selectors, locators and functions for LoginPage

class LoginPage {

    //enter email in email field
    async enterEmail(email) {
        const emailInput = await $('//*[@id="email"]')
        await emailInput.waitForDisplayed({ timeout: 30000 })
        await emailInput.setValue(email)
        return this
    }

    //enter password in password field
    async enterPassword(password) {
        const passwordInput = await $('//*[@id="password"]')
        await (await passwordInput).setValue(password)
        return this
    }

    //click submit button in login page
    async clickSubmit() {
        const submitButton = await $('//*[@id="login-submit"]')
        await submitButton.click()
    }

    //get email error message
    async getEmailErrorMessage() {
        const errorMessage = await $('#email-error-text')
        await errorMessage.waitForDisplayed({ timeout: 30000 })
        return errorMessage
    }

    //get password error message
    async getPasswordErrorMessage() {
        const errorMessage = await $('#password-error-text')
        await errorMessage.waitForDisplayed({ timeout: 30000 })
        return errorMessage
    }

}

module.exports = new LoginPage()