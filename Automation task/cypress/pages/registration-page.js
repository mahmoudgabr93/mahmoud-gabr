/// <reference types="Cypress" />
const { registrationPage } = require("../fixtures/elementsLocators");
const { signup_validations } = require("../fixtures/validations")


class RegistrationPage {
    openFacebook() {
        cy.visit("http://www.facebook.com/", {failOnStatusCode: false});
        cy.get(registrationPage.englishUrl).click({ force: true });
    }
    addFirstName(firstName) {
        const field = cy.get(registrationPage.firstName)
        field.clear({force: true});
        field.type(firstName, { force: true });
        return this;
    }

    addLastName(lastName) {
        const field = cy.get(registrationPage.surName)
        field.clear({force: true});
        field.type(lastName, { force: true });
        return this;
    }

    addMobileNumber(mobileNo) {
        expect(mobileNo).to.have.lengthOf(11);
        const field = cy.get(registrationPage.mobileOrEmail);
        field.clear({force: true});
        field.type(mobileNo, { force: true });
        return this;
    }

    addEmail(email) {
        const field = cy.get(registrationPage.mobileOrEmail);
        field.clear({force: true});
        field.type(email, { force: true });
        return this;
    }

    addConfirmEmail(email) {
        const field = cy.get(registrationPage.confirmMobileOrEmail);
        field.clear({force: true});
        field.type(email, { force: true });
        return this;
    }

    addPassword(password) {
        const field = cy.get(registrationPage.password);
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    addDateOfBirth(day, month, year) {
        cy.get(registrationPage.birthDay).select(day);
        switch(month) {
            case "January":
                cy.get(registrationPage.birthMonth).select('1');
                break;
            case "February":
                cy.get(registrationPage.birthMonth).select('2');
                break;
            case "March":
                cy.get(registrationPage.birthMonth).select('3');
                break;
            case "April":
                cy.get(registrationPage.birthMonth).select('4');
                break;
            case "May":
                cy.get(registrationPage.birthMonth).select('5');
                break;
            case "June":
                cy.get(registrationPage.birthMonth).select('6');
                break;
            case "July":
                cy.get(registrationPage.birthMonth).select('7');
                break;
            case "August":
                cy.get(registrationPage.birthMonth).select('8');
                break;
            case "September":
                cy.get(registrationPage.birthMonth).select('9');
                break;
            case "October":
                cy.get(registrationPage.birthMonth).select('10');
                break;
            case "November":
                cy.get(registrationPage.birthMonth).select('11');
                break;
            case "December":
                cy.get(registrationPage.birthMonth).select('12');
                break;
            default:
                cy.get(registrationPage.birthMonth).select('0');
                break;
        }
        cy.get(registrationPage.birthYear).select(year);
    }

    selectGender(gender) {
        if(gender.toLowerCase() === 'male') {
            cy.get(registrationPage.gender).eq(1).click()
        } else if (gender.toLowerCase() === 'female') {
            cy.get(registrationPage.gender).eq(0).click()
        } else {
            cy.get(registrationPage.gender).eq(2).click();
            cy.get('select[name="preferred_pronoun"]').select('She: "Wish her a happy birthday!"');
        }
    }

    clickSignUp() {
        const field = cy.get(registrationPage.signUpButton)
        field.click();
        return this;
    }

    assertEmptyNameValidation() {
        expect(cy.contains(signup_validations.WHATS_YOUR_NAME)).to.exist;
    }

    assertEmptyNameValidation() {
        expect(cy.contains(signup_validations.WHATS_YOUR_NAME)).to.exist;
    }

    assertInvalidDateOfBirth() {
        expect(cy.contains(signup_validations.SELECT_YOUR_BIRTHDAY)).to.exist;
    }

    assertInvalidEmail() {
        expect(cy.contains(signup_validations.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    }
}

export default RegistrationPage;
