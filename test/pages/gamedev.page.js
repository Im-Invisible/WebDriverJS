class GameDevPage {
    get companyGameDevsRateLink() {return $('//*[text()="Рейтинг найбільших геймдев-компаній"]')}
    get topGamesRateLink() {return $('//*[text()="Топ ігор місяця"]')}

    async clickTopGamesRateLink(){
        this.topGamesRateLink.click()
    }
}

export default new GameDevPage()