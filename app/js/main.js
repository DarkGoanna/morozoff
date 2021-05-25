// sticky header
const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('background');
    } else {
        header.classList.remove('background');
    }
})

// menu
const burger = document.querySelector('.menu__burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    // открываем/закрываем меню
    burger.closest('.menu').classList.toggle('open');

    const menuOpen = document.querySelector('.menu.open');
    const menu = document.querySelector('.menu');
})

// our products
$('.products__inner').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
});

// promotions
$('.promotions__inner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="promotions__arrow promotions__arrow_left"></button>',
    nextArrow:'<button class="promotions__arrow promotions__arrow_right"></button>',
});

// popup
const popup = document.querySelector('.popup-wrapper');
document.querySelectorAll('.call-popup').forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.add('open');
    window.classList.add('scrollOff');
  })
})
popup.addEventListener('click', e => {
  if (e.target.classList.contains('popup-wrapper') || e.target.classList.contains('popup__close')) {
      popup.classList.remove('open');
      window.classList.remove('scrollOff');
  }
})

// aos
AOS.init();