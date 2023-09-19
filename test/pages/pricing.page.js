class PricingPage {
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get mainText() {return $('h1[class="h2-mktg"]')}
    get featuresLink() {return $('a[href="#compare-features"]')}
    get h1Text() {return $('h1[class="h1"]')}

    async clickOnFeaturesLink() {
        await this.featuresLink.click()
    }
}

export default new PricingPage()