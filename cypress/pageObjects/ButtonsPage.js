import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }
  static get dblClickButton() {
    return cy.get("#doubleClickBtn");
  }
  static get rightClickButton() {
    return cy.get("#rightClickBtn");
  }
  static get dynamicClickButton() {
    return cy.get(".btn.btn-primary").last();
  }
  static get dblClickMessage() {
    return cy.get("#doubleClickMessage");
  }
  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
  static get dynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  }
}
export default ButtonsPage;
