import { getRandomIntInclusive } from './util.js';

const photos = [];
const createPhoto = function (id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Фото',
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200)
  };
};


const createPhotos = () => {
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

export {createPhotos};
