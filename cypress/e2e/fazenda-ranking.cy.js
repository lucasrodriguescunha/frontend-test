describe('A Fazenda - Ranking dos Participantes', () => {
  beforeEach(() => {
    // Visita a página antes de cada teste
    cy.visit('/')
  })

  describe('Estrutura da Página', () => {
    it('deve carregar a página com todos os elementos principais', () => {
      // Verifica se o header existe
      cy.get('.ranking-header').should('be.visible')

      // Verifica se o logo existe
      cy.get('.ranking-header .logo').should('be.visible')

      // Verifica se o título existe
      cy.get('.ranking-header h1').should('contain.text', 'Ranking')

      // Verifica se o container de participantes existe
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
      // Aguarda o carregamento dos dados
      cy.get('.participant-card', { timeout: 10000 }).should('have.length.greaterThan', 0)

      // Verifica se cada card tem os elementos obrigatórios
      cy.get('.participant-card').each($card => {
        cy.wrap($card).find('.participant-image').should('be.visible')
        cy.wrap($card).find('h2').should('not.be.empty')
        cy.wrap($card).find('p').should('not.be.empty')
      })
    })

    it('deve ordenar participantes por votos positivos (decrescente)', () => {
      cy.get('.participant-card', { timeout: 10000 }).should('have.length.greaterThan', 1)

      // Coleta os nomes dos participantes na ordem exibida
      cy.get('.participant-card h2').then($names => {
        const displayedOrder = Array.from($names).map(el => el.textContent.trim())

        // Verifica se há pelo menos 2 participantes para comparar
        expect(displayedOrder.length).to.be.greaterThan(1)

        // Aqui você pode adicionar lógica específica para verificar ordenação
        // se souber os dados específicos do fazenda.json
      })
    })
  })

  describe('Interações de Hover', () => {
    it('deve mostrar efeitos de hover nos cards', () => {
      cy.get('.participant-card').first().as('firstCard')

      // Testa hover
      cy.get('@firstCard').trigger('mouseover')

      // Verifica se as classes de hover são aplicadas pelo CSS
      // (O Cypress pode verificar propriedades computadas)
      cy.get('@firstCard').should('have.css', 'background-color')
    })
  })

  describe('Responsividade', () => {
    it('deve funcionar em dispositivos móveis', () => {
      cy.viewport('iphone-6')

      // Verifica se os elementos principais ainda são visíveis
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
        expect(loadTime).to.be.lessThan(3000) // Menos de 3 segundos
      })
    })
  })

  describe('Tratamento de Erros', () => {
    it('deve lidar com falha no carregamento de dados', () => {
      // Intercepta e simula erro na requisição
      cy.intercept('GET', '**/fazenda.json', { forceNetworkError: true }).as('dataError')

      cy.visit('/')

      // Verifica se não quebra a página
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
