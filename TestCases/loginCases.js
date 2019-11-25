import MainPageObjects from '../PageObjects/MainPageObjects';
import LoginPageObjects from '../PageObjects/LoginPageObjects';

fixture`Login Jianshu`
    .page`https://www.jianshu.com/`;

test('Login Jianshu', async t => {
    await MainPageObjects.clickSigninButton();
    await LoginPageObjects.inputAccountInfo('13152158959', '123456');
});

test('Verify signup panel', async t => {
    await MainPageObjects.clickSignupButton();
    await LoginPageObjects.verifyDisplaySignUpPanel();
});