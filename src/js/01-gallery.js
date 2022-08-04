
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCollection(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);



function createGalleryCollection(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}" />
    </a> `;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});


