class SearchPage{
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get pricingText() {return $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}
    get searchResult() {return $('span[class="Text-sc-17v1xeu-0 qaOIC search-match"]')}        
}

export default new SearchPage()