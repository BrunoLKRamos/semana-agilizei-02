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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0pMjEZJSPWm6YVcxvjcgS1AN16pk0fW0BzXhusXwKbcwXj2fLqEcO7L%2FagDgN6wfOl3at%2Ftrx6uc4S6LQnjs41B6cJybOMjoFB9vWJS16JmLocee%2Bqarh1zPHyrFQmSF%2BKi2EjDXGJfcIh8Lcn2NwKwXPRcYjOdVtRXcFqUYTFADIiDElpyGZfEKjUqdDE%2BjRCcE%2FD%2Fp9GKYiBG319Siyz%2BzrtCUIPAxGryAutodANUmEwfrhZPCQIugS%2FSA%2BYvopteAtmUV%2BtNDnJauT0cNH9rM9z8O02kvPd2E9WrNKp3%2BDYf8iUJLd8slPnvyzv%2B8PpkKr8Gaz0%2F7nv3hMUykonFYW2u9TWgnCWiLmAWyDwNXSr1XMOpsBYZejNtdP1gymtooI4DwBkfspxvDI886ezM%3D000318'
    )
})
