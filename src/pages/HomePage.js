class HomePage {

    async clickLoginButton() {
        const signinbutton = await $('//*[@id="iconContainer"]/div/div/button')
        await signinbutton.click()
        const signinlink = await $('#dropdownLoginLink')
        await signinlink.waitForDisplayed({ timeout: 30000 });
        console.log(await signinlink.getText())
        await signinlink.click()
        return this
    }

}

module.exports = new HomePage()