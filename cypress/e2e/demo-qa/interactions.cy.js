// import page objects
import SelectablePage from "../../pageObjects/SelectablePage";


context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create SelectablePage page object
    // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active
    it ("Selectable page scenario 1", () => {


    SelectablePage.crasJustoOdioText.click();
    SelectablePage.crasJustoOdioText.should("have.class", "active");
    SelectablePage.DapibusText.click();
    SelectablePage.DapibusText.should("have.class", "active");
    SelectablePage.crasJustoOdioText.should("have.class", "active");
  });
    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
    it ("Selectable page scenario 2", () => {
      SelectablePage.gridButton.click();
      SelectablePage.groupItem.contains("Two").click().should("have.class", "active");
      SelectablePage.groupItem.contains("Four").click().should("have.class", "active");
      SelectablePage.groupItem.contains("Six").click().should("have.class", "active");
      SelectablePage.groupItem.contains("Eight").click().should("have.class", "active");
    })
  });
});
