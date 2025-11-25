import { NewAdministratorUsersBuilder, NewRegularUsersBuilder } from "./builders/newUsers.builder";


Cypress.Commands.add('loginAsAdmin', () => {
    const newAdminUser = NewAdministratorUsersBuilder.new().build();
    let userId;

    return cy.request({ method: 'POST', url: '/usuarios', body: newAdminUser })
        .then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.contain('Cadastro realizado com sucesso')
            userId = res.body._id; 
            
            return cy.request({ method: 'POST', url: '/login', body: { email: newAdminUser.email, password: newAdminUser.password } })
        })
        .then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.contain('Login realizado com sucesso')
            expect(res.body).to.have.property('authorization')

            return { 
                token: res.body.authorization,
                userId: userId 
            }; 
        });
});

Cypress.Commands.add('createProduct', (token, product) => {
    return cy.request({ method: 'POST', url: '/produtos', body: product, headers: { Authorization: token } });
});

Cypress.Commands.add('cleanupUsers', (userIds) => {
    userIds.forEach(userId => {
        cy.request({
            method: 'DELETE',
            url: `/usuarios/${userId}`,
            failOnStatusCode: false
        });
    });
});