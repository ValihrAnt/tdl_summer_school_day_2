import BasePage from "./basePage";

class WebTables extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecord() {
    return cy.get("#addNewRecordButton");
  }
  static get inputFirstName() {
    return cy.get("#firstName");
  }
  static get inputLastName() {
    return cy.get("#lastName");
  }
  static get inputEmail() {
    return cy.get("#userEmail");
  }
  static get inputAge() {
    return cy.get("#age");
  }
  static get inputSalary() {
    return cy.get("#salary");
  }
  static get inputDepartment() {
    return cy.get("#department");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get validateTable() {
      return cy.get("#rt-tr.-even").not().first();
  }
  static get deleteTable1() {
      return cy.get("#delete-record-1")
  }
  static get deleteTable2() {
    return cy.get("#delete-record-2")
}
static get deleteTable3() {
    return cy.get("#delete-record-3")
}
static get validateDeletion() {
    return cy.get(".rt-noData")
}
}
export default WebTables;
