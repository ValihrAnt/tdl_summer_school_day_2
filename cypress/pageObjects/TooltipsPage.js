import BasePage from "./basePage";

class TooltipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }
  static get button() {
    return cy.get("#toolTipButton");
  }
  static get inputField() {
    return cy.get("#toolTipTextField");
  }
  static get textHover() {
    return cy.get("[href='javascript:void(0)']");
  }
  static get tooltip() {
    return cy.get(".tooltip-inner");
  }
  static get button() {
    return cy.get("#toolTipButton");
  }

}
export default TooltipsPage;
