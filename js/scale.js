const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}`;
};

const onSmallerButtonClick = () => {
  scaleImage(
    Math.max(parseInt(scaleInputElement.value, 10) - SCALE_STEP, MIN_SCALE)
  );
};

const onBiggerButtonClick = () => {
  scaleImage(
    Math.min(parseInt(scaleInputElement.value, 10) + SCALE_STEP, MAX_SCALE)
  );
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

window.addEventListener('DOMContentLoaded', () => {
  smallerButtonElement.addEventListener('click', onSmallerButtonClick);
  biggerButtonElement.addEventListener('click', onBiggerButtonClick);
});

export { resetScale };
