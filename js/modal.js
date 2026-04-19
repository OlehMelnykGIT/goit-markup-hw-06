const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.backdrop');
const closeBtn = modal.querySelector('.modal-close');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');

menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove('is-open');
  }
});

openBtn.addEventListener('click', () => {
modal.classList.add('is-open');
modal.setAttribute('aria-hidden','false');
});

closeBtn.addEventListener('click', () => {
modal.classList.remove('is-open');
modal.setAttribute('aria-hidden','true');
});

modal.addEventListener('click', e => {
if(e.target === modal){
modal.classList.remove('is-open');
modal.setAttribute('aria-hidden','true');
}
});

document.addEventListener('keydown', e => {
if(e.key === 'Escape'){
modal.classList.remove('is-open');
modal.setAttribute('aria-hidden','true');
}
});