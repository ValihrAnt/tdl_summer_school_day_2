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
  static get validateCheckmarks() {
    return cy.get(".text-success");
  }
}
export default CheckBoxPage;
