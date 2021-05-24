// sticky header
if (window.matchMedia("(min-width: 768px)").matches) {
  const header = document.querySelector('.header');

  document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('background');
      } else {
          header.classList.remove('background');
      }
  })
}

// menu
const burger = document.querySelector('.menu__burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    // открываем/закрываем меню
    burger.closest('.menu').classList.toggle('open');

    const menuOpen = document.querySelector('.menu.open');
    const menu = document.querySelector('.menu');

    if (menuOpen) {
        // добавить событие открытия меню
        menuOpen.addEventListener('click', openSubmenu);
    } else {
        // убрать событие если закрыто 
        menu.removeEventListener('click', openSubmenu);
    }

})

// our products
$('.products__inner').slick({
    rows: 2,
    dots: false,
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