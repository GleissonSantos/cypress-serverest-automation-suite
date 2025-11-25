import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/homePage.js';
import loginPage from '../../pages/loginPage.js';
import registerNewUserPage from '../../pages/registerNewUserPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';   


let testData = {};



//===== GIVEN =====

Given ('I am on the registration page', () => {
    homePage.navigateToRegistrationProductPage();
});

Given('I am on the home page with a regular user', () => {
    testData = dataGenerator.generateValidUser();
    registerNewUserPage.registerRegularUserSuccessfully(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    homePage.validadeRegularUserLogin();
    homePage.clickRegisterProduct();
})

Given('I am on the home page with an admin user', () => {    
    testData = dataGenerator.generateValidUser();
    registerNewUserPage.registerAdminUserSuccessfully(testData.name, testData.email, testData.password);
    loginPage.acessLoginPage();
    homePage.validadeAdminUserLogin();
    homePage.clickRegisterProduct();
})