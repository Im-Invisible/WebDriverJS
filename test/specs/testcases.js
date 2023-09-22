import { expect } from '@wdio/globals'
import assert from 'assert/strict'
import MainPage from "./../pages/gitMain.page.js"
import SignUpPage from "./../pages/gitSignUp.page.js"
import EnterprisePage from "./../pages/enterprise.page.js"
import ResoursesPage from "./../pages/resources.page.js"
import SearchPage from "./../pages/search.page.js"
import PricingPage from "./../pages/pricing.page.js"

describe('GitHub main page', () => {

    //  TestCase 1 
    it('should enter valid data into Sign up fields', async () => {
        browser.setWindowSize(1800, 1000)
        await browser.url('https://github.com/');

        await MainPage.clickOnSignUp()        
        expect(SignUpPage.welcomeText).toHaveValue('Welcome to GitHub! Let’s begin the adventure')
        await browser.pause(3000)

        await SignUpPage.setEmailInput('example3412@gmail.com')
        await browser.pause(1000)
        await SignUpPage.clickOnEmailBtn()
        
        await SignUpPage.setPasswordInput('678HG*ne_y')
        await browser.pause(1000)
        await SignUpPage.clickOnPasswordBtn()

        await SignUpPage.setUsernameInput('MyBestUsername')
        await browser.pause(1000)
        await SignUpPage.clickOnUsernameBtn()

        await SignUpPage.setSpamInput('y')
        await browser.pause(1000)
        await SignUpPage.clickOnSpamEmailBtn()
    });

    //  TestCase 2 
    it('should check the visibility of the text on the main page', async () => {
        browser.setWindowSize(1800, 1000)
        await browser.url('https://github.com/');

        //await MainPage.textAboveFooter.scrollIntoView();
        await browser.execute((el) => el.scrollIntoView({ behavior: 'smooth' }), await MainPage.textAboveFooter);
        await browser.execute(() => {window.scrollBy(0, -100);});

        expect(MainPage.getText).toHaveValue('The place for anyone from anywhere to build anything')

        const visible = await MainPage.enterpriseText.isDisplayed();
        expect(visible).toBe(true);
        console.log(visible + " це відображається")
        await MainPage.clickOnEnterpriseText()

        expect(EnterprisePage.enterpriseText).toHaveValue('Pick your trial plan')
        await EnterprisePage.clickOnEnterpriseCloud()
    });

    //  TestCase 3 
    it('should check subscribe functional', async () => {
        browser.setWindowSize(1800, 1000)
        await browser.url('https://github.com/');

        await browser.execute((el) => el.scrollIntoView({ behavior: 'smooth' }), await MainPage.subscribeButton);

        await browser.waitUntil(async () => {
            return MainPage.subscribeButton.isDisplayed()
        }, 5000, 'Button is not displayed')

        let clickable = await MainPage.subscribeButton.isClickable()
        expect(clickable).toBe(true)
        await MainPage.clickOnSubscribeBtn()

        const currentLink = await browser.getUrl()
        const expectedLink = 'https://resources.github.com/newsletter/'
        expect(currentLink).toEqual(expectedLink)

        const visible = await ResoursesPage.subscribeText.isDisplayed();
        expect(visible).toBe(true);

        await browser.execute((el) => el.scrollIntoView({ behavior: 'smooth' }), await ResoursesPage.emailInput);

        await ResoursesPage.setEmailInput('example3412@gmail.com')

        await ResoursesPage.clickOnCountriesList()
        await ResoursesPage.clickOnSelectCountry()
        await ResoursesPage.clickOnCheckBox()
        await ResoursesPage.clickOnSubscribeBtn()

        await browser.waitUntil(async () => {
            return ResoursesPage.succesfulText.isDisplayed();
        }, 5000, 'Text is not displayed!')
    });

    //  TestCase 4 
    it('should check search functional', async () => {
        browser.setWindowSize(1800, 1000)
        await browser.url('https://github.com/');

        await MainPage.clickOnSerchInput()
        await MainPage.setSearchInput('python')

        await browser.waitUntil(async () => {
            return MainPage.searchListBox.isDisplayed()
        }, 5000, 'Results are not shown')
        await MainPage.clickOnSerchListBox()

        await browser.waitUntil(async () => {
            return SearchPage.searchResult.isDisplayed()
        }, 5000, 'Results are not shown')
        
        const currentLink = await browser.getUrl()
        console.log(currentLink);
        assert.ok(currentLink.includes('python'))

        const searchResultText = await SearchPage.searchResult.getText()
        const valueLower = searchResultText.includes('python')
        const valueCapital = searchResultText.includes('Python')
        assert.ok(valueLower || valueCapital)
    });

    //  TestCase 5 
    it('should check the price on the Picing page', async () => {
        browser.setWindowSize(1800, 1000)
        await browser.url('https://github.com/');

        await MainPage.clickOnPricingLink()

        await browser.waitUntil(async () => {
            return PricingPage.mainText.isDisplayed()
        }, 5000, 'Text is not displayed!')

        await browser.execute((el) => el.scrollIntoView({ behavior: 'smooth' }), await PricingPage.featuresLink)
        await PricingPage.clickOnFeaturesLink()
        await browser.waitUntil(async () => {
            return PricingPage.h1Text.isDisplayed()
        }, 5000, 'Text is not displayed!')
        await browser.execute(() => {window.scrollBy(0, -100);})
        expect(PricingPage.h1Text).toHaveValue('Compare features')
    });    
});
