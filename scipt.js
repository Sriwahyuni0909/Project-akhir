const burgerMenu = document.querySelector('.burger-menu');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {

    burgerMenu.style.opacity = '0';
    burgerMenu.style.pointerEvents = 'none';
  } else {
   
    burgerMenu.style.opacity = '1';
    burgerMenu.style.pointerEvents = 'auto';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


document.querySelectorAll('.nav-right a').forEach(link => {
  link.addEventListener('touchstart', () => {
    link.classList.add('touched');
  });
  link.addEventListener('touchend', () => {
    setTimeout(() => link.classList.remove('touched'), 300);
  });
});



