import {getRandomIntInclusive} from './util.js';

const photos = [];
const createPhoto = function (id) {
  return {
    id: id,
    url: `photo/${id}.jpg`,
    description: 'Фото',
    likes: getRandomIntInclusive(15, 200),
    comments: getRandomIntInclusive(0, 200)
  };
};

for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto(i));
}

window.console.log(createPhoto(photos));
