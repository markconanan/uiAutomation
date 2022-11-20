const homePage = require("../pages/HomePage.js")
const searchResultPage = require("../pages/SearchResultPage.js")

describe('SearchTests', () => {

    //verifies header in search results contains the input provided in search bar
    it('TC_003 - Verify Header contains Search Input', async () => {
        await homePage.enterSearch('Toys');
        await expect(searchResultPage.getSearchResultHeader()).toHaveTextContaining('Toys')
    })

})


