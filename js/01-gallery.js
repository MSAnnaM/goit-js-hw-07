import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPlace = document.querySelector('ul');
const galleryLink = galleryItems
    .map((item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`)
    .join('');

galleryPlace.insertAdjacentHTML('afterbegin', galleryLink);

const galleryBig = (event) => {
    event.preventDefault();
    const selectedImg = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    selectedImg.show()
    galleryPlace.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        selectedImg.close()
    }
})
}
galleryPlace.addEventListener('click', galleryBig);



