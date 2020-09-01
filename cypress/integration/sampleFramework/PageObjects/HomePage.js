class HomePage{
    
    getNameField(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayBindingTextBox(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getShopTab(){
        return cy.get('a[href*="shop"]')
    }

    getEntreprenuerRadio(){
        return cy.get('#inlineRadio3')
    }

}

export default HomePage