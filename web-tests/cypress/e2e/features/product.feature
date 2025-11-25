# language: en
Feature: Register a new product
    As a admin user of the system
    I want to register a new product
    To manage the product catalog

    Background:
        Given Im on the registration page as an admin user

        Scenario: Register a new product successfully
        When I fill in the product details with valid data
        And I submit the registration form
        Then The new product should be listed on the products page
        

    Scenario: Trying to register the same product twice
        When I try to register the same product twice
        Then I should see an error message indicating that the product already exists