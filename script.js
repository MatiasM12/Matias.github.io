const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('nav');
const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeIcon.src = 'img/modo-claro.png'; 
} else {
  document.body.classList.add('dark-theme');
  themeIcon.src = 'img/modo-oscuro.png';  
}

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeIcon.src = 'img/modo-oscuro.png';  
    localStorage.setItem('theme', 'dark');  
  } else {
    themeIcon.src = 'img/modo-claro.png';  
    localStorage.setItem('theme', 'light');  
  }
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

