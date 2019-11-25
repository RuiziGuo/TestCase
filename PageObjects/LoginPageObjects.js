import { Selector, t } from 'testcafe'

class LoginPageModel {

    //Selectors
    get accountInfo() { return Selector('#session_email_or_mobile_number') };
    get pwdInfo() { return Selector('#session_password') };
    get loginButton() { return Selector('.sign-in-button') };

    //Actions
    async inputAccountInfo(accountInfo, pwdInfo) {
        await t
            .typeText(this.accountInfo, accountInfo)
            .typeText(this.pwdInfo, pwdInfo)
            .click(this.loginButton)
    };

    async verifyDisplaySignUpPanel() {
        await t
            .expect('type["submit"]').match('注册')
    }
}

export default LoginPageModel = new LoginPageModel();