import { expect } from '@wdio/globals'
import assert from 'assert/strict'
import MainPage from "./../pages/main.page.js"
import GameDevPage from "./../pages/gamedev.page.js"
import GameDevTopRatesPage from "./../pages/gamedevToprates.page.js"

xdescribe('Webdriverio main page', () => {
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle()
        console.log(title);
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $('#username')
        await input.addValue('hello')
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue('hello123')
    });

    xit('should show setValue command', async () =>{
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $('#username')
        await input.setValue('world')
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue('world')
    });

    xit('should show click command', async () =>{
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $('#username')
        await inputUsername.addValue('tomsmith')
        await browser.pause(2000)

        let inputPassword = await $('#password')
        await inputPassword.addValue('SuperSecretPassword!')
        await browser.pause(2000)
        
        await loginButton.click()
        await browser.pause(4000)
    });

    xit('should show getAttribute command', async () =>{
        await browser.url('https://dou.ua/search');

        let inputSearch = await $('#gsc-i-id1')
        let attr = await inputSearch.getAttribute('aria-label')
        console.log('Placeholder attribute is: ' + attr)

        await inputSearch.setValue('Cat')
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log('Value attribute is: ' + attr)
    });

    xit ('should show getLocation command', async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log('Location is: ' + location)

        let xLocation = await inputSearch.getLocation('x')
        console.log('Location by x is: ' + xLocation)
    });

    xit('should show getText command', async () =>{
        await browser.url('https://webdriver.io/');

        let subtitle = await $('.hero__subtitle')
        console.log('Subtitle text is: ' + await subtitle.getText())
    });
    // Homework 1
    xit('Should open WebdriverIO (Homework 1)', async () =>{
        await browser.url('https://webdriver.io/');

        let navbar_button = await $('.navbar__toggle.clean-btn')
        let API_link = await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[1]/ul/li[2]/a')
        let h1_title = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/header/h1')
        let search_click = await $('.DocSearch-Button-Placeholder')
        let search_input = await $('.DocSearch-Input')
        let reset_button = await $('.DocSearch-Reset')

        await browser.pause(1000)
        await navbar_button.click()
        await browser.pause(1000)
        await API_link.click()
        await browser.pause(1000)
        await expect(h1_title).toHaveText('Introduction')
        await browser.pause(1000)
        await search_click.click()
        await browser.pause(1000)
        await search_input.addValue('All is done')
        await browser.pause(1000)
        await reset_button.click()
        await browser.pause(1000)
    });

    xit('should show if an element is clicable', async () =>{
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')

        let clickable = await blogButton.isClickable()
        console.log('Is clickable: '+ clickable)
    });

    xit('should show if an element is displayed', async () =>{
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')

        let displayed = await blogButton.isDisplayed()
        console.log('Is displayed: '+ displayed)
    });

    xit('should show if an element is visible', async () =>{
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')

        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log('Blog button is displayed in viewport: '+ displayedInViewport) // true

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')

        let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
        console.log('Footer is displayed in viewport: '+ footerIsDisplayedInViewport) // false
    });

    xit('should show if an element is enabled', async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log('Get Started button is enabled: ' + isEnabled)
    });

    xit('should show if an element is focused', async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log('Get Started button is focused before click: ' + isFocused)
        await browser.pause(2000)
        await getStartedButton.click()
        console.log('Get Started button is focused after click: ' + isFocused)
        await browser.pause(2000)
    });

    xit('should show movement to element action', async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
    });

    xit('should show save screeenshot command', async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenshot.png')
    });

    xit('should switch to another window', async () => {
        await browser.url('https://webdriver.io/');

        await browser.newWindow('https://www.google.com/')
        await browser.pause(2000)
        await browser.switchWindow('https://webdriver.io/');
        await browser.pause(2000)
    });

    xit('should show waitUntil command', async () => {
        await browser.url('https://webdriver.io/');

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]').isDisplayed();
        }, 5000, 'Button is not displayed')
    });

    xit('should get html for certain elements', async () => {
        await browser.url('https://webdriver.io/');

        const outerHTML = await $('.dropdown__menu').getHTML()
        console.log('outerHTML is: ' + outerHTML)

        const innerHTML = await $('.dropdown__menu').getHTML(false)
        console.log('innerHTML is: ' + innerHTML)
    });
    //Homework 2
    xit('should open API webpage and make check link', async () => {
        await browser.url('https://webdriver.io/');

        const navbar_button = await $('.navbar__toggle.clean-btn')
        await browser.pause(1000)
        await navbar_button.click()
        await browser.pause(1000)

        const APIButton = await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[1]/ul/li[2]/a')
        await APIButton.click()
        console.log(APIButton)
        await browser.pause(1000)

        const footerSection = await $('.footer__link-item[href="/blog"]')
        await footerSection.scrollIntoView()
        let linkBlog = await footerSection.isDisplayed()
        console.log('Link blog is displayed' + linkBlog)
        await browser.pause(1000)

        const tagHTML = await $('.pagination-nav__link').getHTML()
        console.log('Tag HTML is: ' + tagHTML)
        
        const nextLinkButton = await $('.pagination-nav__label')
        let clickable = await nextLinkButton.isClickable()
        console.log('Next button is clickable' + clickable)
        let visible = await nextLinkButton.isDisplayedInViewport()
        console.log('Next button is visible' + visible)
        await browser.pause(1000)
        await nextLinkButton.click()
        await browser.pause(1000)

        await browser.waitUntil(async () => {
            return $('//*[@id="webdriver-protocol"]').isDisplayed();
        }, 5000, 'Title is not displayed')
    });

    xit('should get html for certain elements', async () => {
        await browser.url('https://webdriver.io/');

        assert(1 === 1, '1 not equal 1')
        assert(1 === 'hello', '1 not equal hello')
    });

    xit('done', async () => {
        await browser.url('https://dou.ua/');

        await MainPage.clickOnBandBtn()
        await browser.pause(2000)

        await MainPage.clickOnforumBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)

        await GameDevPage.clickTopGamesRateLink()
        expect(GameDevTopRatesPage.title).toHaveValue('Матеріали на тему «топ ігор місяця»')
    });
    
});

