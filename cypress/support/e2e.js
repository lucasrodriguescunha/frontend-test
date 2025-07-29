import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log('Uncaught exception:', err)
  return false
})

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

beforeEach(() => {
  cy.log('Starting test...')
})

