import './commands';
import 'cypress-file-upload';

describe('User login and create sale invoice', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });
  // function selectRandomOption(selector) {
  //   cy.get(selector, { timeout: 10000 }).should('be.visible').then(($options) => {
  //     const randomIndex = Math.floor(Math.random() * $options.length);
  //     cy.wrap($options[randomIndex]).click(); // Wrap the element to avoid timing issues
  //   });
  // }
  
  
  function selectRandomStore() {
    // Get all the options in the stores dropdown
    cy.get('.vs__dropdown-option').then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  function selectRandomvalue() {
    // Use force: true to bypass error checking
    cy.get('#vs3__combobox').click({ force: true });
    selectRandomStore('.vs__dropdown-option');
  }
  
  function selectProduct() {
    cy.get('#vs5__combobox').click();
    selectRandomStore('.vs__dropdown-option');
  }

  function selectSize() {
    cy.get('#vs6__combobox').click();
    selectRandomStore('.vs__dropdown-option');
  }

  it('should be created successfully', () => {
    const selectedDate = '25';

    cy.visit('/');

    cy.get('.navigation > :nth-child(5) > :nth-child(1)').click();
    cy.wait(3000);

    cy.get('#__BVID__129 > :nth-child(3) > .d-flex').click();

    // Add store
    cy.get('#vs1__combobox').click();
    selectRandomStore();

    // Add representative
    cy.get('#vs2__combobox').click();
    selectRandomStore();

    // Invoice Date - pick up from calendar
    cy.get(':nth-child(2) > .row > :nth-child(3) > .input').click();
    cy.contains('.flatpickr-day', selectedDate).click();

    // Customer Information (Regular Customer)

    // Click on the input to open the dropdown
    cy.get('#autosuggest__input_ajax').click();
    // Select from dropdown
    selectRandomStore('.autosuggest__results');

    // Delivery address
    cy.get('#vs3__combobox').click();
    selectRandomStore();

    // Choose Receive Type (either pickup or delivery) randomly
    const receiveType = Cypress._.sample(['pickup', 'delivery']);
    if (receiveType === 'pickup') {
      cy.get('#receive-type > :nth-child(1)').click();
      // Assuming "pickup date" should be after "invoice date"
      const pickupDate = '27'; // Replace '27' with a suitable date after the 'selectedDate'
      cy.get(':nth-child(2) > .row > :nth-child(3) > .input').click();
      cy.contains('.flatpickr-day', pickupDate).click();
    } else {
      cy.get('#receive-type > :nth-child(2)').click();
      // Assuming "delivery date" should be after "invoice date"
      const deliveryDate = '28'; // Replace '28' with a suitable date after the 'selectedDate'
      cy.get(':nth-child(2) > .row > :nth-child(3) > .input').click();
      cy.contains('.flatpickr-day', deliveryDate).click();
    }

    // Select category
    cy.get('#vs4__combobox').click();
    selectRandomStore('.vs__dropdown-option');

    // Select Product
    cy.get('#vs5__combobox').click();
    selectProduct();

    // Select Size
    cy.get('#vs6__combobox').click();
    selectSize();

    //add quantity
    cy.get('#quantity').type('1');

    //add button
    cy.get('.col-md-4 > .btn-primary').click();
    cy.wait(5000);

    // After clicking the submit button, check the URL
    cy.get('.offset-md-5 > .btn').click();
    // cy.url().should('eq', 'https://stage.ayersfood.com/sale/invoice-list');

    // Assert that all fields are not empty
    cy.get('#vs1__combobox').should('not.have.value', '', { force: true });
    cy.get('#vs2__combobox').should('not.have.value', '', { force: true });
    cy.get('.flatpickr-day.selected').should('have.length', 1, { force: true });
    cy.get('#autosuggest__input_ajax').should('not.have.value', '', { force: true });
    cy.get('#vs3__combobox').should('not.have.value', '', { force: true });
    cy.get('#vs4__combobox').should('not.have.value', '', { force: true });
    cy.get('#vs5__combobox').should('not.have.value', '', { force: true });
    cy.get('#vs6__combobox').should('not.have.value', '', { force: true });
    cy.get('#quantity').should('not.have.value', '', { force: true });

    // // Add validation for category, product, and size
    // cy.get('#vs4__combobox').should('have.value', 'Frozen Vegetable');
    // cy.get('#vs5__combobox').should('have.value', 'AYERS-SURAN-300G-FVA300');
    // cy.get('#vs6__combobox').should('have.value', '300G*12');
  });
});
