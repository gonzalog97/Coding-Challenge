require('cypress-xpath');
Cypress.Commands.add('login',(username,password)=> { 
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get("#login2").click()
    cy.wait(2000)
    cy.contains("Log in").should("be.visible")
    cy.get("#loginusername").type(username)
    cy.get("#loginpassword").type(password)
    cy.xpath('/html/body/div[3]/div/div/div[3]/button[2]').click()
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })