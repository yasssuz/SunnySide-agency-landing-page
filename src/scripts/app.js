import { toggleMenu } from "./handleMenu"

const toggler = document.querySelector('.header__nav-toggler')

toggler.addEventListener('click', () => toggleMenu(toggler))