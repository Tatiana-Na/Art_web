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


//Slider

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 768) {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // показываем только первый слайд
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'flex' : 'none';
    });

    // обработчик клика по картинке
    const slider = document.querySelector('.slider');
    slider.addEventListener('click', () => {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'flex';
    });
  }
});

//Изменение экрана
//  let slide = document.querySelector(".slide");

document.addEventListener("resize", function() {
  let widthNumber =window.innerWidth.split("p")[0];

  if(widthNumber > 450) {
    // slide.classList.add(".slide_desctop");
     let img_slider = document.querySelector(".slide img").marginLeft;
let caption = document.querySelector(".caption");
caption.marginLeft = img_slider;
  }
})

