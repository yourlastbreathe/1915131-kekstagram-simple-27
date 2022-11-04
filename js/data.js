function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(1, 9); //функция, возвращающая случайное целое число из переданного диапазона включительно взята из developer.mozilla.org

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
