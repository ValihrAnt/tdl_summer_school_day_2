import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get clickCheckbox() {
    return cy.get("[class*='rct-option-expand-all']");
  }
  static get selectNotes() {
    return cy.get(".rct-title");
  }
  static get selectValue() {
    return cy.get("[class*='rct-node rct-node-parent rct-node-expanded']");
  }
  static get validateCheckmarkNotes() {
    return cy.get("#tree-node-classified");
  }
  static get checkboxNotes() {
    return cy.get();
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get submit() {
    return cy.get("#submit");
  }

}
export default CheckBoxPage;
