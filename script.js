const board = document.getElementById('pixel-board');
const linhas = document.getElementsByClassName('lines');
const pixels = document.getElementsByClassName('pixel');
const pallets = document.getElementsByClassName('color');

// Ao carregar gera cores aleatorias para a paleta de cores e fixa a cor preta como primeira opcao. Referencia = https://css-tricks.com/snippets/javascript/random-hex-color/ //

window.onload = function changepallets() {
  pallets[0].style.backgroundColor = 'black';
  for (let i = 1; i < pallets.length; i += 1) {
    pallets[i].style.backgroundColor = `#${Math.floor(
      Math.random() * 16777000
    ).toString(16)}`;
  }
};

// funcao makelines e makepixels responsavel por gerar o grid de pintura 5x5 //

let gridSize = 5;

function makeLines() {
  for (index = 0; index < gridSize; index += 1) {
    const line = document.createElement('li');
    line.className = 'lines';
    board.appendChild(line);
  }
}
makeLines();

function makePixels() {
  for (let index = 0; index < gridSize; index += 1) {
    for (let index2 = 0; index2 < gridSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhas[index].appendChild(pixel);
    }
  }
}
makePixels();

// Uso da session storage para guardar a cor escolhida e perder a classe anterior, funcao change color para escolher cor a ser guardada. //

sessionStorage.setItem('cor', 'black');
function selectColor(event) {
  sessionStorage.setItem('cor', event.target.style.backgroundColor);
  for (index in pallets) {
    pallets[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
function changeColor() {
  pallets[0].className = 'color selected';
  for (let i = 0; i < pallets.length; i += 1) {
    pallets[i].addEventListener('click', selectColor);
  }
}
changeColor();
