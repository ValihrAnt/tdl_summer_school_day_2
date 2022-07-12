import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtons from "../../pageObjects/RadioButtons";
import WebTables from "../../pageObjects/WebTables";
import ButtonsPage from "../../pageObjects/ButtonsPage";


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
                
    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.inputName.should("be.visible").type("Adrians Jaunkierpis");
      TextBoxPage.inputEmail.type("adrians.email@gmail.com");
      TextBoxPage.inputCurrentAddress.type("Fake Street 123");
      TextBoxPage.inputPermanentAddress.type("Real Street 321");
      TextBoxPage.submit.click();
      //validating
      TextBoxPage.validateName.should("have.text", "Name:Adrians Jaunkierpis");
      TextBoxPage.validateEmail.should("have.text", "Email:adrians.email@gmail.com");
      TextBoxPage.validateCurrentAddress.should("have.text", "Current Address :Fake Street 123 ");
      TextBoxPage.validatePermanentAddress.should("have.text", "Permananet Address :Real Street 321");
    }); 
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes
    it ("Checkbox scenario 1", () => {
      CheckBoxPage.clickCheckbox.click();
      CheckBoxPage.selectNotes.contains("Notes").click();
      CheckBoxPage.selectValue.contains("React").click();
      CheckBoxPage.selectValue.contains("Angular").click();
      CheckBoxPage.selectValue.contains("General").click();
      CheckBoxPage.selectValue.contains("Excel File.doc").click();
      //CheckBoxPage.validateCheckmarkNotes.should("have.class", "rct-icon rct-icon-check");
      CheckBoxPage.checkboxTree.contains("#rct-checkbox").should("have.class", "rct-icon-check")
      //TODO validate checkboxes
    });
    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
    it ("Checkbox scenario 2", () => {
      CheckBoxPage.clickCheckbox.click();
      CheckBoxPage.selectValue.contains("Office").click();
      //TODO validate checkboxes
    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtons.visit();
    });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
    it ("RadioButtons scenario 1", () => {
      RadioButtons.radioSelect.contains("Yes").click();
      RadioButtons.validateRadio.should("have.text", "Yes");
      RadioButtons.radioSelect.contains("Impressive").click();
      RadioButtons.validateRadio.should("have.text", "Impressive");
      RadioButtons.radioSelect.contains("No").should("have.class", "disabled");
    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTables.visit();
    });
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    it("WebTables scenario 1", () => {
      WebTables.addRecord.should("be.visible").click();
      WebTables.inputFirstName.should("be.visible").type("Adrians");
      WebTables.inputLastName.should("be.visible").type("Jaunkierpis");
      WebTables.inputEmail.type("adrians.jaunkierpis@gmail.com");
      WebTables.inputAge.type("20");
      WebTables.inputSalary.type("5");
      WebTables.inputDepartment.type("No");
      WebTables.submit.click();
      //WebTables.validateTable.should("have.text", "Adrians")  
    });
    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
    it("WebTables scenario 2", () => {
      WebTables.deleteTable1.click();
      WebTables.deleteTable3.click();
      WebTables.deleteTable2.click();
      WebTables.validateDeletion.contains("No rows found");
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
    it("Buttons scenario", () => {
      ButtonsPage.dblClickButton.dblclick();
      ButtonsPage.dblClickMessage.should("be.visible");
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickMessage.should("be.visible");
      ButtonsPage.dynamicClickButton.click();
      ButtonsPage.dynamicClickMessage.should("be.visible");
    });
  });
});