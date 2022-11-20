//contains selectors, locators and functions for My Bag Page

class MyBagPage {

    //gets the name of the item in the bag
    async getFirstItemName() {
        await $('#my-bag-header').waitForDisplayed({ timeout: 30000 })
        const itemSection = await $('[data-automation="normal-item-section"]')
        await itemSection.waitForDisplayed({ timeout: 30000 })
        const itemName = await $('#item-title-0 > p[data-automation="item-name"]')
        const nameText = await itemName.getText()
        return nameText
    }

    //gets the price of the item in the bag
    async getFirstItemPrice() {
        await $('#my-bag-header').waitForDisplayed({ timeout: 30000 })
        const itemSection = await $('[data-automation="normal-item-section"]')
        await itemSection.waitForDisplayed({ timeout: 30000 })
        const price = await $('h3[data-automation="now-price"]')
        const priceText = await price.getText()
        return priceText
    }

}

module.exports = new MyBagPage()