/// <reference types="cypress" />

describe('e2e tests for main flow', () => {
const username = 'qatest1999';
const password = 'Qatest123!';
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });

    it('should register a new user', () => {
      cy.get('#signin2').should('contain', 'Sign up').click();
      cy.get('#sign-username').type(username);
      cy.get('#sign-password').type(password);
      cy.get('.btn').should('contain', 'Sign up').click();
    });
  
    it('should login with a user', () => {
      cy.get('#login2').should('contain', 'Log in').click();
      cy.get('#loginusername').type(username);
      cy.get('#loginpassword').type(password);
      cy.get('.btn').should('contain', 'Log in').click();
    });
  
    it('should add Samsung s6 to the cart', () => {
      cy.get('.hrefch').should('contain', 'Samsung galaxy s6').click();
      cy.get('.btn').should('contain', 'Add to cart').click();
      cy.on('window:alert', (txt) => {
        expect(txt).to.should('contain', 'Product added');
      })
    });
  });