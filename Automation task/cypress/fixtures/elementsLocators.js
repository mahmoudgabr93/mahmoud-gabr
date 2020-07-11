'use strict';

module.exports = {
    registrationPage: {
        url: '/',
        createNewAccount: '[class="_42ft _4jy0 _cqr _4jy3 _4jy2 selected _51sy mrm"]',
        firstName: 'input[name="firstname"]',
        surName: 'input[name="lastname"]',
        mobileOrEmail: 'input[name="reg_email__"]',
        confirmMobileOrEmail: 'input[name="reg_email_confirmation__"]',
        password: 'input[name="reg_passwd__"]',
        birthDay: 'select[name="birthday_day"]',
        birthMonth: 'select[name="birthday_month"]',
        birthYear: 'select[name="birthday_year"]',
        gender: 'input[name="sex"]',
        signUpButton: 'button[name="websubmit"]',
        englishUrl: '#pageFooter > ul > li:nth-child(2) > a'
    },
    loginPage: {
        email: '[data-testid="royal_email"]',
        password: '[data-testid="royal_pass"]',
        loginBtn: '[data-testid="royal_login_button"]',
    },
    homePage: {
        profileBtn: '[data-testid="bookmark_icon_left_nav"]'
    }
}