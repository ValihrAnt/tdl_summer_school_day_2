import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get inputName() {
    return cy.get("#userName");
  }
  static get inputEmail() {
    return cy.get("#userEmail");
  }
  static get inputCurrentAddress() {
    return cy.get("#currentAddress");
  }
  static get inputPermanentAddress() {
    return cy.get("#permanentAddress");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get validateName() {
    return cy.get("#name");
  }
  static get validateEmail() {
    return cy.get("#email");
  }
  static get validateCurrentAddress() {
    return cy.get('#currentAddress.mb-1');
  }
  static get validatePermanentAddress() {
    return cy.get("#permanentAddress.mb-1");
  }

}

export default TextBoxPage;
