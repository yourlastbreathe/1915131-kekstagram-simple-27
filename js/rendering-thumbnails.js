const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция, наполняющая миниатюры данными из массива.
 * @param {Array} picturesData - данные списка фотографий.
 */
const renderPhotoMiniature = (picturesData) => {
  const userPhotoFragment = document.createDocumentFragment();
  picturesData.forEach(({ url, comments, likes }) => {
    const userPhoto = pictureTemplate.cloneNode(true);
    userPhoto.querySelector('.picture__img').src = url;
    userPhoto.querySelector('.picture__comments').textContent = comments;
    userPhoto.querySelector('.picture__likes').textContent = likes;
    userPhotoFragment.appendChild(userPhoto);
  });
  pictures.appendChild(userPhotoFragment);
};

export { renderPhotoMiniature };
