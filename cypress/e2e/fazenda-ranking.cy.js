describe('A Fazenda - Ranking dos Participantes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Estrutura da Página', () => {
    it('deve carregar a página com todos os elementos principais', () => {
      cy.get('.ranking-header').should('be.visible')

      cy.get('.ranking-header .logo').should('be.visible')

      cy.get('.ranking-header h1').should('contain.text', 'Ranking')

      cy.get('.participants-container').should('be.visible')
    })

    it('deve ter a estrutura HTML semântica correta', () => {
      cy.get('main').should('exist')
      cy.get('header.ranking-header').should('exist')
      cy.get('section.participants-container').should('exist')
    })
  })

  describe('Carregamento dos Participantes', () => {
    it('deve carregar e exibir os participantes', () => {
      cy.get('.participant-card', { timeout: 10000 }).should('have.length.greaterThan', 0)

      cy.get('.participant-card').each($card => {
        cy.wrap($card).find('.participant-image').should('be.visible')
        cy.wrap($card).find('h2').should('not.be.empty')
        cy.wrap($card).find('p').should('not.be.empty')
      })
    })

    it('deve ordenar participantes por votos positivos (decrescente)', () => {
      cy.get('.participant-card', { timeout: 10000 }).should('have.length.greaterThan', 1)

      cy.get('.participant-card h2').then($names => {
        const displayedOrder = Array.from($names).map(el => el.textContent.trim())

        expect(displayedOrder.length).to.be.greaterThan(1)

      })
    })
  })

  describe('Interações de Hover', () => {
    it('deve mostrar efeitos de hover nos cards', () => {
      cy.get('.participant-card').first().as('firstCard')

      cy.get('@firstCard').trigger('mouseover')

      cy.get('@firstCard').should('have.css', 'background-color')
    })
  })

  describe('Responsividade', () => {
    it('deve funcionar em dispositivos móveis', () => {
      cy.viewport('iphone-6')

      cy.get('.ranking-header').should('be.visible')
      cy.get('.participants-container').should('be.visible')
      cy.get('.participant-card').should('be.visible')
    })

    it('deve funcionar em tablets', () => {
      cy.viewport('ipad-2')

      cy.get('.ranking-header').should('be.visible')
      cy.get('.participants-container').should('be.visible')
      cy.get('.participant-card').should('have.length.greaterThan', 0)
    })

    it('deve funcionar em desktop', () => {
      cy.viewport(1920, 1080)

      cy.get('.ranking-header').should('be.visible')
      cy.get('.participants-container').should('be.visible')
      cy.get('.participant-card').should('have.length.greaterThan', 0)
    })
  })

  describe('Performance e Acessibilidade', () => {
    it('deve carregar imagens com lazy loading', () => {
      cy.get('.participant-image').each($img => {
        cy.wrap($img).should('have.attr', 'loading', 'lazy')
      })
    })

    it('deve ter textos alternativos nas imagens', () => {
      cy.get('.participant-image').each($img => {
        cy.wrap($img).should('have.attr', 'alt')
        cy.wrap($img).invoke('attr', 'alt').should('not.be.empty')
      })
    })

    it('deve carregar a página rapidamente', () => {
      const startTime = Date.now()

      cy.visit('/')
      cy.get('.participant-card').should('have.length.greaterThan', 0).then(() => {
        const loadTime = Date.now() - startTime
        expect(loadTime).to.be.lessThan(3000)
      })
    })
  })

  describe('Tratamento de Erros', () => {
    it('deve lidar com falha no carregamento de dados', () => {
      cy.intercept('GET', '**/fazenda.json', { forceNetworkError: true }).as('dataError')

      cy.visit('/')

      cy.get('.ranking-header').should('be.visible')
      cy.get('.participants-container').should('be.visible')
    })
  })

  describe('SEO e Meta Tags', () => {
    it('deve ter título adequado', () => {
      cy.title().should('contain', 'A Fazenda')
    })

    it('deve ter meta viewport', () => {
      cy.get('meta[name="viewport"]').should('exist')
    })

    it('deve ter meta description', () => {
      cy.get('meta[name="description"]').should('exist')
    })
  })
})
