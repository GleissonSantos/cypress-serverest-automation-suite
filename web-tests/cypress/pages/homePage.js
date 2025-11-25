/// <reference types="cypress" />

export default {

    elements:{

        shoppingList: '[data-testid="lista-de-compras"]',
        cart: '[data-testid="carrinho"]',
        registerUsers: '[data-testid="cadastrar-usuarios"]',
        listUsers: '[data-testid="listar-usuarios"]',
        registerProducts: '[data-testid="cadastrar-produtos"]',
        listProducts: '[data-testid="listar-produtos"]',
        reportLink: '[data-testid="link-relatorios"]',
        logoutButton: '[data-testid="logout"]'
    },

    navigateToRegistrationProductPage() {
        cy.visit('/cadastrarprodutos')
    },

    validadeRegularUserLogin() {
        cy.get(this.elements.shoppingList).should('be.visible').and('contain.text', 'Lista de Compras')
        cy.get(this.elements.cart).should('be.visible').and('contain.text', 'Carrinho')
    },
    
    validadeAdminUserLogin() {
        cy.get(this.elements.registerUsers).should('be.visible').and('contain.text', 'Cadastrar Usuários')
        cy.get(this.elements.listUsers).should('be.visible').and('contain.text', 'Listar Usuários')
        cy.get(this.elements.registerProducts).should('be.visible').and('contain.text', 'Cadastrar Produtos')
        cy.get(this.elements.listProducts).should('be.visible').and('contain.text', 'Listar Produtos')
        cy.get(this.elements.reportLink).should('be.visible').and('contain.text', 'Relatórios')
    },

    clickRegisterProduct() {
        cy.get(this.elements.registerProducts).click()
    },

    acessRegisterProductAsAdmin() {
        this.validadeAdminUserLogin()
        this.clickRegisterProduct()
    },

}
