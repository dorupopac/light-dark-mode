const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navContainer = document.getElementById('nav');
const mediaQuery = document.querySelector('.mediaQuery')
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Smooth scrolling
navContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const navLink = e.target.closest('a');
  if (!navLink) return;
  const section = navLink.getAttribute('href');
  document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
});

// Dark Mode Styles
const darkMode = boolean => {
  const class1 = boolean ? 'fa-sun' : 'fa-moon';
  const class2 = boolean ? 'fa-moon' : 'fa-sun';

  navContainer.style.backgroundColor = `rgb(${
    boolean ? '0 0 0' : '255 255 255'
  } / 50%)`;
  mediaQuery.style.backgroundColor = `rgb(${
    boolean ? '0 0 0' : '255 255 255'
  } / 50%)`;
  textBox.style.backgroundColor = `rgb(${
    boolean ? '255 255 255' : '0 0 0'
  } / 50%)`;
  toggleIcon.children[0].textContent = `${
    boolean ? 'Dark Mode' : 'Light Mode'
  }`;
  toggleIcon.children[1].classList.replace(class1, class2);
  image1.src = `./img/undraw_proud_coder_${boolean ? 'dark' : 'light'}.svg`;
  image2.src = `./img/undraw_feeling_proud_${boolean ? 'dark' : 'light'}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${boolean ? 'dark' : 'light'}.svg`;
};

// Switch Theme Dynamically
const switchTheme = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    darkMode(false);
  }
};

// Checkbox toggle
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode(true);
  }
}
