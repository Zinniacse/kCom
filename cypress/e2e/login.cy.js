//const { it } = require("mocha");

describe('The Home Page', () => {
  beforeEach(() => {
    cy.viewport(1327,882)
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
      //  // Click on the cross icon to close the sidebar
    
      cy.get('.active > .d-flex').click();
      cy.get('.navigation > :nth-child(2) > [href="#"]').click();

      cy.wait(2000); // Wait for 2 seconds before interacting with the element
      cy.get('#__BVID__96 > :nth-child(1) > .d-flex').contains('User').click();
      cy.get('#__BVID__96 > :nth-child(2) > .d-flex').contains('Roles').click();
      cy.get('#__BVID__96 > :nth-child(3) > .d-flex').contains('User Roles').click();
      
      cy.get('.active > .d-flex').click();
      cy.get('.navigation > :nth-child(3) > [href="#"]').click();
      cy.wait(2000); // Wait for 2 seconds before interacting with the element
      cy.get('#__BVID__109 > :nth-child(1) > .d-flex').contains('Suppliers').click();
      cy.get('#__BVID__109 > :nth-child(2) > .d-flex').contains('Customers').click();
      cy.get('#__BVID__109 > :nth-child(3) > .d-flex').contains('Customers Group').click();
      cy.get('#__BVID__109 > :nth-child(4) > .d-flex').contains('Customers Report').click();
      
  })
  
})
