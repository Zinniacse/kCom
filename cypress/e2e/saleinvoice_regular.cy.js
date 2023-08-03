import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const desiredLength = 10; // Desired length of the random string
  let randomString = '';

  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  function selectRandomStore() {
    // Get all the options in the stores dropdown
    cy.get('.vs__dropdown-option', { timeout: 10000 }).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  function selectRandomvalue() {
    // Get all the options in the stores dropdown
    cy.get('#vs3__combobox > .vs__selected-options', { timeout: 15000 }).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  const minNumber = 1000000000; // Minimum number (inclusive)
  const maxNumber = 9999999999; // Maximum number (inclusive)
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  function selectRandomOption(selector) {
    // Get all the options in the dropdown
    cy.get(selector, { timeout: 10000 }).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  function selectProduct() {
    // Get all the options in the product dropdown
    cy.get('#vs5__combobox').click();
    // Wait for a moment to allow the dropdown options to appear
    cy.wait(500); // You can adjust this delay if needed
    cy.get('.vs__dropdown-option', { timeout: 10000 }).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  function selectSize() {
    // Get all the options in the size dropdown
    cy.get('#vs6__combobox').click();
    // Wait for a moment to allow the dropdown options to appear
    cy.wait(500); // You can adjust this delay if needed
    cy.get('.vs__dropdown-option', { timeout: 10000 }).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  it('should be created successfully', () => {

    // Clear local storage
    cy.clearLocalStorage();

    cy.clearAllCookies();

    // Generate a random string to append to the base email
    const randomStrings = Math.random().toString(36).substring(7);
    // Base email address
    const baseEmail = 'test@gmail.com';
    // Unique email by appending random string
    const email = `${randomString} ${baseEmail}`;
    // Unique email by appending random string
    const name = 'Hair pin';
    // const name = `${baseStore} ${randomString}`;
    // const mobileNumber = '01712343434';
    const mobileNumber = `1 (${randomNumber.toString().substr(1, 3)}) ${randomNumber.toString().substr(4, 3)}-${randomNumber.toString().substr(7, 4)}`;
    const selectedDate = '25';
    cy.visit('/');

    // Click on sales
    cy.get('.navigation > :nth-child(5) > :nth-child(1)').click();
    cy.wait(3000);

    // Click on sale invoice
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
    selectRandomOption('.autosuggest__results'); // Assuming the results container has class .autosuggest__results

    // Delivery address
    cy.get('#vs3__combobox').click();
    selectRandomvalue();

    // Choose Receive Type (either pickup or delivery) randomly
    const receiveType = Cypress._.sample(['pickup', 'delivery']);
    if (receiveType === 'pickup') {
      cy.get('#receive-type > :nth-child(1)').click();
    } else {
      cy.get('#receive-type > :nth-child(2)').click();
    }

    // Select category
    cy.get('#vs4__combobox').click();
    selectRandomStore();

    // Select Product
    cy.get('#vs5__combobox').click();
    selectProduct();

    // Select Size
    cy.get('#vs6__combobox').click();
    selectSize();

    // Select quantity and save its value using alias
    const quantityValue = '5'; // Replace this with the desired quantity value
    cy.get('#quantity').type(quantityValue).as('quantity');

    // Save other input field values using aliases
    const representativeValue = 'Representative Name'; // Replace this with the desired representative name value
    cy.get('#representativeInput').type(representativeValue).as('representative');

    const productValue = 'Product Name'; // Replace this with the desired product name value
    cy.get('#productInput').type(productValue).as('product');


    // Assert that all required input fields are saved correctly
    cy.get('@quantity').should('have.value', quantityValue);
    cy.get('@representative').should('have.value', representativeValue);
    cy.get('@product').should('have.value', productValue);

    // Assert that the delivery address dropdown has a selected value
    cy.get('#vs3__combobox').should('not.have.class', 'vs--empty');

    // Click on the "Add" button
    cy.get('.col-md-4 > .btn-primary').click();

    // Assert that the added data is not empty
    cy.get('@quantity').should('not.have.value', '');
    cy.get('@representative').should('not.have.value', '');
    cy.get('@product').should('not.have.value', '');


  });
});
