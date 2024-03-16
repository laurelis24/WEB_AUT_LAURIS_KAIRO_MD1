import { BasePage } from "./basepage.page";

export class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get gridLink() {
    return cy.get("#demo-tab-grid");
  }

  static rowContainer(rowId) {
    return cy.get(`div#row${rowId}`);
  }

  static clickElement({ rowId, element }) {
    this.rowContainer(rowId).get("li.list-group-item.list-group-item-action").contains(element).click();
  }

  static checkValidatedElement({ rowId, element }) {
    return cy
      .get(`div#row${rowId}`)
      .get("li.list-group-item.list-group-item-action")
      .contains(element)
      .should("have.class", "active");
  }

  static checkUnvalidatedElement({ rowId, element }) {
    return cy
      .get(`div#row${rowId}`)
      .get("li.list-group-item.list-group-item-action")
      .contains(element)
      .should("not.have.class", "active");
  }
}
