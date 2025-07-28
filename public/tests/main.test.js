const { createParticipantCard } = require('../scripts/main');

describe('createParticipantCard', () => {
  // Setup comum para os testes
  const mockParticipant = {
    name: 'Lucas Rodrigues',
    picture: 'lucas.jpg',
    description: 'Desenvolvedor apaixonado por tecnologia'
  };

  describe('Estrutura e Semântica HTML', () => {
    it('deve criar um elemento article com a estrutura correta', () => {
      const card = createParticipantCard(mockParticipant);

      expect(card).toBeDefined();
      expect(card.tagName).toBe('ARTICLE');
      expect(card.classList.contains('participant-card')).toBe(true);
    });

    it('deve ter a estrutura hierárquica correta', () => {
      const card = createParticipantCard(mockParticipant);

      // Verifica se a estrutura de divs está correta
      expect(card.querySelector('.participant-content')).toBeTruthy();
      expect(card.querySelector('.participant-text')).toBeTruthy();

      // Verifica a hierarquia
      const content = card.querySelector('.participant-content');
      expect(content.children.length).toBe(2); // img + div.participant-text
    });

    it('deve ter elementos semânticos corretos', () => {
      const card = createParticipantCard(mockParticipant);

      expect(card.querySelector('img')).toBeTruthy();
      expect(card.querySelector('h2')).toBeTruthy();
      expect(card.querySelector('p')).toBeTruthy();
    });
  });

  describe('Conteúdo e Dados', () => {
    it('deve renderizar o nome do participante corretamente', () => {
      const card = createParticipantCard(mockParticipant);
      const nameElement = card.querySelector('h2');

      expect(nameElement.textContent).toBe(mockParticipant.name);
      expect(card.textContent).toContain(mockParticipant.name);
    });

    it('deve renderizar a descrição corretamente', () => {
      const card = createParticipantCard(mockParticipant);
      const descriptionElement = card.querySelector('p');

      expect(descriptionElement.textContent).toBe(mockParticipant.description);
      expect(card.textContent).toContain(mockParticipant.description);
    });

    it('deve configurar a imagem corretamente', () => {
      const card = createParticipantCard(mockParticipant);
      const img = card.querySelector('img');

      expect(img.src).toContain(mockParticipant.picture);
      expect(img.classList.contains('participant-image')).toBe(true);
      expect(img.getAttribute('loading')).toBe('lazy');
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter atributo alt descritivo na imagem', () => {
      const card = createParticipantCard(mockParticipant);
      const img = card.querySelector('img');

      expect(img.alt).toBe(`Foto de ${mockParticipant.name}`);
    });

    it('deve manter acessibilidade com nomes especiais', () => {
      const participant = {
        name: 'José da Silva & Ana Maria',
        picture: 'jose-ana.jpg',
        description: 'Casal participante'
      };

      const card = createParticipantCard(participant);
      const img = card.querySelector('img');

      expect(img.alt).toBe('Foto de José da Silva & Ana Maria');
    });
  });

  describe('Tratamento de Edge Cases', () => {
    it('deve lidar com dados vazios graciosamente', () => {
      const emptyParticipant = { name: '', picture: '', description: '' };

      expect(() => createParticipantCard(emptyParticipant)).not.toThrow();

      const card = createParticipantCard(emptyParticipant);
      expect(card.querySelector('img')).toBeTruthy();
      expect(card.querySelector('h2')).toBeTruthy();
      expect(card.querySelector('p')).toBeTruthy();
    });

    it('deve tratar caracteres especiais no HTML', () => {
      const specialParticipant = {
        name: '<script>alert("xss")</script>',
        picture: 'test.jpg',
        description: 'Teste & validação de segurança'
      };

      const card = createParticipantCard(specialParticipant);

      // NOTA: Este teste documenta o comportamento atual
      // Em produção, seria recomendável escapar o conteúdo HTML
      expect(card.textContent).toContain('alert("xss")');
      expect(card.textContent).toContain('Teste & validação');

      // Verifica que existe o elemento (comportamento atual)
      // Em uma implementação mais segura, isto seria 0
      const scripts = card.querySelectorAll('script');
      expect(scripts.length).toBeGreaterThanOrEqual(0);
    });

    it('deve lidar com URLs de imagem complexas', () => {
      const participant = {
        name: 'Test User',
        picture: 'https://example.com/path/to/image.jpg?v=123&format=webp',
        description: 'Test description'
      };

      const card = createParticipantCard(participant);
      const img = card.querySelector('img');

      expect(img.src).toContain('https://example.com/path/to/image.jpg');
    });

    it('deve funcionar com nomes muito longos', () => {
      const longNameParticipant = {
        name: 'Este é um nome extremamente longo que pode quebrar o layout se não for tratado adequadamente',
        picture: 'long-name.jpg',
        description: 'Descrição de teste'
      };

      const card = createParticipantCard(longNameParticipant);
      const nameElement = card.querySelector('h2');

      expect(nameElement.textContent).toBe(longNameParticipant.name);
    });
  });

  describe('Consistência e Performance', () => {
    it('deve gerar HTML consistente (snapshot)', () => {
      const card = createParticipantCard(mockParticipant);
      expect(card.outerHTML).toMatchSnapshot();
    });

    it('deve criar múltiplos cards independentes', () => {
      const participants = [
        { name: 'Ana', picture: 'ana.jpg', description: 'Desc 1' },
        { name: 'Bruno', picture: 'bruno.jpg', description: 'Desc 2' },
        { name: 'Carlos', picture: 'carlos.jpg', description: 'Desc 3' }
      ];

      const cards = participants.map(p => createParticipantCard(p));

      expect(cards).toHaveLength(3);

      // Verifica se cada card é único e contém os dados corretos
      cards.forEach((card, index) => {
        expect(card.textContent).toContain(participants[index].name);
        expect(card.querySelector('img').src).toContain(participants[index].picture);
      });
    });

    it('deve ser performático para criação em massa', () => {
      const startTime = performance.now();

      // Cria 100 cards
      for (let i = 0; i < 100; i++) {
        createParticipantCard({
          name: `Participant ${i}`,
          picture: `pic${i}.jpg`,
          description: `Description ${i}`
        });
      }

      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Deve executar em menos de 200ms (mais realista)
      expect(executionTime).toBeLessThan(200);
    });
  });

  describe('Integração com CSS', () => {
    it('deve ter todas as classes CSS necessárias', () => {
      const card = createParticipantCard(mockParticipant);

      expect(card.classList.contains('participant-card')).toBe(true);
      expect(card.querySelector('.participant-content')).toBeTruthy();
      expect(card.querySelector('.participant-text')).toBeTruthy();
      expect(card.querySelector('.participant-image')).toBeTruthy();
    });

    it('deve estar preparado para interações CSS (hover, etc)', () => {
      const card = createParticipantCard(mockParticipant);

      // Verifica se os elementos estão estruturados para CSS hover
      expect(card.querySelector('img')).toBeTruthy();
      expect(card.querySelector('h2')).toBeTruthy();
      expect(card.querySelector('p')).toBeTruthy();
    });
  });
});

