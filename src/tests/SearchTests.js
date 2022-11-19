const homePage = require("../pages/HomePage.js")
const searchResultPage = require("../pages/SearchResultPage.js")

describe('SearchTests', () => {

    it('TC_003 - Verify Header contains Search Input', async () => {
        await homePage.enterSearch('Toys');
        await expect(searchResultPage.getSearchResultHeader()).toHaveTextContaining('Toys')
    })

})


