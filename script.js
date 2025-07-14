document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal effect
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Load GitHub projects dynamically
  fetch('https://api.github.com/users/ejifolabi/repos?sort=updated')
    .then(response => response.json())
    .then(repos => {
      const container = document.getElementById('github-projects');
      repos.slice(0, 6).forEach(repo => {
        const project = document.createElement('div');
        project.className = 'project';
        project.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || 'No description provided.'}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        container.appendChild(project);
      });
    });
});
