const picturesElement = document.querySelector('.pictures');
const photoElementTemplate = document.querySelector('#picture').content;

/**
 * Фунукция отрисовки фото
 * @param {Array} picturesList - список данных фото
 */
const renderPhoto = (picturesList) => {
  const listFragment = document.createDocumentFragment();

  picturesList.forEach(({url, likes, comments}) => {
    const photoElement = photoElementTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    listFragment.append(photoElement);
  });

  picturesElement.append(listFragment);
};


export { renderPhoto };
