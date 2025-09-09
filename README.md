# CypressInterviewProject080925

This project is for demonstration purposes during an interview. It showcases a moderate-level Cypress automation framework using the Page Object Model (POM) design pattern for an e-commerce application.

## Project Structure
```
cypress/
  e2e/
    pages/         # Page Objects
    tests/         # Test specs (grouped, tagged, parameterized)
  fixtures/        # Test data
  support/
    commands.js    # Custom commands
    e2e.js         # Global setup
    utils/         # Utilities and dynamic test data
  downloads/       # Downloaded files
  screenshots/     # Test screenshots
  videos/          # Test videos
cypress.config.js  # Cypress configuration
package.json       # Project dependencies
.gitignore         # Git ignore rules
README.md          # Project documentation
```

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx cypress open
   # or
   npx cypress run
   ```
3. Add your own page objects and tests in `cypress/e2e/pages` and `cypress/e2e/tests`.

## Test Types & Tagging
- Regression, smoke, and sanity tests are grouped and tagged in the test files.
- Parameterization is used for dynamic test data.

## CI/CD Integration
This project supports GitHub Actions for automated testing. See `.github/workflows/cypress.yml` for setup.

---

## Contributing
- Fork the repo and create a pull request.
- Follow the POM structure for new tests.

## License
MIT
