describe('Open Page', () => {
  beforeEach('successfully loads', () => {
    cy.visit('https://roibaza.github.io/groceries/')
  });

  it("Check All Components Are Mounted", () => {
    cy.get('.header').should('contain', "Groceries");

    cy.get('#input').should('contain', "");

    cy.get('.all').should('contain', "All");

    cy.get('.checked').should('contain', "Checked");

    cy.get('.unchecked').should('contain', "UnChecked");

    cy.get('.grocery-items').should('be.empty');

    cy.get('.item').should('have.length', 0);

  });

  it("Test Input", () => {
    cy.get('#input').type("t");

    cy.get('.option').should('have.length.above', 0);

  });

  it("Test Selection", () => {
    cy.get('#input').type("t");

    cy.get('.option').first().click();

    cy.get('.option').first().next().click();

    cy.get('.item').should('have.length', 2);

  });

  it("Test Checkboxes", () => {
    cy.get('#input').type("t");

    cy.get('.option').first().click();
    cy.get('.option').first().next().click();

    cy.get('.checkbox').first().click();

    cy.get('.active').should('have.length', 1);

    cy.get('.not-active').should('have.length', 1);

  });

  it("Test Filters", () => {
    cy.get('#input').type("t");

    cy.get('.option').first().click();
    cy.get('.option').first().next().click();

    cy.get('.checkbox').first().click();

    cy.get(".filters .checked").click();

    cy.get('.item').should('have.length', 1);

    cy.get(".filters .unchecked").click();

    cy.get('.item').should('have.length', 1);

    cy.get(".filters .all").click();

    cy.get('.item').should('have.length', 2);

    cy.get('#input').clear();

  });

  it("Test Remove", () => {
    cy.get('#input').type("t");

    cy.get('.option').first().click();

    cy.get('.option').first().next().click();

    cy.get('.item').should('have.length', 2);

    cy.get('.delete').first().click();

    cy.get('.item').should('have.length', 1);

    cy.get('#input').clear();

  });
})