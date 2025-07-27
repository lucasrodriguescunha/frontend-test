import { sortParticipants } from './sortParticipants.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.participants-container');

  function createParticipantCard(participant) {
    const article = document.createElement('article');
    article.classList.add('participant-card');

    article.innerHTML = `
      <img class='participant-image' src='${participant.picture}' alt='Foto de ${participant.name}' loading='lazy'>
      <h2>${participant.name}</h2>
      <p>${participant.description}</p>
    `;
    return article;
  }

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
