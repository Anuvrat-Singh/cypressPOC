/// <reference types="Cypress" />

describe('My New Test Suite', function() {
    it('My Third Test Case', function() {
// handle checkboxes        
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#bmwcheck').check().should('be.checked').and('have.value', 'bmw')
        cy.get('#bmwcheck').uncheck().should('not.be.checked')
//        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[type = "checkbox"]').check(['bmw', 'honda', 'benz'])
    })

// handle static dropdowns
    it('My Fourth Test Case', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#carselect').select('honda').should('have.value', 'honda')
    })

// handle dynamic dropdowns
    it('Handling dynamic dropdown', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India')
            {
                $el.click()
            }
        cy.get('#autocomplete').should('have.value', 'India')
        })

// handle hidden/non hidden element
    it('Hide/Unhide web element', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get('#displayed-text').should('be.visible')

    })    

    })



})