// import page objects
import SelectablePage from "../../pageObjects/SelectablePage";
import TooltipsPage from "../../pageObjects/TooltipsPage";

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
  context("Bonus tasks", () => {
    beforeEach(() => {
      TooltipsPage.visit();
    });
    it ("Bonus task 1", () => {
      TooltipsPage.button.trigger('mouseover');
      TooltipsPage.tooltip.should("have.text", "You hovered over the Button").end();
      TooltipsPage.inputField.trigger('mouseover');
      TooltipsPage.tooltip.first().should("have.text", "You hovered over the text field");
      TooltipsPage.textHover.first().trigger('mouseover');
      TooltipsPage.tooltip.should("have.text", "You hovered over the Contrary");
      TooltipsPage.textHover.last().trigger('mouseover');
      TooltipsPage.tooltip.should("have.text", "You hovered over the 1.10.32");
    });
  });
});
