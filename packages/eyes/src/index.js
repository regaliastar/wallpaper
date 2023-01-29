import './style.scss';

const multiple = 10;
const element = document.getElementById('element');

function transformElement(x, y) {
  let box = element.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / multiple;
  let calcY = (x - box.x - box.width / 2) / multiple;

  element.style.transform = 'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)';
}

document.getElementsByTagName('body')[0].addEventListener('mousemove', e => {
  window.requestAnimationFrame(function () {
    transformElement(e.clientX, e.clientY);
  });
});
