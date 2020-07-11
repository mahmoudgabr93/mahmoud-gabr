/// <reference types="Cypress" />

import LoginPage from '../pages/login-page';
import RegistrationPage from '../pages/registration-page';
import HomePage from '../pages/home-page';
const faker = require('faker');

describe('Signup and Login test suite', () => {
    let testData;
    const loginPage = new LoginPage();
    const registrationPage = new RegistrationPage();
    const homePage = new HomePage();

    before(() => {
        cy.fixture('testData').then(data => {
            testData = data;
            return testData;
        })
    });

    beforeEach(() => registrationPage.openFacebook());

    describe('Sign up test cases', () => {
        const email = faker.internet.exampleEmail(faker.name.firstName(), faker.name.lastName());
        it('check that user can\'t register with invalid email', () => {
            registrationPage.addFirstName(testData.firstname);
            registrationPage.addLastName(testData.lastname);
            registrationPage.addEmail('mail@fake');
            registrationPage.addConfirmEmail('mail@fake');
            registrationPage.addPassword(testData.password);
            registrationPage.addDateOfBirth(testData.DayOfBirth, testData.MonthOfBirth, testData.YearOfBirth);
            registrationPage.selectGender('male');
            registrationPage.clickSignUp();
            registrationPage.assertInvalidEmail();
        });

        it('check that user can\'t register with invalid date of birth', () => {
            registrationPage.addFirstName(testData.firstname);
            registrationPage.addLastName(testData.lastname);
            registrationPage.addEmail(email);
            registrationPage.addConfirmEmail(email);
            registrationPage.addPassword(testData.password);
            registrationPage.addDateOfBirth(testData.DayOfBirth, 'Month', testData.YearOfBirth);
            registrationPage.selectGender('female');
            registrationPage.clickSignUp();
            registrationPage.assertInvalidDateOfBirth();
        });
    })

    describe('Login test cases', () => {
        it('Check that existing facebook user can login successfully', () => {
            loginPage.addEmail(testData.email);
            loginPage.addPassword(testData.password);
            loginPage.clickLogin();
            homePage.assertHomePageIsDisplayed();
        });

        it('Check that a validation message is displayed when user login with empty email', () => {
            loginPage.addPassword(testData.password);
            loginPage.clickLogin();
            cy.wait(5000);
            loginPage.assertEmailInvalidMessage();
        });

        it('Check that a validation message is displayed when user login with empty password', () => {
            loginPage.addEmail(testData.email);
            loginPage.clickLogin();
            cy.wait(5000);
            loginPage.assertPasswordInvalidMessage();
        });

        it('Check that a validation message is displayed when user login with empty email and password', () => {
            loginPage.clickLogin();
            cy.wait(5000);
            loginPage.assertEmailInvalidMessage();
        });

        it('Check that a validation message is displayed when user login with invalid password', () => {
            loginPage.addEmail(testData.email);
            loginPage.addPassword(testData.invalidPassword);
            loginPage.clickLogin();
            loginPage.assertPasswordInvalidMessage();
        });
    });
});
