describe('Login', () => {
  it('should log in successfully', () => {
    cy.visit('https://stage.ayersfood.com/login'); // Replace with your login page URL

    // Login Credentials
    cy.get('input[name="login-email"]').type('test@ecom.com'); // Replace with your username
    cy.get('input[name="login-password"]').type('password'); // Replace with your password
    // Submit Login Form
    cy.get('button[type="submit"]').click(); // Click on the login button
    
    // Add assertions to verify successful login
    cy.wait(2000); // Wait for 2 seconds
    cy.url().should('eq', 'https://stage.ayersfood.com/'); // Replace with the URL of the dashboard page after successful login
  //  cy.contains('h5', 'Welcome Demo User').should('exist'); // Replace with an element or text that confirms successful login
  // Assert side navbar behavior after login
  it('should navigate using the side navbar', () => {
    // Perform navigation using the side navbar
    cy.get('.nav-link .menu-item').contains('Home').click();
    cy.url().should('include', '/home'); // Replace with the expected URL after navigating to the 'Home' page

    cy.get('.side-navbar .menu-item').contains('User Management').click();
    cy.url().should('include', '/user-management'); // Replace with the expected URL after navigating to the 'User Management' page

    cy.get('.side-navbar .menu-item').contains('Contacts').click();
    cy.url().should('include', '/contacts'); // Replace with the expected URL after navigating to the 'Contacts' page

    // Add more navigation steps for the remaining side navbar items

    // Assert active states of side navbar items
    cy.get('.side-navbar .menu-item').contains('Home').should('have.class', 'active');
    cy.get('.side-navbar .menu-item').contains('User Management').should('have.class', 'active');
   
  // Perform navigation using the side navbar
 // cy.get('.app.menu-item').contains('menu-title text-truncate').click();
 // cy.url().should('include', '/products'); // Replace with the expected URL after navigating to the 'Products' page

  });
});

});
