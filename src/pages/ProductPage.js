class ProductPage {

    async clickAddToBag() {
        const addToBagBtn = await $("[automation='static']").$('//*[@id="add-to-bag-btn"]')
        await addToBagBtn.waitForDisplayed({ timeout: 30000 })
        await addToBagBtn.click()
        return this
    }
    
    async clickBagMenu() {
        const bagMenuButton = await $("[data-automation='header-bag']")
        await bagMenuButton.waitForDisplayed({ timeout: 30000 })
        await bagMenuButton.click()
        return this
    }

    async getItemName() {
        const productName = await $("[data-automation='product-title']")
        await productName.waitForDisplayed({ timeout: 30000 })
        const productNameText = await productName.getText()
        return productNameText
    }

    async getItemPrice() {
        const productPrice = await $("[data-automation='product-price-now']")
        await productPrice.waitForDisplayed({ timeout: 30000 })
        const productPriceText = await productPrice.getText()
        return productPriceText
    }

    async clickViewBagCheckoutButton() {
        const sidePanel = await $('#slide-panel')
        await sidePanel.waitForDisplayed({ timeout: 30000 })
        const button = await $("[data-automation='view-bag-checkout-btn']")
        await button.waitForDisplayed({ timeout: 30000 })
        await button.click()
        return this
    }

    async getItemNameInSidePanel() {
        const sidePanel = await $('#slide-panel')
        await sidePanel.waitForDisplayed({ timeout: 30000 })
        const itemName = await $('//*[@id="slide-panel"]/span/span[1]/div/div[2]/span[2]')
        const itemNameText = await itemName.getText()
        return itemNameText
    }

}

module.exports = new ProductPage()