const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
let lastScrollTop = 0;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Прокручиваем вниз — прячем гамбургер
    hamburger.classList.add('hidden');
  } else {
    // Прокручиваем вверх — показываем гамбургер
    hamburger.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // не даём уйти в отрицательные
});
