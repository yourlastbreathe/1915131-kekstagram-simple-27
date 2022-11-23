import { getRandomIntInclusive } from './util.js';

const createPhoto = function (id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Фото',
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200)
  };
};

/**
 * генерация объектов фото
 * @param {number} count - число фотографий
 * @return {Array} массив сгенерированных фото
 */
const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

export {createPhotos};
