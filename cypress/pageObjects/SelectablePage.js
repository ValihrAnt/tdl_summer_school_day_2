import BasePage from "./basePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get crasJustoOdioText() {
    return cy.get(".mt-2").contains("Cras justo odio");
  }
  static get DapibusText() {
    return cy.get(".mt-2").contains("Dapibus ac facilisis in");
  }
  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }
  static get groupItem() {
    return cy.get(".list-group-item");
  }
}
export default SelectablePage;
