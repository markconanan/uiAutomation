class HomePage {

    async getHeader() {
        const header = await $('#accountHeading')
        await header.waitForDisplayed({ timeout: 30000 });
        console.log(await header.getText())
        var headerText = await header.getText()
        return headerText
    }

}

module.exports = new HomePage()