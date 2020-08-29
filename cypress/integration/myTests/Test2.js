/// <reference types="Cypress" />

describe('My second test suite', function() {
    it('My test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').as('productsLocator')    //as() is used for aliasing(similar to variable)
        
        cy.get('@productsLocator').each(($element, index, $list) => 
        {
            const itemName = $element.find('h4.product-name').text()  //promise resoled by $element
                        
            if(itemName.includes('Cashews'))
            {
                $element.find('button').click()
            }
        }
        )

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})