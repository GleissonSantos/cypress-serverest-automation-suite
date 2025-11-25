# 🚀 Cypress Serverest Automation (Web + POM + Cucumber)

[![Cypress Tests](https://img.shields.io/badge/cypress-passing-brightgreen.svg)](https://github.com/cypress-io/cypress)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-orange.svg)](https://cucumber.io/)
[![Page Object Model](https://img.shields.io/badge/Design%20Pattern-POM-blue.svg)](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)


## 📋 Table of Contents

- [Overview](#-overview)  
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Test Execution](#-test-execution)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Test Coverage](#-test-scenarios-coverage)
- [Project Structure](#-best-practices-implemented)
- [License](#-license)

## 🎯 Overview

This project is a comprehensive **End-to-End (E2E) testing framework** built for [Serverest](https://serverest.dev/) application using modern testing practices. It implements **Behavior-Driven Development (BDD)** with Cucumber and follows the **Page Object Model (POM)** design pattern to ensure maintainable, scalable, and readable test automation.

### Key Features

✅ **BDD Implementation** - Test scenarios written in Gherkin syntax with Cucumber  
✅ **Page Object Model** - Organized page components with element locators and methods  
✅ **Data-Driven Testing** - Dynamic test data generation using Faker.js  
✅ **CI/CD Pipeline** - Basic GitHub Actions workflow for automated testing  


## 🏗 Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Feature Files │    │  Step Definitions │    │   Page Objects  │
│   (.feature)    │───▶│    (.js)          │───▶│     (.js)       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         │                        ▼                        ▼
         │              ┌──────────────────┐    ┌─────────────────┐
         │              │  Data Generator  │    │     Cypress     │
         └──────────────│   (Faker.js)     │    │   Commands      │
                        └──────────────────┘    └─────────────────┘
```

## 🛠 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Cypress** | E2E Testing Framework | 15.5+ |
| **Cucumber** | BDD Framework | 12.2+ |
| **JavaScript** | Programming Language | ES6+ |
| **Faker.js** | Test Data Generation | 10.1+ |
| **Node.js** | Runtime Environment | 18+ |
| **GitHub Actions** | CI/CD Pipeline | Latest |


## 🔧 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cypress-serverest-automation-web-pom-cucumber.git
   cd cypress-serverest-automation-web-pom-cucumber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress verify
   ```

## 🚀 Usage

### Environment Configuration

The project is configured to test the Serverest application:
- **Base URL**: `https://front.serverest.dev`
- **Default Timeout**: 5000ms

### Test Data Generation

Tests use **Faker.js** for dynamic data generation:
```javascript
// Example: Generated test data
{
  name: "John Doe",
  email: "john.doe@example.com", 
  password: "SecurePass123",
  product: "Smartphone XYZ"
}
```

## ▶️ Test Execution

### Interactive Mode (Development)
```bash
# Open Cypress Test Runner
npm run cypress:open
```

### Headless Mode (CI/CD)
```bash
# Run all tests in headless mode
npm test

# Run specific feature
npx cypress run --spec "cypress/e2e/features/login.feature"

# Run with specific browser
npx cypress run --browser firefox
```

### Available Scripts
```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm test
```

## 🔄 CI/CD Pipeline

The project includes a **GitHub Actions** workflow that:

- ✅ Runs on push and pull requests to main branch
- ✅ Uses Ubuntu latest environment  
- ✅ Uses Node.js 20
- ✅ Caches npm dependencies for faster builds
- ✅ Executes Cypress tests in headless mode

### Pipeline Configuration
```yaml
Triggers: push, pull_request (main branch)
Node Version: 20
OS: ubuntu-latest
Dependencies: npm ci
Test Command: npx cypress run
```

## 🎯 Test Scenarios Coverage

### 🔐 Authentication Module
- ✅ Login with valid credentials (regular user)
- ✅ Login with valid credentials (admin user)  
- ✅ Login with invalid credentials

### 👤 User Registration Module
- ✅ Register new regular user
- ✅ Register new admin user
- ✅ Invalid email format validation

### 📦 Product Management Module
- ✅ Product registration (admin user)
- ✅ Duplicate product registration validation


## � Project Structure

### 🔄 **Design Patterns**
- **Page Object Model (POM)** - Clean separation of test logic and page elements
- **Factory Pattern** - Dynamic test data generation using DataGenerator class
- **Modular Architecture** - Organized folder structure with clear responsibilities

### 📝 **Code Quality**
- **ES6+ JavaScript** - Modern syntax with import/export, classes, and arrow functions
- **Consistent Naming** - Descriptive method and variable naming conventions
- **Type Safety** - Cypress IntelliSense support with reference declarations

### 🧪 **Testing Practices**
- **BDD Approach** - Test scenarios written in Gherkin syntax
- **Data-Driven Tests** - Dynamic test data using Faker.js library
- **Basic Assertions** - Element visibility and text content validations

### 📈 **Project Organization**
- **Modular Structure** - Separate folders for features, steps, and page objects
- **Clear File Organization** - Organized directory structure following Cypress conventions
- **Centralized Configuration** - Single cypress.config.js file for project settings

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch 
3. Make your changes
4. Ensure tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

For questions, issues, or contributions:

- **Author**: [Gleisson Santos](https://github.com/GleissonSantos)

---

<div align="center">

**⭐ If this project helped you, please give it a star! ⭐**

</div>
