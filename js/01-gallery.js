import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsList = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
}).join(''); 

gallery.insertAdjacentHTML('afterbegin', galleryItemsList);

gallery.addEventListener("click", openOriginalImg);


function openOriginalImg(event) {
event.preventDefault();

if (event.target.classList.contains('gallery__image')) {
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
}
}



