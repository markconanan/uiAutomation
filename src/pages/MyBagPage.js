class MyBagPage {

    async getFirstItemName() {
        await $('#my-bag-header').waitForDisplayed({ timeout: 30000 })
        const itemSection = await $('[data-automation="normal-item-section"]')
        await itemSection.waitForDisplayed({ timeout: 30000 })
        const itemName = await $('[data-automation="item-name"]')
        const nameText = await itemName.getText()
        return nameText
    }

    async getFirstItemPrice() {
        await $('#my-bag-header').waitForDisplayed({ timeout: 30000 })
        const itemSection = await $('[data-automation="normal-item-section"]')
        await itemSection.waitForDisplayed({ timeout: 30000 })
        const price = await $('[data-automation="now-price"]')
        const priceText = await price.getText()
        return priceText
    }

}

module.exports = new MyBagPage()