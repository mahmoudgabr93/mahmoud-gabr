/// <reference types="Cypress" />
const { homePage } = require("../fixtures/elementsLocators");

class HomePage {
    assertHomePageIsDisplayed() {
        cy.get(homePage.profileBtn).should('be.visible');
     }
}

export default HomePage;
