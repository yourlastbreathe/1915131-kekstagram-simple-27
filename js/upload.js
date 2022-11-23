import { checkStringLength } from './util.js';
const uploadButton = document.querySelector('.img-upload__input');
const uploadPhoto = document.querySelector('.hidden');
const closeButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const checkbox = document.querySelectorAll('.effects__radio');
const previewPhoto = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const commentInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const addHandlersToElements = () => {
  uploadButton.addEventListener('change', () => {
    uploadPhoto.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  closeButton.addEventListener('click', () => {
    uploadPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', () => {
      previewPhoto.classList.remove(previewPhoto.classList[previewPhoto.classList.length - 1]);
      previewPhoto.classList.add(`effects__preview--${checkbox[i].value}`);
    });
  }

  scaleSmaller.addEventListener('click', () => {
    const scaleValue = parseInt(scaleControlValue.value, 10);
    if (scaleValue <= 25) {
      return false;
    }
    scaleControlValue.value = `${scaleValue - 25}%`;
    previewPhoto.style.scale = `${(scaleValue - 25) / 100}`;
  });

  scaleBigger.addEventListener('click', () => {
    const scaleValue = parseInt(scaleControlValue.value, 10);
    if (scaleValue >= 100) {
      return false;
    }
    scaleControlValue.value = `${scaleValue + 25}%`;
    previewPhoto.style.scale = `${(scaleValue + 25) / 100}`;
  });

  commentInput.addEventListener('input', () => {
    if (checkStringLength(commentInput.value, 20, 140)) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', true);
    }
    window.console.log(checkStringLength(commentInput.value, 20, 140));
  });
};

export {addHandlersToElements};
