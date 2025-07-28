// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES6 syntax.
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught exceptions
  console.log('Uncaught exception:', err)
  return false
})

// Add custom viewport sizes
Cypress.Commands.add('setViewport', (size) => {
  const viewports = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1920, 1080],
    'iphone-x': [375, 812],
    'ipad-pro': [1024, 1366]
  }

  if (viewports[size]) {
    cy.viewport(viewports[size][0], viewports[size][1])
  } else {
    cy.viewport(size)
  }
})

// Global before hook
beforeEach(() => {
  // Add any global setup here
  cy.log('Starting test...')
})
