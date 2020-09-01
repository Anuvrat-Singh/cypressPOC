/// <reference types="Cypress" />
import '../sampleFramework/PageObjects/HomePage'
import '../sampleFramework/PageObjects/ProductsPage'
import '../sampleFramework/PageObjects/OrderSummary'

import HomePage from '../sampleFramework/PageObjects/HomePage'
import ProductsPage from '../sampleFramework/PageObjects/ProductsPage'
import CartPage from '../sampleFramework/PageObjects/CartPage'
import OrderSummary from '../sampleFramework/PageObjects/OrderSummary'

describe('Sample Test Automation Framework', function() {
    before(function() {
        cy.log("Framework level configurations go in before. This will run only once")
        cy.fixture('framework').then(function(data){
            this.data = data
        })
    })

    var sum = 0 
    var total = 0
    it('Fill Username and gender', function() {
        const homePage = new HomePage()
        const productPage = new ProductsPage()
        const cartPage = new CartPage()
        const orderSummary = new OrderSummary()

        Cypress.config('defaultCommandTimeout',10000)
        
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        homePage.getNameField().type(this.data.name)
        homePage.getGender().select(this.data.gender).should('have.value', 'Male')
        homePage.getTwoWayBindingTextBox().should('have.value', this.data.name)
        homePage.getNameField().should('have.attr','minlength', '2')
        homePage.getEntreprenuerRadio().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(element => {
            cy.addProductToCart(element)
        });

        productPage.getCheckoutButton().click()
        
        cartPage.getProduct().each(($el, index, $list) => {
            var amount = $el.text().split(" ")
            amount = amount[1].trim()
//            cy.log(amount)
            sum = Number(sum) + Number(amount)
//            cy.wrap(sum).as('sum')
        }).then(function(){
            cy.log(sum)
        })

        cartPage.getTotal().then(function(element) {
            total = element.text().split(" ")
            total = total[1].trim()
            cy.log(total)
//            cy.wrap(total).as('total')
            expect(Number(total)).to.equal(sum)
        })
        

        cy.log('checkpoint')

        cartPage.getCheckout().click()
        
        orderSummary.getCountry().type(this.data.country)
        orderSummary.getSuggestedCountry().click()
        orderSummary.getTermsCheckbox().click({force: true}).should('be.checked')
        orderSummary.getPurchase().click()
        cy.get('.alert').then(function(element){
            expect(element.text().includes('Success')).to.be.true
            
        })
        

    })

    // it('Add product to cart', function() {
    //     cy.visit("https://www.rahulshettyacademy.com/angularpractice/shop")
    //     //use js foreach method to iterate over the array

    //     this.data.productName.forEach(element => {
    //         cy.addProductToCart(element)
    //     });

    // })
})