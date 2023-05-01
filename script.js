document.getElementById('title').innerHTML = 'Paleta de Cores';

const numColors1 = `${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
const numColors2 = `${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
const numColors3 = `${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0, 0, 0)';
document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${numColors1})`;
document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${numColors2})`;
document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${numColors3})`;

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.width = '210px';
pixelBoard.style.height = '210px';

let selected = 'black';
window.onload = document.getElementsByClassName('color')[0].classList.add('selected');

function preto() {
  selected = 'black';
  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[1].classList.remove('selected');
  document.getElementsByClassName('color')[2].classList.remove('selected');
  document.getElementsByClassName('color')[3].classList.remove('selected');
}
document.getElementsByClassName('color')[0].onclick = preto;

function azul() {
  selected = `rgb(${numColors1})`;
  document.getElementsByClassName('color')[1].classList.add('selected');
  document.getElementsByClassName('color')[0].classList.remove('selected');
  document.getElementsByClassName('color')[2].classList.remove('selected');
  document.getElementsByClassName('color')[3].classList.remove('selected');
}
document.getElementsByClassName('color')[1].onclick = azul;

function laranja() {
  selected = `rgb(${numColors2})`;
  document.getElementsByClassName('color')[2].classList.add('selected');
  document.getElementsByClassName('color')[0].classList.remove('selected');
  document.getElementsByClassName('color')[1].classList.remove('selected');
  document.getElementsByClassName('color')[3].classList.remove('selected');
}
document.getElementsByClassName('color')[2].onclick = laranja;

function verde() {
  selected = `rgb(${numColors3})`;
  document.getElementsByClassName('color')[3].classList.add('selected');
  document.getElementsByClassName('color')[0].classList.remove('selected');
  document.getElementsByClassName('color')[1].classList.remove('selected');
  document.getElementsByClassName('color')[2].classList.remove('selected');
}
document.getElementsByClassName('color')[3].onclick = verde;

function resetButton() {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
}

document.getElementsByClassName('clear-board').onclick = resetButton;

function deleteAllPixels() {
  const boxes = document.querySelectorAll('.pixel');
  boxes.forEach((ele) => { ele.remove(); });
}

function settingPixels(param) {
  for (let i = 0; i < param * param; i += 1) {
    const cla = document.createElement('div');
    cla.className = 'pixel';
    pixelBoard.appendChild(cla);
  }
}

function addPixelListener() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    const currentPixel = pixel;
    currentPixel.addEventListener('mousemove', () => {
      currentPixel.style.backgroundColor = selected;
    });
  });
}

function boardPixels() {
  const valuePixels = Number(document.getElementById('board-size').value);
  if (!valuePixels) {
    alert('Board inválido!');
  } else if (valuePixels >= 50) {
    deleteAllPixels();
    settingPixels(50);
    pixelBoard.style.width = '420px';
  } else if (valuePixels <= 5) {
    deleteAllPixels();
    settingPixels(5);
    pixelBoard.style.width = '210px';
  } else {
    deleteAllPixels();
    settingPixels(Number(valuePixels));
    pixelBoard.style.width = `${(valuePixels * 42).toString()}px`;
  }
  addPixelListener();
}

document.getElementById('generate-board').onclick = boardPixels;

window.onload = addPixelListener;
