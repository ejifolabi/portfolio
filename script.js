// Scroll reveal effect
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Load GitHub projects dynamically
fetch('https://api.github.com/users/ejifolabi/repos?sort=updated')
  .then(res => res.json())
  .then(data => {
    const carousel = document.getElementById('project-carousel');
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided.'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      carousel.appendChild(card);
    });
  });

// Testimonials (mockup)
const testimonials = [
  {
    name: "Jane Doe",
    message: "Emmanuel is a dedicated and creative engineer. He brings vision to every AI solution."
  },
  {
    name: "John Smith",
    message: "Collaborating with Emmanuel was one of the best parts of our project."
  }
];

const testimonialSlider = document.getElementById('testimonial-slider');
testimonials.forEach(t => {
  const div = document.createElement('div');
  div.className = 'testimonial';
  div.innerHTML = `
    <p>\"${t.message}\"</p>
    <strong>- ${t.name}</strong>
  `;
  testimonialSlider.appendChild(div);
});
// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
