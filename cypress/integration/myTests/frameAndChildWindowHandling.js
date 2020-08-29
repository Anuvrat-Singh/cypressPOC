/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Window Handling Suite In Cypress', function() {
// open window in same domain    
    it('open new window in same domain', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#opentab').then(function(element) {
            const newURL = element.prop('href')
            cy.visit(newURL)
            cy.url().should('include', 'courses')

        })
    })

/* open window in different domain
    it('Open window in different domain', function() {
        // use removeAttr via invoke to remove target attribute
    
    })
*/

// Handling iframe with cypress
    it('Handle iframe in cypress', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="#/mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
    })
})