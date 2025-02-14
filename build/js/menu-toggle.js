const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');

header.classList.remove('header--menu-nojs', 'header--menu-opened');
header.classList.add('header--menu-closed');

navToggle.addEventListener('click', function() {
  if (header.classList.contains('header--menu-closed')) {
    header.classList.remove('header--menu-closed');
    header.classList.add('header--menu-opened');
  } else {
    header.classList.add('header--menu-closed');
    header.classList.remove('header--menu-opened');
  }
});
