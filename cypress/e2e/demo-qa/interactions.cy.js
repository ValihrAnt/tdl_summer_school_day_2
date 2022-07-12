// import page objects
import SelectablePage from "../../pageObjects/SelectablePage";
import TooltipsPage from "../../pageObjects/TooltipsPage";
import ProgressBarPage from "../../pageObjects/ProgressBarPage";

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
  context("Bonus tasks ", () => {
    beforeEach(() => {
      TooltipsPage.visit();
    });
    it ("Bonus task 1", () => {
      TooltipsPage.button.trigger('mouseover');
      TooltipsPage.buttonPop.should("be.visible");
      TooltipsPage.inputField.trigger('mouseover');
      TooltipsPage.textfieldPop.first().should("be.visible");
      TooltipsPage.textHover.first().trigger('mouseover');
      TooltipsPage.contraryPop.should("be.visible");
      TooltipsPage.textHover.last().trigger('mouseover');
      TooltipsPage.sectionPop.should("be.visible");
    });
  });
  context("Bonus task 2", () => {
      beforeEach(() => {
        ProgressBarPage.visit();
      });
      it ("Bonus task 2", () => {
      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.contains("24"); //Probably very suboptimal solution
      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.should("contains.text", "25");

      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.contains("74"); //Probably very suboptimal solution
      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.should("contains.text", "75");

      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.contains("98"); //Probably very suboptimal solution
      ProgressBarPage.startStopButton.click();
      ProgressBarPage.progressBar.should("contains.text", "99");
    });
  });
});
