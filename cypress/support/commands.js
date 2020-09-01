import '../integration/sampleFramework/PageObjects/ProductsPage'
import ProductsPage from '../integration/sampleFramework/PageObjects/ProductsPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

    const productPage = new ProductsPage()

    Cypress.Commands.add("addProductToCart", (product) => {
        productPage.getProductName().each(($el, index, $list) => {
            if($el.text().includes(product))
            {
                productPage.getAddButton().eq(index).click()
            }
        })
    })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
