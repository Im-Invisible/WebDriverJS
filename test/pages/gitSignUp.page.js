class SignUpPage {
    get gitMainPage() {return $('a[href="https://github.com/"]')}
    get welcomeText() {return $('.text-mono.text-gray-light-mktg')}
    get email() {return $('#email')}
    get emailButton() {return $('button[data-optimizely-event="click.signup_continue.email"]')}
    get password() {return $('#password')}
    get passwordButton() {return $('button[data-optimizely-event="click.signup_continue.password"]')}
    get username() {return $('#login')}
    get usernameButton() {return $('button[data-optimizely-event="click.signup_continue.username"]')}
    get spamEmail() {return $('#opt_in')}
    get spamEmailButton() {return $('button[data-optimizely-event="click.signup_continue.opt-in"]')}


    async setEmailInput(value) {
        await this.email.setValue(value)
    }

    async clickOnEmailBtn() {
        await this.emailButton.click()
    }

    async setPasswordInput(value) {
        await this.password.setValue(value)
    }

    async clickOnPasswordBtn() {
        await this.passwordButton.click()
    }

    async setUsernameInput(value) {
        await this.username.setValue(value)
    }

    async clickOnUsernameBtn() {
        await this.usernameButton.click()
    }
    
    async setSpamInput(value) {
        await this.spamEmail.setValue(value)
    }

    async clickOnSpamEmailBtn() {
        await this.spamEmailButton.click()
    }
}

export default new SignUpPage()