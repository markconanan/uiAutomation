class LoginPage {

    async enterEmail(email) {
        const emailInput = await $('//*[@id="email"]')
        await emailInput.waitForDisplayed({ timeout: 30000 });
        await emailInput.setValue(email)
        return this
    }

    async enterPassword(password) {
        const passwordInput = await $('//*[@id="password"]')
        await (await passwordInput).setValue(password)
        return this
    }

    async clickSubmit() {
        const submitButton = await $('//*[@id="login-submit"]')
        await submitButton.click()
    }

    async getEmailErrorMessage() {
        const errorMessage = await $('#email-error-text')
        await errorMessage.waitForDisplayed({ timeout: 30000 });
        console.log(await errorMessage.getText())
        var errorMessageText = await errorMessage.getText()
        return errorMessageText
    }

    async getPasswordErrorMessage() {
        const errorMessage = await $('#password-error-text')
        await errorMessage.waitForDisplayed({ timeout: 30000 });
        console.log(await errorMessage.getText())
        var errorMessageText = await errorMessage.getText()
        return errorMessageText
    }

}

module.exports = new LoginPage()