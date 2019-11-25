import { Selector, t } from 'testcafe'

class MainPageModel {

    //Selectors
    get loginButton() { return Selector('#sign_in') };
    get signupButton() { return Selector('#sign_up') };

    //Actions
    async clickSigninButton() {
        await t
            .click(this.loginButton)
    };

    async clickSignupButton() {
        await t
            .click(this.signupButton)
    };
}
export default MainPageModel = new MainPageModel();