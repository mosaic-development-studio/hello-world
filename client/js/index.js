import { handleMobileMenu } from './lib/mobile-menu';

const mobileMenu = document.querySelector('.navigation__mobile-menu.mobile-menu');

mobileMenu.addEventListener('click', handleMobileMenu, false);