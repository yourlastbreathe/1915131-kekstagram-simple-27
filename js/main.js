import { createPhotos } from './data.js';
import { renderPhoto } from './photo.js';
import { addHandlersToElements } from './upload.js';

const photosData = createPhotos(25);
renderPhoto(photosData);
addHandlersToElements();
