class CartPage{

    getRemoveButton(){
        return cy.get('.btn.btn-danger')
    }
    
    getContinueShoppingButton(){
        return cy.get('.btn.btn-default')
    }

    getCheckout(){
        return cy.get('.btn.btn-success')
    }

    getProduct(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal(){
        return cy.get('h3 strong')
    }

}

export default CartPage