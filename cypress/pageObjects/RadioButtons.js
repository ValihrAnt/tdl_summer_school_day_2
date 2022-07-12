import BasePage from "./basePage";

class RadioButtons extends BasePage {
  static get url() {
    return "/radio-button";
  }
  static get radioSelect() {
    return cy.get(".custom-control-label");
  }
  static get validateRadio() {
    return cy.get(".text-success");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get submit() {
    return cy.get("#submit");
  }
}
export default RadioButtons;
