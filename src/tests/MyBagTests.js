const homePage = require("../pages/HomePage.js")
const searchResultPage = require("../pages/SearchResultPage.js")
const productPage = require("../pages/ProductPage.js")
const myBagPage = require("../pages/MyBagPage.js")


describe('CartTests', () => {

    //verifies that item added to bag from the product page is the consistent in the my bag page
    it('TC_004 - Verify Add to Bag', async () => {
        await homePage.enterSearch('Toys')
        await expect(searchResultPage.getSearchResultHeader()).toHaveTextContaining('Toys')
        await searchResultPage.clickFirstItem()
        var itemName = await productPage.getItemName()
        var itemPrice = await productPage.getItemPrice()
        await productPage.clickAddToBag()
        await productPage.clickViewBagCheckoutButton()
        var itemNameInBag = await myBagPage.getFirstItemName()
        var itemPriceInBag = await myBagPage.getFirstItemPrice()
        await expect(itemNameInBag).toEqual(itemName)
        await expect(itemPriceInBag).toEqual(itemPrice)
    })

})
