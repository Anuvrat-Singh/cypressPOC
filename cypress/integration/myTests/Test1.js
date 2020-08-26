/// <reference types="Cypress" />

describe('My first sample test suite', function() {
    it('My first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)

    }
    
    )
}

)