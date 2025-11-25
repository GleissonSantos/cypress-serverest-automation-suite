import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import registerNewUserPage from '../../pages/registerNewUserPage.js';
import dataGenerator from '../../fixtures/dataGenerator.js';


let testData = {};

// ===== GIVEN =====
Given('I am on the user signup page', () => {
    registerNewUserPage.acessRegisterNewUserPage()
})


// ===== WHEN - AND  =====
When('I click the signup button', () => {
    registerNewUserPage.clickSubmitNewUserForm();
})

When('I fill in the signup form with an invalid email format', () => {
    testData = dataGenerator.generateInvalidEmailUser();
    registerNewUserPage.fillName(testData.name);
    registerNewUserPage.fillEmail(testData.email);
    registerNewUserPage.fillPassword(testData.password);
})


// ===== THEN =====
Then('I should see a success message indicating the user was signed up successfully', () => {
    registerNewUserPage.validateSuccessfulFormSubmissionMessage();
})

Then('I should see an error message indicating the email format is invalid', () => {
    registerNewUserPage.validateInvalidFormSubmissionMessage();
})



// ===== COMPOSE STEPS =====

When('I fill in the signup form with valid data for a regular user', () => {
    
    testData = dataGenerator.generateValidUser();
    registerNewUserPage.registerRegularUserSuccessfully(testData.name, testData.email, testData.password);
})

When('I fill in the signup form with valid data for a admin user', () => {
    
    testData = dataGenerator.generateValidUser();
    registerNewUserPage.registerAdminUserSuccessfully(testData.name, testData.email, testData.password);
    
})

