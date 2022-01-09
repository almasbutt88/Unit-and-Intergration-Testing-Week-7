describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
   
  });

  // Do the number buttons update the display of the running total?

  it('should have numbers update display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '25')
    })



// Do the arithmetical operations update the display with the result of the operation?
  it('should have arithmetical operations update display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
});

// Can multiple operations be chained together?
it('should be able to chain multiple operations together', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '40')
});

// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

it('should be able to output as expected for a range of numbers such as negative and decimal numbers', () => {
  cy.get('#number8').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#operator-subtract').click();
  cy.get('#number9').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-5.5')
});



// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
it('should be able to output Infinity in exceptional circumstances such as when divided by zero', () => {
  cy.get('#number8').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Infinity')
});


});
