import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/homePage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';
import loginPage from '../../pages/loginPage.js';
import registerNewUserPage from '../../pages/registerNewUserPage.js';
import registerProductPage from '../../pages/registerProductPage.js';


let testData = {};

//===== GIVEN =====
Given('I am on the registration page', () => {
    cy.visit("/cadastrarprodutos");
});

//===== WHEN =====
When('I submit the registration form', () => {
    registerProductPage.registerProductButton();
});

When("I fill in the product details with valid data", () => {
    testData = dataGenerator.generateValidProduct();
    registerProductPage.fillProductName(testData.name);
    registerProductPage.fillProductPrice(testData.price);
    registerProductPage.fillProductDescription(testData.description);
    registerProductPage.fillProductQuantity(testData.quantity);
});

When('I register a product successfully', () => {
    testData = dataGenerator.generateValidProduct();
    registerProductPage.registerProductSuccessfully(testData.name, testData.price, testData.description, testData.quantity);
});

When('Im on the registration page as an admin user', () => {
    testData = dataGenerator.generateValidUser();
    registerNewUserPage.registerAdminUserSuccessfully(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    loginPage.fillEmail(testData.email);
    loginPage.fillPassword(testData.password);
    loginPage.submitLogin();
    homePage.acessRegisterProductAsAdmin();
   
}); 

When('I try to register the same product twice', () => {
    testData = dataGenerator.generateValidProduct();
    registerProductPage.registerTheSameProductTwice(testData.name, testData.price, testData.description, testData.quantity);
});


//===== THEN =====
Then('The new product should be listed on the products page', () => {
    cy.contains(testData.name).should('be.visible');
    cy.contains(testData.price).should('be.visible');
    cy.contains(testData.description).should('be.visible');
    cy.contains(testData.quantity).should('be.visible');
});

Then('I should see an error message indicating that the product already exists', () => {
    registerProductPage.validateProductAlreadyExistsMessage();
})