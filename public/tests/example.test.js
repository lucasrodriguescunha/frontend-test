const { createParticipantCard } = require('../scripts/main');

describe('createParticipantCard', () => {
  it('cria um card de participante com nome, imagem e descrição', () => {
    const participant = {
      name: 'Lucas',
      picture: 'lucas.jpg',
      description: 'Participante exemplo'
    };
    const card = createParticipantCard(participant);

    // Verificações
    expect(card).toBeDefined();
    expect(card.tagName).toBe('ARTICLE');
    expect(card.textContent).toContain('Lucas');
    expect(card.textContent).toContain('Participante exemplo');
    expect(card.querySelector('img')).toBeTruthy();
    expect(card.querySelector('img').src).toContain('lucas.jpg');
  })
});

