Cypress.Commands.add('waitForParticipants', () => {
  cy.get('.participant-card', { timeout: 10000 }).should('have.length.greaterThan', 0)
  cy.get('.participant-card').each($card => {
    cy.wrap($card).find('.participant-image').should('be.visible')
    cy.wrap($card).find('h2').should('not.be.empty')
  })
})

Cypress.Commands.add('validateParticipantCard', (cardSelector) => {
  cy.get(cardSelector).within(() => {
    cy.get('.participant-image').should('be.visible').and('have.attr', 'alt')
    cy.get('h2').should('be.visible').and('not.be.empty')
    cy.get('p').should('be.visible').and('not.be.empty')
    cy.get('.participant-content').should('exist')
    cy.get('.participant-text').should('exist')
  })
})

Cypress.Commands.add('testResponsiveness', (viewports = ['iphone-6', 'ipad-2', [1920, 1080]]) => {
  viewports.forEach(viewport => {
    if (Array.isArray(viewport)) {
      cy.viewport(viewport[0], viewport[1])
    } else {
      cy.viewport(viewport)
    }

    cy.get('.ranking-header').should('be.visible')
    cy.get('.participants-container').should('be.visible')
    cy.get('.participant-card').should('have.length.greaterThan', 0)
  })
})

Cypress.Commands.add('checkPerformance', (maxLoadTime = 3000) => {
  const startTime = Date.now()

  cy.waitForParticipants().then(() => {
    const loadTime = Date.now() - startTime
    expect(loadTime).to.be.lessThan(maxLoadTime)
  })
})
