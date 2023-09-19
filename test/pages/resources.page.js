class ResoursesPage {
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get subscribeText() {return $('#hero-section-brand-heading')}
    get emailInput() {return $('input[type="email"]')}
    get countriesList() {return $('#country')}
    get selectCountry() {return $('option[value="UA"]')}
    get checkBox() {return $('input[type="checkbox"]')}
    get subscribeButton() {return $('button[type="submit"]')}
    get succesfulText() {return $('#hero-section-brand-heading')}

    async setEmailInput(value) {
        await this.emailInput.addValue(value)
    }

    async clickOnCountriesList() {
        await this.countriesList.click()
    }

    async clickOnSelectCountry() {
        await this.selectCountry.click()
    }

    async clickOnCheckBox() {
        await this.checkBox.click()
    }

    async clickOnSubscribeBtn() {
        await this.subscribeButton.click()
    }

}

export default new ResoursesPage()