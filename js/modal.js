const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close');

// Accesiibility Вона невидима для очей АЛЕ 
// вона все ще існує в DOM M скрінрідер її ЧИТАЄ

modal.setAttribute('aria-hidden', 'false');
modal.setAttribute('aria-hidden', 'true');

// Відкрити
openBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

// Закрити по кнопці
closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// Закрити по кліку на backdrop
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});

// Закрити по кліку на ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('is-open');
  }
});