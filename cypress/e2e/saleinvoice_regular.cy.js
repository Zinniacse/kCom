import "./commands";
import "cypress-file-upload";

describe("User login and create sale invoice", () => {
  before(() => {
    cy.login();
    cy.wait(4000);
  });
  let categorySelected = false;
  let productSelected = false;
  function selectRandomStore() {
    // Get all the options in the stores dropdown
    cy.get(".vs__dropdown-option").then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  //this function for selecting dropdown
  function selectRandomOption(selector) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  //common function for seecting items
  function selectItems(selector, index) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex = index;
      console.log(`random index is ${randomIndex}`);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
      categorySelected = true;
    });
  }
  function selectItems1(selector, index) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex = index;
      console.log(`random index is ${randomIndex}`);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
    productSelected = true;
  }
  function selectItems2(selector, index) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex =
        index != undefined
          ? index
          : Math.floor(Math.random() * $options.length);
      console.log(`sec ${selector} and index is ${randomIndex}`);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
      productSelected = true;
    });
  }
  const selectDeliveryAddress = () => {
    // // Click on the input field to trigger the dropdown
    cy.get(".vs__dropdown-toggle").click({ multiple: true });
    //cy.wait(50000);
    cy.get(".vs__dropdown-menu", { timeout: 10000 }).then(($options) => {
      // Select a random option index
      console.log("options are ", $options);
      const randomIndex = Math.floor(Math.random() * $options.length);
      // // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  };

  it("should be created successfully", () => {
    const selectedDate = "11";

    cy.visit("/");

    //select saleinvoice handle

    cy.get(".navigation > :nth-child(5) > :nth-child(1)").click();
    cy.wait(3000);

    cy.get("#__BVID__109 > :nth-child(3) > .d-flex").click();

    //Add Store
    cy.get("#vs1__combobox").click();
    selectRandomStore();

    //Add Representative
    cy.get("#vs2__combobox").click();
    selectRandomStore();

    // Invoice Date - pick up from calendar
    cy.get(":nth-child(2) > .row > :nth-child(3) > .input").click();

    // Find and select the desired date in the calendar
    cy.get(".flatpickr-day").contains(selectedDate).click();

    // Customer Information (Regular Customer)
    cy.get("#autosuggest__input_ajax").click();
    selectRandomOption(".autosuggest__results li");
    cy.wait(4000);
    // Delivery address
    // selectDeliveryAddress(".vs__dropdown-menu");
    // cy.wait(4000);
    //select picup
    cy.get("#receive-type_BV_option_0").check({ force: true });
    //issue:The pickup/delivery date must be a date after or equal to invoice date.
    //need to selct those products which has  stock on hand larger  than 0 (for some products its 0 then it show the error message so its working)

    //now fillup item information
    //1. category select
    cy.get("#vs4__combobox").click();
    selectItems(".vs__dropdown-option", 1);
    console.log("product select ", productSelected);
    cy.wait(2000);
    //2. now select product
    cy.get("#vs5__combobox").click();
    selectItems1(".vs__dropdown-option", 1);
    console.log(
      `product is ${productSelected} and category is ${categorySelected}`
    );
    cy.wait(2000);
    cy.get("#vs6__combobox").click();
    selectItems2(".vs__dropdown-option");
  });
});
