import { sortParticipants } from './sortParticipants.js';

function createParticipantCard(participant) {
  const participantCard = document.createElement('article');
  participantCard.classList.add('participant-card');

  participantCard.innerHTML = `
    <div class='participant-content'>
      <img class='participant-image' src='${participant.picture}' alt='Foto de ${participant.name}' loading='lazy'>
        <div class='participant-text'>
          <h2>${participant.name}</h2>
          <p>${participant.description}</p>
        </div>
    </div>
  `;
  return participantCard;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.participants-container');

  fetch('../data/fazenda.json')
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar JSON');
      return response.json();
    })
    .then(data => {
      const sorted = sortParticipants(data.data, 'positive');
      sorted.forEach(participant => {
        const card = createParticipantCard(participant);
        container.appendChild(card);
      });
    })
    .catch(error => console.error(error));
});

// Para compatibilidade com CommonJS (testes)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createParticipantCard };
}