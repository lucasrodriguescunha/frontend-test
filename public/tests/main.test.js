const { createParticipantCard } = require('../scripts/main');

describe('createParticipantCard', () => {
  it('cria um card de participante com nome, imagem e descrição', () => {
    const participant = {
      name: 'Lucas',
      picture: 'lucas.jpg',
      description: 'Participante exemplo'
    };

    const card = createParticipantCard(participant);
    expect(card).toBeDefined();
    expect(card.tagName).toBe('ARTICLE');
    expect(card.textContent).toContain('Lucas');
    expect(card.textContent).toContain('Participante exemplo');
    expect(card.querySelector('img')).toBeTruthy();
    expect(card.querySelector('img').src).toContain('lucas.jpg');
  });

  it('usa o alt correto na imagem', () => {
    const participant = {
      name: 'Ana',
      picture: 'ana.jpg',
      description: 'Participante Exemplo'
    };

    const card = createParticipantCard(participant);
    expect(card.querySelector('img').alt).toBe('Foto de Ana');
  });

  it('adiciona as classes corretas', () => {
    const participant = {
      name: 'Marcos',
      picture: 'marcos.jpg',
      description: 'Participante exemplo'
    };

    const card = createParticipantCard(participant);
    expect(card.classList.contains('participant-card')).toBe(true);
  });

  it('lida com dados faltantes', () => {
    const participant = {
      name: '',
      picture: '',
      description: ''
    };

    const card = createParticipantCard(participant);
    expect(card.querySelector('img').src).toBeTruthy();
  })
});

