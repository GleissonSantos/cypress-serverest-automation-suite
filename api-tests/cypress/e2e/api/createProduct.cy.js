import { NewAdministratorUsersBuilder, NewRegularUsersBuilder } from "../../support/builders/newUsers.builder";
import { ProductsBuilder } from "../../support/builders/produtos.builder";

describe('API - Serverest New Product Test', () => {

    let createdUserIds = [];

    beforeEach(() => {
        createdUserIds = [];
    });

    afterEach(() => {
        cy.cleanupUsers(createdUserIds);
    });


    it('Register a new product successfully', () => {

        cy.loginAsAdmin().then(({ token, userId }) => {
            createdUserIds.push(userId);

            const newProduct = ProductsBuilder.new().build();
            cy.createProduct(token, newProduct)
                .then(res => {
                    expect(res.status).to.eq(201)
                    expect(res.body.message).to.contain('Cadastro realizado com sucesso')
                })
        });
    });


    it('Delete a product successfully', () => {

        cy.loginAsAdmin().then(({ token, userId }) => {
            createdUserIds.push(userId);

            const newProduct = ProductsBuilder.new().build();
            cy.createProduct(token, newProduct)
                .then(res => {
                    expect(res.status).to.eq(201)

                    const productId = res.body._id;

                    cy.request({ method: 'DELETE', url: `/produtos/${productId}`, headers: { Authorization: token } })
                        .then(res => {
                            expect(res.status).to.eq(200)
                            expect(res.body.message).to.contain('Registro excluído com sucesso')
                        })
                })
        });
    });

})
