Cypress.Commands.add('login', () => {
    
  cy.visit('/login');

  // Perform login actions here
  cy.get('#login-email').type('test@ecom.com');
  cy.get('#login-password').type('password');

  // Submit the login form
  cy.get('.btn-primary').click();
});

Cypress.Commands.add('getSession', () => {
  return cy.wrap(Cypress.env('loginSession'));
});

