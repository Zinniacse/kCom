//const { it } = require("mocha");

describe('The Home Page', () => {
  beforeEach(() => {

    cy.visit('https://stage.ayersfood.com/login'); // Replace with your login page URL
        cy.get('input[name="login-email"]').type('test@ecom.com'); // Replace with your username
        cy.get('input[name="login-password"]').type('password'); // Replace with your password
        // Submit Login Form
        cy.get('button[type="submit"]').click(); // Click on the login button  })
        cy.url().should('eq', 'https://stage.ayersfood.com/');
  })

  it('successfully loads', () => {
    //cy.visit('https://stage.ayersfood.com/');
      cy.get('.d-xl-none > .nav-item > .nav-link').click({ force: true });
       // Click on the cross icon to close the sidebar
       cy.wait(2000);
       cy.get('.nav-toggle').click(); // Replace with the actual selector for the cross icon

  })
})

