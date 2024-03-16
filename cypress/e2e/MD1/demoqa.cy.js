import { SelectablePage } from "../../pageObjects/selectable.page";

describe("Cypress testing MD1", () => {
  context("Test Grid clicks", () => {
    beforeEach(() => {
      // Open https://demoqa.com/selectable
      SelectablePage.visit();
    });

    it("visit page", () => {
      // Click “Grid”
      SelectablePage.gridLink.click();

      // Click - “Two”, “Four”, “Six”, “Eight”
      SelectablePage.clickElement({ rowId: 1, element: "Two" });
      SelectablePage.clickElement({ rowId: 2, element: "Four" });
      SelectablePage.clickElement({ rowId: 2, element: "Six" });
      SelectablePage.clickElement({ rowId: 3, element: "Eight" });

      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.checkValidatedElement({ rowId: 1, element: "Two" });
      SelectablePage.checkValidatedElement({ rowId: 2, element: "Four" });
      SelectablePage.checkValidatedElement({ rowId: 2, element: "Six" });
      SelectablePage.checkValidatedElement({ rowId: 3, element: "Eight" });

      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.checkUnvalidatedElement({ rowId: 1, element: "One" });
      SelectablePage.checkUnvalidatedElement({ rowId: 2, element: "Three" });
      SelectablePage.checkUnvalidatedElement({ rowId: 2, element: "Five" });
      SelectablePage.checkUnvalidatedElement({ rowId: 3, element: "Seven" });
      SelectablePage.checkUnvalidatedElement({ rowId: 3, element: "Nine" });
    });
  });
});
