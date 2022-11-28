import { galleryItems } from './gallery-items.js';

//____________________________________________________// Створюємо галерею //_______________________________//
const galleryEl = document.querySelector('.gallery'); // шукаємо gallery

const createGallery = galleryItems.reduce(
  (acc, { preview, original, description }) => {      // перебираємо масив фото
    let string =                                      // створюємо шаблонний рядок
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    return acc + string;                              // робимо один рядок html
  },'');

galleryEl.insertAdjacentHTML(                         // вставляємо масим фото
  'beforeend',                                        // вибираємо місце розгортування
  createGallery                                       // вибираємо об"єкт розгортування
);

//____________________________________________________// Клікаємо по зображенню //_______________________________//

  new SimpleLightbox(".gallery a", {                  // Всі налаштування пропонує бібліотека
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
    overlay: true,
    close: true,
    showCounter: true,
    fadeSpeed: 250,
    loop: false,
  });

console.log(galleryItems);

