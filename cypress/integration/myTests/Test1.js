/// <reference types="Cypress" />

describe('My first sample test suite', function() {
    it('My first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)

        /* parent child chaining -> it help us to overcome the use of visible property
           the concept is to narrow downthe element to operate from parent to particular element.
           get method is used to fin the element with css locator after that we use find() to locate the
           particular element inside the element list. 

           eq() takes index as an argument and locates the particular element at given index in the list of array 
           */

        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click()


        /* It may happen that a particular item to be searched is not available at a defined index.
        In those cases search the element dynamically. Eg: to find cashews, first locate the entire
        product list. Then find the particular element by iterating the list and then perform operation
        for iteration use the .each method which takes element, index and list as parameter
        */

        cy.get('@productsLocator').find('.product').each(($element, index, $list) => 
        {
            const itemName = $element.find('h4.product-name').text()  //promise resoled by $element
                        
            if(itemName.includes('Cashews'))
            {
                $element.find('button').click()
            }
        }
        )

        // cy.get('.brand.greenlogo').text() 
        /* doesnt work because promise is not resolved
        and text() is not a cyress method its a jquery method. we need to resolve promise
        with the help of then */
        
        console.log("This writes in browser cosole as its javascript command")
        console.log("I will run asyonchronusly.")
        //cy.log will log in test runner
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text())
        })

        cy.get('.brand.greenlogo').should('have.text', 'GREENKART') //assertion

        cy.get('@productsLocator').find('.product').then(function() {
            console.log("I run")
        })

    }
    
    )
}

)