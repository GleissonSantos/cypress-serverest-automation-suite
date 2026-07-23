/// <reference types="cypress" />

export default {

    elements: {

        productNameInput: '[data-testid="nome"]',
        productPriceInput: '[data-testid="preco"]',
        productDescriptionInput: 'textarea[data-testid="descricao"]',
        productQuantityInput: '[data-testid="quantity"]',
        registerProductButton: '[data-testid="cadastarProdutos"]',
        errorMessage: '[class="alert alert-secondary alert-dismissible"]'
    },

    acessRegisterProductPage() {
        cy.visit('/cadastrarprodutos')
    },

    fillProductName(name) {
        cy.get(this.elements.productNameInput).should('be.visible').type(name)
    },

    fillProductPrice(price) {
        cy.get(this.elements.productPriceInput).should('be.visible').type(price)
    },

    fillProductDescription(description) {
        cy.get(this.elements.productDescriptionInput).should('be.visible').type(description)
    },

    fillProductQuantity(quantity) {
        cy.get(this.elements.productQuantityInput).should('be.visible').type(quantity)
    },

    registerProductButton() {
        cy.get(this.elements.registerProductButton).should('be.visible').click()
    },

    registerProductSuccessfully(productName, productPrice, productDescription, productQuantity) {

        this.fillProductName(productName)
        this.fillProductPrice(productPrice)
        this.fillProductDescription(productDescription)
        this.fillProductQuantity(productQuantity)
        this.registerProductButton()
    },

    registerTheSameProductTwice(productName, productPrice, productDescription, productQuantity) {
        // First registration
        this.fillProductName(productName)
        this.fillProductPrice(productPrice)
        this.fillProductDescription(productDescription)
        this.fillProductQuantity(productQuantity)
        this.registerProductButton()

        // Navigate back to home and then to product registration
        cy.url().should('include', '/admin/listar')
        cy.visit('admin/home')
        cy.get('[data-testid="cadastrar-produtos"]').should('be.visible').click()

        // Second registration
        this.fillProductName(productName)
        this.fillProductPrice(productPrice)
        this.fillProductDescription(productDescription)
        this.fillProductQuantity(productQuantity)
        this.registerProductButton()
    },
    
    validateProductAlreadyExistsMessage() {
        cy.get(this.elements.errorMessage).should('be.visible').and('contain.text', 'Já existe produto com esse nome')
    }
    
}