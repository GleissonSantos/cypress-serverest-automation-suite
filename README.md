# 🚀 Cypress ServeRest Automation Suite

[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-serverest-automation-suite/actions/workflows/pipeline.yml/badge.svg)](https://github.com/GleissonSantos/cypress-serverest-automation-suite/actions)

## 📋 Overview

Complete test automation suite for the **ServeRest** application, demonstrating different approaches and testing patterns:

- **🔧 API Tests**: Builder Pattern + Custom Commands
- **🌐 Web Tests**: Page Object Model + Cucumber BDD

## 🏗️ Project Structure

```
cypress-serverest-automation-suite/
├── api-tests/          # REST API Tests
│   ├── cypress/
│   │   ├── e2e/api/
│   │   ├── support/
│   │   │   ├── builders/    # Builder Pattern
│   │   │   └── commands/    # Custom Commands
│   │   └── fixtures/
│   └── README.md
├── web-tests/          # Web UI Tests
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── features/        # Cucumber Features
│   │   │   └── step_definitions/
│   │   ├── pages/              # Page Object Model
│   │   └── support/
│   └── README.md
└── README.md          # This file
```

## 🚀 How to Run

### Prerequisites
- Node.js v18+
- npm or yarn

### API Tests
```bash
cd api-tests
npm install
npm run test:open    # GUI mode
npm test             # Headless mode
```

### Web Tests  
```bash
cd web-tests
npm install
npm run cypress:open    # GUI mode
npm test                # Headless mode
```

### Run All Tests (CI/CD)
```bash
npm run install:all     # Install all dependencies
npm run test:all        # Run API + Web tests
```

## 🎯 Features Demonstrated

### 📡 API Tests
- ✅ **Builder Pattern** for data creation
- ✅ **Custom Commands** for reusability
- ✅ **Automated Cleanup** system
- ✅ **API Contract** validations
- ✅ **Authentication** and authorization tests
- ✅ **Dynamic data generation** with Faker.js

### 🖥️ Web Tests
- ✅ **Page Object Model** for maintainability
- ✅ **Cucumber BDD** for readability
- ✅ **Gherkin** syntax in Portuguese
- ✅ **Screenshots** on failure
- ✅ **Detailed reports**
- ✅ **Cross-browser** testing support

## 🔧 Technologies Used

| Component | API Tests | Web Tests |
|------------|-----------|-----------|
| **Framework** | Cypress 15.7.0 | Cypress 15.7.0 |
| **Pattern** | Builder Pattern | Page Object Model |
| **BDD** | ❌ | Cucumber |
| **Data** | Faker.js | DataGenerator |
| **CI/CD** | GitHub Actions | GitHub Actions |

## 📊 CI/CD Pipeline

Automated pipeline that runs on **push** or **pull request** to `main` branch:

- ✅ Runs API and Web tests in parallel
- ✅ Uploads screenshots on failure
- ✅ Node.js 20
- ✅ Ubuntu runner

## 🤝 Design Patterns Implemented

### Patterns
- **Builder Pattern** (API Tests)
- **Page Object Model** (Web Tests)
- **Command Pattern** (Custom Commands)

### Best Practices
- **Test Data Management**
- **Test Isolation**
- **Cleanup Automation**
- **DRY Principle**
- **Single Responsibility**

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Cypress Documentation](https://docs.cypress.io/)
2. Review the [ServeRest API Documentation](https://serverest.dev/)
3. Create an issue in this repository

## 👨‍💻 Author

**Gleisson Santos**
- GitHub: [@GleissonSantos](https://github.com/GleissonSantos)

---

⭐ **If this project helped you, please give it a star!** ⭐
