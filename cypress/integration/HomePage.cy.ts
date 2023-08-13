context('HomePage', () => {
  it('deve realizar as ações com uma tarefa', () => {
    cy.visit('http://localhost:3000');
    cy.get('.v-field__input').type('Tarefa de teste');
    cy.get('.v-field__input').trigger('keyup', {key: 'Enter'});
    cy.get('.v-checkbox').click();
    cy.get('.v-switch').click();
    cy.get('.v-btn').click();
  })
})
