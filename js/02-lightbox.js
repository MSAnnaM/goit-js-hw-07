import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPlace = document.querySelector('ul');
const galleryLink = galleryItems
    .map((item) => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`)
    .join('');

galleryPlace.insertAdjacentHTML('afterbegin', galleryLink);
