import { galleryItems } from './gallery-items.js';

//____________________________________________________// Створюємо галерею //_______________________________//
const galleryEl = document.querySelector('.gallery'); // шукаємо gallery

const createGallery = galleryItems.reduce(
  (acc, { preview, original, description }) => {      // перебираємо масив фото
    let string =                                      // створюємо шаблонний рядок
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/></a></div>`;              // заповнюємо шаблонними рядками галерею
    return acc + string;                              // робимо один рядок html
  },'');

galleryEl.insertAdjacentHTML(                         // вставляємо масим фото
  'beforeend',                                        // вибираємо місце розгортування
  createGallery                                       // вибираємо об"єкт розгортування
);

//____________________________________________________// Клікаємо по зображенню //_______________________________//

const onImgClick = event => {
  event.preventDefault();                             // забороняємо виконання посилання, тобто скачування фото\перехід на ін сторінку

  const instance = basicLightbox.create(              // Бібліотека basicLightbox
    `<img src="${event.target.dataset.source}", width="800" height="600">`);
  instance.show();

  const onEscKeyPress = event => {                    // Виходимо по Esc (Репета)
    if (event.code === 'Escape') {                    // Подія це Esc
      instance.close();                               // Бібліотека basicLightbox
      window.removeEventListener('keydown', onEscKeyPress); // Прибираємо слухача, щоб не засмічувати ефір
    }
  };
  window.addEventListener('keydown', onEscKeyPress);  // Запуск функції виходу по Esc

};

galleryEl.addEventListener('click', onImgClick);

console.log(galleryItems);

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
