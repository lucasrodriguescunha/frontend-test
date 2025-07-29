import { sortParticipants } from './sortParticipants.js';

function createParticipantCard(participant) {
  const totalVotes = (participant.positive || 0) + (participant.negative || 0);
  const positivePercentage = totalVotes > 0 ? Math.round((participant.positive / totalVotes) * 100) : 0;
  const negativePercentage = totalVotes > 0 ? 100 - positivePercentage : 0;

  const participantCard = document.createElement('article');
  participantCard.classList.add('participant-card');

  participantCard.innerHTML = `
    <div class="participant-content">
      <div class="image-wrapper">
        <img class="participant-image" src="${participant.picture}" alt="Foto de ${participant.name}" loading="lazy">
        <span class="badge">${participant.position}</span>
      </div>

      <div class="participant-text">
        <h2>${participant.name}</h2>
        <p>${participant.description}</p>
      </div>
    </div>

    <div class="vote-status">
      <div class="vote like">
        <span>Gostam</span>
        <strong>${positivePercentage}%</strong>
      </div>
      <div class="vote dislike">
        <span>Não Gostam</span>
        <strong>${negativePercentage}%</strong>
      </div>
    </div>
  `;
  return participantCard;
}

document.addEventListener('DOMContentLoaded', () => {
  const participantsContainer = document.querySelector('.participants-container');

  fetch('../data/fazenda.json')
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar JSON');
      return response.json();
    })
    .then(data => {
      const sorted = sortParticipants(data.data, 'positive');
      sorted.forEach((participant, index) => {
        participant.position = index + 1;
        const card = createParticipantCard(participant);
        participantsContainer.appendChild(card);
      });
    })
    .catch(error => console.error(error));
});

// Para compatibilidade com CommonJS (testes)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createParticipantCard };
}