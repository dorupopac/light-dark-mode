// Smooth scroll
const navContainer = document.getElementById('nav');

navContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const navLink = e.target.closest('a');
  if (!navLink) return;

  const section = navLink.getAttribute('href');
  document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
});
