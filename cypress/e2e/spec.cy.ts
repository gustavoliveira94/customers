describe('App', () => {
  it('should visit and navigate', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=open-button]').first().click(); // open
    cy.wait(2000);
    cy.get('[data-testid=open-button]').first().click(); // close
    cy.wait(2000);

    // Check customer not exists
    cy.contains('Gustavo Oliveira').should('not.exist');

    cy.get('[data-testid=button]').click(); // open route create-customer

    // Create new customer
    cy.get('input[placeholder=Nome]').type('Gustavo Oliveira');
    cy.get('input[placeholder=E-mail]').type('gustavo@teste.com');
    cy.get('input[placeholder=Telefone]').type('000000000');
    cy.get('input[placeholder=Site]').type('http://site.com.br');
    cy.get('input[placeholder=Empresa]').type('empresa teste');
    cy.get('input[placeholder=Rua]').type('Street');
    cy.get('input[placeholder=Complemento]').type('Suite');
    cy.get('input[placeholder=Cidade]').type('City');
    cy.get('input[placeholder=CEP]').type('00000000');

    cy.get('[data-testid="button-form"]').click();

    // Get new customer
    cy.contains('Gustavo Oliveira').should('exist');
    cy.wait(2000);

    cy.get('[data-testid=button]').click(); // open route create-customer
    cy.wait(2000);
    cy.get('[data-testid=voltar]').click(); // back route home
  });
});
