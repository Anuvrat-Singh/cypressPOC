class OrderSummary{

    getCountry(){
        return cy.get('#country')
    }

    getSuggestedCountry(){
        return cy.get('.suggestions > ul > li > a')
    }

    getTermsCheckbox(){
        return cy.get('#checkbox2')
    }

    getPurchase(){
        return cy.get('input[type="submit"]')
    }

}

export default OrderSummary