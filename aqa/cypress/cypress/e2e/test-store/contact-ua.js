/// <reference types="cypress" />

describe("Test Contact Us form via Store", () => {
  it("hould be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("https://automationteststore.com/");
    /* cy.get(".info_links_footer > :nth-child(5) > a").click(); */
    cy.get("a[href$='contact']").click();
    cy.get("#ContactUsFrm_first_name").type("Mosh");
    cy.get("#ContactUsFrm_email").type("ddd@dd.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("How can I learn Cypress?");
    /*  cy.get(".col-md-6 > .btn").click(); */
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });

  it("test var", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
  });
});
