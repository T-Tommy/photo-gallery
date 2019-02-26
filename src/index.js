import images from '../data/images.js';
import makeCardTemplate from './make-card-template.js';

const gallery = document.getElementById('gallery');

images.forEach(image => {
    gallery.appendChild(makeCardTemplate(image));
});