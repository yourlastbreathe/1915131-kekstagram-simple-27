import {createPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const photoElementTemplate = document.querySelector('#picture').content;
const listFragment = document.createDocumentFragment();
const photosList = createPhotos();

photosList.forEach(({url, likes, comments}) => {
  const photoElement = photoElementTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  listFragment.append(photoElement);
});

pictures.append(listFragment);

window.console.log(photosList);
