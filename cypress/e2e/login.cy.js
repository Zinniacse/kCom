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
  
  
    //User Management
  
        cy.get('.active > .d-flex').click();
        cy.get('.navigation > :nth-child(2) > [href="#"]').click();
  
        //cy.wait(1000); // Wait for 2 seconds before interacting with the element
        cy.get('#__BVID__96 > :nth-child(1) > .d-flex').contains('User').click();
        cy.url().should('include', 'https://stage.ayersfood.com/user-management/users/list'); // Check if the URL contains '/user
        //cy.wait(1000); 
  
        cy.get('#__BVID__96 > :nth-child(2) > .d-flex').contains('Roles').click();
        cy.url().should('include', 'https://stage.ayersfood.com/user-management/roles/list'); // Check if the URL contains '/roles'
       // cy.wait(1000); 
  
        cy.get('#__BVID__96 > :nth-child(3) > .d-flex').contains('User Roles').click();
        cy.url().should('include', 'https://stage.ayersfood.com/user-management/user-roles/list'); // Check if the URL contains '/user-roles'
        //cy.wait(1000); 
  
  
        /// Contacts
        cy.get('.active > .d-flex').click();
        cy.get('.navigation > :nth-child(3) > [href="#"]').click();
      //  cy.wait(1000); // Wait for 2 seconds before interacting with the element
  
        
        cy.get('#__BVID__109 > :nth-child(1) > .d-flex').contains('Suppliers').click();
        cy.url().should('include', 'https://stage.ayersfood.com/contacts/supplier/list'); // Check if the URL contains '/user-roles'
      //  cy.wait(1000); 
  
        cy.get('#__BVID__109 > :nth-child(2) > .d-flex').contains('Customers').click();
        cy.url().should('include', 'https://stage.ayersfood.com/contacts/customer/list'); // Check if 
     //   cy.wait(1000);
  
        cy.get('#__BVID__109 > :nth-child(3) > .d-flex').contains('Customers Group').click();
        cy.url().should('include', 'https://stage.ayersfood.com/contacts/customer-group/list'); // Check if 
       // cy.wait(1000); 
  
       
        cy.get('#__BVID__109 > :nth-child(4) > .d-flex').contains('Customers Report').click();
        cy.url().should('include', 'https://stage.ayersfood.com/contacts/customer-report/list'); // Check if 
       // cy.wait(1000); 
  
  // Purchase
        cy.get('.active > .d-flex').click();
        cy.get('.navigation > :nth-child(4) > [href="#"]').click();
  
  
        cy.wait(1000); // Wait for 2 seconds before interacting with the element
        cy.get('#__BVID__125 > :nth-child(1) > .d-flex').contains('Purchase Order Handle').click();
        cy.url().should('include', 'https://stage.ayersfood.com/purchase-order/create'); // Check if 
      //  cy.wait(1000); 
  
        cy.get('#__BVID__125 > :nth-child(2) > .d-flex').contains('Purchase Order List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/purchase-order/list'); // Check if 
     //   cy.wait(1000); 
  
        cy.get('#__BVID__125 > :nth-child(3) > .d-flex').contains('Purchase Return Handle').click();
        cy.url().should('include', 'https://stage.ayersfood.com/purchase/purchase-return-handle'); // Check if 
      //  cy.wait(1000); 
  
        cy.get('#__BVID__125 > :nth-child(4) > .d-flex').contains('Purchase Return List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/purchase/purchase-return/list'); // Check if 
      //  cy.wait(1000); 
  
  
  // Sales
  
        cy.get('.active > .d-flex').click();
        cy.get('.navigation > :nth-child(5) > [href="#"]').click();
      //  cy.wait(1000); // Wait for 2 seconds before interacting with the element
  
  
        cy.get('#__BVID__141 > :nth-child(1) > .d-flex').contains('Quotation Handle').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/quotation-handle'); // Check if 
      //  cy.wait(1000);
  
        cy.get('#__BVID__141 > :nth-child(2) > .d-flex').contains('Quotation List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/quotation-list'); // Check if 
     //   cy.wait(1000);
  
  
        cy.get('#__BVID__141 > :nth-child(3) > .d-flex').contains('Invoice Handle').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/invoice-handle'); // Check if 
       // cy.wait(1000);
  
  
  
        cy.get('#__BVID__141 > :nth-child(4) > .d-flex').contains('Invoice List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/invoice-list'); // Check if 
  
      //  cy.wait(1000);
  
  
  
        cy.get('#__BVID__141 > :nth-child(5) > .d-flex').contains('Sale Return Handle').click();
  
        cy.url().should('include', 'https://stage.ayersfood.com/sale/sale-return-handle'); // Check if 
      //  cy.wait(1000);
  
  
  
        cy.get('#__BVID__141 > :nth-child(6) > .d-flex').contains('Sale Return List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/sale-return/list'); // Check if 
     //   cy.wait(1000);
  
  
  
        cy.get('#__BVID__141 > :nth-child(7) > .d-flex').contains('Discount List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/discount-list'); // Check if 
  
        cy.get('#__BVID__141 > :nth-child(8) > .d-flex').contains('Reports').click();
        // cy.url().should('include', 'https://stage.ayersfood.com/sale/reports/item-summary'); // Check if 
        
        cy.get('#__BVID__166 > :nth-child(1) > .d-flex').contains('Item Summary').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/reports/item-summary'); // Check if 
        cy.get('#__BVID__166 > :nth-child(2) > .d-flex').contains('Item Details').click();
        cy.url().should('include', 'https://stage.ayersfood.com/sale/reports/item-details'); // Check if 
  
  
  
        // Products
  
        cy.get('.active > .d-flex').click();   
        cy.get('.navigation > :nth-child(6) > [href="#"]').click();
       // cy.wait(1000); // Wait for 2 seconds before interacting with the element
  
  
        cy.get('#__BVID__176 > :nth-child(1) > .d-flex').contains('Product List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/product/list'); // Check if 
        cy.wait(1000);
       
        cy.get('#__BVID__176 > :nth-child(2) > .d-flex').contains('Brands').click();
        cy.url().should('include', 'https://stage.ayersfood.com/products/brand/list'); // Check if 
        //cy.wait(1000);
  
       
        cy.get('#__BVID__176 > :nth-child(3) > .d-flex').contains('Units').click();
        cy.url().should('include', 'https://stage.ayersfood.com/products/unit/list'); // Check if 
      //  cy.wait(1000);
  
        cy.get('#__BVID__176 > :nth-child(4) > .d-flex').contains('Categories').click();
        cy.url().should('include', 'https://stage.ayersfood.com/products/category-list'); // Check if 
      //  cy.wait(1000);
  
      
  
        cy.get('#__BVID__176 > :nth-child(5) > .d-flex').contains('Reports').click();
        // cy.url().should('include', 'https://stage.ayersfood.com/sale/reports/item-summary'); // Check if 
        
        cy.get('#__BVID__192 > :nth-child(1) > .d-flex').contains('Product Report').click();
        cy.url().should('include', 'https://stage.ayersfood.com/products/report/product-report'); // Check if 
        cy.get('#__BVID__192 > :nth-child(2) > .d-flex').contains('Stock Summary').click();
        cy.url().should('include', 'https://stage.ayersfood.com/products/report/stock-summary'); // Check if 
  
  
  
        // Accounting
  
        cy.get('.active > .d-flex').click();   
        cy.get('.navigation > :nth-child(7) > [href="#"]').click();
     //   cy.wait(1000); // Wait for 2 seconds before interacting with the element
  
  
        cy.get('#__BVID__202 > :nth-child(1) > .d-flex').contains('COA List').click();
        cy.url().should('include', 'https://stage.ayersfood.com/accounting/coa-list'); // Check if 
    //    cy.wait(1000);
       
        cy.get('#__BVID__202 > :nth-child(2) > .d-flex').contains('New Payment').click();
        cy.url().should('include', 'https://stage.ayersfood.com/accounting/payment-receive-handle'); // Check if 
   //     cy.wait(1000);
  
       
        cy.get('#__BVID__202 > :nth-child(3) > .d-flex').contains('Payment Receive').click();
        cy.url().should('include', 'https://stage.ayersfood.com/accounting/payment-receive-list'); // Check if 
     //   cy.wait(1000);
  
        cy.get('#__BVID__202 > :nth-child(4) > .d-flex').contains('Undeposit Funds').click();
        cy.url().should('include', 'https://stage.ayersfood.com/accounting/undeposit-funds'); // Check if 
     //   cy.wait(1000);
  
        cy.get('#__BVID__202 > :nth-child(5) > .d-flex').contains('Deposit Funds').click();
        cy.url().should('include', 'https://stage.ayersfood.com/accounting/deposit-funds'); // Check if 
      //  cy.wait(1000);
  
  
        })
      })
      