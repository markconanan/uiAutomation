//contains selectors, locators and functions for Product Page

class ProductPage {

    //clicks Add To Bag to add the item to My Bag
    async clickAddToBag() {
        const addToBagBtn = await $("[automation='static']").$('//*[@id="add-to-bag-btn"]')
        await addToBagBtn.waitForDisplayed({ timeout: 30000 })
        await addToBagBtn.click()
        return this
    }
    
    //gets the item name based on the product page
    async getItemName() {
        const productName = await $("[data-automation='product-title']")
        await productName.waitForDisplayed({ timeout: 30000 })
        const productNameText = await productName.getText()
        return productNameText
    }

    //gets the item price based on the product page
    async getItemPrice() {
        const productPrice = await $("[data-automation='product-price-now']")
        await productPrice.waitForDisplayed({ timeout: 30000 })
        const productPriceText = await productPrice.getText()
        return productPriceText
    }

    //clicks View Bag Checkout Button in Slide Panel
    async clickViewBagCheckoutButton() {
        const sidePanel = await $('#slide-panel')
        await sidePanel.waitForDisplayed({ timeout: 30000 })
        const button = await $("[data-automation='view-bag-checkout-btn']")
        await button.waitForDisplayed({ timeout: 30000 })
        await button.click()
        return this
    }

}

module.exports = new ProductPage()