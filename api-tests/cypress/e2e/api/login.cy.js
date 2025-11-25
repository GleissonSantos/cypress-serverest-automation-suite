import { LoginBuilder } from "../../support/builders/login.builder";
import { NewAdministratorUsersBuilder, NewRegularUsersBuilder } from "../../support/builders/newUsers.builder";

describe('API - Serverest Login Test', () => {
    
    let createdUserIds = [];

    beforeEach(() => {
        createdUserIds = []; 
    });

    afterEach(() => {
        cy.cleanupUsers(createdUserIds); 
    });

    it('Login with a valid regular user successfully', () => {

        const newUser = NewRegularUsersBuilder.new().build();

        cy.request({ method: 'POST', url: '/usuarios', body: newUser })
            .then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.message).to.contain('Cadastro realizado com sucesso')
                createdUserIds.push(res.body._id); 
            })

        cy.request({ method: 'POST', url: '/login', body: { email: newUser.email, password: newUser.password } })
            .then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.contain('Login realizado com sucesso')
                expect(res.body).to.have.property('authorization')
            })

    })

    it('Login with a valid administrator user successfully', () => {

        const newUser = NewAdministratorUsersBuilder.new().build();

        cy.request({ method: 'POST', url: '/usuarios', body: newUser })
            .then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.message).to.contain('Cadastro realizado com sucesso')
                createdUserIds.push(res.body._id); 
            })

        cy.request({ method: 'POST', url: '/login', body: { email: newUser.email, password: newUser.password } })
            .then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.contain('Login realizado com sucesso')
                expect(res.body).to.have.property('authorization')
            })

    })

    it('Login with a unregistered user', () => {
        const userNew = LoginBuilder.new().withUnregisteredEmail().build();

        cy.request({ method: 'POST', url: '/login', body: userNew, failOnStatusCode: false })
            .then(res => {
                expect(res.status).to.eq(401)
                expect(res.body.message).to.contain('Email e/ou senha inválidos')
            })

    })

    it('Login with an invalid user', () => {
        const userNew = LoginBuilder.new().withInvalidEmail().build();

        cy.request({ method: 'POST', url: '/login', body: userNew, failOnStatusCode: false })
            .then(res => {
                expect(res.status).to.eq(400)
                expect(res.body.email).to.contain('email deve ser um email válido')
            })

    })

    it('Login without inform a required field', () => {

        const newUser = LoginBuilder.new().withPassword('senha123').build();

        cy.request({ method: 'POST', url: '/login', body: { password: newUser.password }, failOnStatusCode: false })
            .then(res => {
                expect(res.status).to.eq(400)
                expect(res.body.email).to.contain('email é obrigatório')
            })

    })

})
