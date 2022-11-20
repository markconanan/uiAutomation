//contains selectors, locators and functions for HomePage

class HomePage {

    //click login button in top menu bar
    async clickLoginButton() {
        const signinbutton = await $('//*[@id="iconContainer"]/div/div/button')
        await signinbutton.click()
        const signinlink = await $('#dropdownLoginLink')
        await signinlink.waitForDisplayed({ timeout: 30000 });
        console.log(await signinlink.getText())
        await signinlink.click()
        return this
    }

    //enter search input in search bar
    async enterSearch(searchInput) {
        const search = await $('#desktopWrapper').$('//*[@id="search-input"]')
        await search.click()
        await search.setValue(searchInput)
        await browser.keys('Enter')
        return this
    }

}

module.exports = new HomePage()