class ProductsPage{

    getProductName(){
        return cy.get('h4.card-title')
    }

    getAddButton(){
        return cy.get('button.btn.btn-info')
    }

    getCheckoutButton(){
        return cy.get('a.nav-link.btn.btn-primary')
    }

}

export default ProductsPage