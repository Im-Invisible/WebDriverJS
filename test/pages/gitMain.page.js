class MainPage {
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get pricingLink() {return $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}
    get signIn() {return $('a[href="/login"]')}
    get signUp() {return $('.HeaderMenu-link.HeaderMenu-link--sign-up.flex-shrink-0.d-none.d-lg-inline-block.no-underline.border.color-border-default.rounded.px-2.py-1')}
    get searchInput() {return $('.search-input')}
    get searchInputExpanded() {return $('#query-builder-test')}
    get searchListBox() {return $('.ActionListItem-label.text-normal')}
    get textAboveFooter() {return $('.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3')}
    get enterpriseText() {return $('.btn-mktg.btn-large-mktg.btn-muted-mktg')}
    get subscribeButton() {return $('.btn-mktg.mb-4.btn-muted-mktg')}


    async clickOnMainPage() {
        await this.gitMainPage.click()
    }

    async clickOnPricingLink() {
        await this.pricingLink.click()
    }

    async clickOnSignIn() {
        await this.signIn.click()
    }
    
    async clickOnSignUp() {
        await this.signUp.click()
    }

    async clickOnSerchInput() {
        await this.searchInput.click()
    }

    async setSearchInput(value) {
        await this.searchInputExpanded.setValue(value)
    }

    async clickOnSerchListBox() {
        await this.searchListBox.click()
    }

    async clickOnEnterpriseText() {
        await this.enterpriseText.click()
    }
    
    async clickOnSubscribeBtn() {
        await this.subscribeButton.click()
    }
}

export default new MainPage()