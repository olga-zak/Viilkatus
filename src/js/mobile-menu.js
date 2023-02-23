// // import refsList from './refs';

// // const refs = refsList();

// // refs.menuBtn.addEventListener('click', onMenuBtnClick);

// // function onMenuBtnClick() {
// //   const expanded =
// //     refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

// //   refs.menuBtn.classList.toggle('is-open');
// //   refs.menuBtn.setAttribute('aria-expanded', !expanded);
// //   refs.mobileMenu.classList.toggle('is-open');

// //   refs.mobileMenu.addEventListener('click', onMenuClickClose);
// // }

// // function onMenuClickClose(evt) {
// //   if (evt.target.nodeName !== 'A') return;

// //   const expanded =
// //     refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

// //   refs.menuBtn.classList.toggle('is-open');
// //   refs.menuBtn.setAttribute('aria-expanded', !expanded);
// //   refs.mobileMenu.classList.toggle('is-open');

// //   refs.mobileMenu.removeEventListener('click', onMenuClickClose);
// // }
// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };
//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);
//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
// })();
