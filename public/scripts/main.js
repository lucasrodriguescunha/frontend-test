document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.participants-container');

  // Função para criar HTML de participante
  function createParticipantCard(participant) {
    const article = document.createElement('article');
    article.classList.add('participant-card');

    article.innerHTML = `
      <img class='image-participant' src='${participant.picture}'alt='Foto de ${participant.name}' loading='lazy'>
      <h2>${participant.name}</h2>
      <p>${participant.description}</p>
    `;
    return article;
  }

  // Carregar JSON
  fetch('../data/fazenda.json')
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar JSON');
      return response.json();
    })
    .then(data => {
      data.data.forEach(participant => {
        const card = createParticipantCard(participant);
        container.appendChild(card);
      });
    })
    .catch(error => console.error(error));
});
