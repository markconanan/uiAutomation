//contains selectors, locators and functions for Search Results Page

class SearchResultPage {

    async getSearchResultHeader() {
        const header = await $('[data-automation="product-listing-title"]')
        await header.waitForDisplayed({ timeout: 30000 })
        return header
    }

    async clickFirstItem() {
        const productGrid = await $('[data-automation="product-grid"]')
        await productGrid.waitForDisplayed({ timeout: 30000 })
        const firstItem = await $(`li[data-automation="product-grid-item"]:first-of-type`)
        await firstItem.click()
        return this
    }

}

module.exports = new SearchResultPage()