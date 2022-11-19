class SearchResultPage {

    async getSearchResultHeader() {
        const header = await $('[data-automation="product-listing-title"]')
        await header.waitForDisplayed({ timeout: 30000 })
        return header
    }

    async clickFirstItem() {
        const productGrid = await $('[data-automation="product-grid"]')
        await productGrid.waitForDisplayed({ timeout: 30000 })
        await (await productGrid.$('[data-automation="product"]')).click()
        return this
    }

}

module.exports = new SearchResultPage()