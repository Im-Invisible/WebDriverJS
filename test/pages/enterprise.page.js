class EnterprisePage {
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get enterpriseText() {return $('.d-none.d-md-block.mt-0.mb-3.text-center.h1.lh-condensed-ultra')}
    get enterpriseCloud() {return $('//h2[@class="mb-1 h5-mktg text-center" and text()="Enterprise Cloud"]')}


    async clickOnEnterpriseCloud() {
        await this.enterpriseCloud.click()
    }
}

export default new EnterprisePage()