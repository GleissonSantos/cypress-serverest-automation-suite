/// <reference types="cypress" />

export default {

    elements:{

        nameInput: '#nome',
        emailInput: '#email',
        passwordInput: '#password',
        adminCheckbox: '#administrador',
        registerButton: '[data-testid="cadastrar"]',
        registerTitle: '[class="font-robot"]',
        successMessage: '.alert-link',
        errorMessage: '[class="alert alert-secondary alert-dismissible"]'
    },

    acessRegisterNewUserPage() {
        cy.visit('/cadastrarusuarios')
        cy.get(this.elements.registerTitle).should('have.text', 'Cadastro')
    },
    
    fillName(name) {
        cy.get(this.elements.nameInput).clear().type(name)
    },

    fillEmail(email) {
        cy.get(this.elements.emailInput).clear().type(email)
    },

    fillPassword(password){
        cy.get(this.elements.passwordInput).clear().type(password)
    },

    checkAdminBox(){
        cy.get(this.elements.adminCheckbox).check()
    },

    clickSubmitNewUserForm(){
        cy.get(this.elements.registerButton).should('be.visible').click()
    },

    validateSuccessfulFormSubmissionMessage(){
        cy.get(this.elements.successMessage).should('be.visible').and('have.text', 'Cadastro realizado com sucesso')
    },

    validateInvalidFormSubmissionMessage(){
        cy.get(this.elements.errorMessage).should('be.visible').and('contain.text', 'Email deve ser um email válido')
    },

    registerRegularUserSuccessfully(name, email, password){
        this.acessRegisterNewUserPage()
        this.fillName(name)
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickSubmitNewUserForm()
        this.validateSuccessfulFormSubmissionMessage()
    },

    registerAdminUserSuccessfully(name, email, password){
        this.acessRegisterNewUserPage()
        this.fillName(name)
        this.fillEmail(email)
        this.fillPassword(password)
        this.checkAdminBox()
        this.clickSubmitNewUserForm()
        this.validateSuccessfulFormSubmissionMessage()
    }

}