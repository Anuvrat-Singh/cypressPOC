/// <reference types="Cypress" />

describe('Complex Web Controls', function() {

    // Auto handling od alerts popup by cypress
    it('Cypress Auto Handles Alerts', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#alertbtn').click({ force: true })
    })

    // Auto Handling of confirmation popup by cypress
    it('Cypress auto handles confirmation popup', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#confirmbtn').click({ force: true })
    })

    // Handling alert popup by firing windows:alert event and asserting th popup message
    it('Handling the popups by firing event', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })

    // Handling alert popup by firing windows:alert event and asserting th popup message
    it('Handling the popups by firing event', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    // Handling a new tab with the use of jquery and dom manipulation
    // we will check if the atrget attribute is present in the a tag. if present delete it

    it('Handle New Tab navigation', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','courses') 
        cy.go('back')
        cy.url().should('include','practice')
    })

    // Handle the tables in  web page
    it('Handle the tables', function() {
        cy.visit("https://letskodeit.teachable.com/p/practice")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            if($el.text().includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(pyPrice) {
                    expect(pyPrice.text()).to.equal('30')
                })
            }
        })
    })

    // mouse hover event handling
    it('Handling the mouse hover event', function() {
        cy.get('#mousehover').invoke('show')
        cy.get('.mouse-hover-content').contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})
