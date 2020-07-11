/// <reference types="Cypress" />
const { loginPage } = require("../fixtures/elementsLocators");
const { login_validations } = require("../fixtures/validations")

class LoginPage {
    visit() {
        cy.visit();
    }
    addEmail(email) {
        const field = cy.get(loginPage.email);
        field.clear({force: true});
        field.type(email, { force: true });
        return this;
    }

    addPassword(password) {
        const field = cy.get(loginPage.password);
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    clickLogin() {
        const field = cy.get(loginPage.loginBtn);
        field.click({force: true});
        return this;
    }

    assertEmailInvalidMessage() {
        expect(cy.contains(login_validations.invalid_email)).to.exist;
    }

    assertPasswordInvalidMessage() {
        expect(cy.contains(login_validations.invalid_password)).to.exist;
    }
}

export default LoginPage;
