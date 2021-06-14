export function toggleMenu(toggler) {
  const menu = document.querySelector('.header__navbar')

  menu.classList.toggle('active')
  toggler.classList.toggle('active')
}