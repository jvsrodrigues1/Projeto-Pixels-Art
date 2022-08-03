const board = document.getElementById('pixel-board');
const linhas = document.getElementsByClassName('lines');
const pixels = document.getElementsByClassName('pixel');
const pallets = document.getElementsByClassName('color');
const button = document.getElementById('generate-board');
const bordS = document.getElementById('board-size');
const cleanGrid = document.getElementById('clear-board');

// Ao carregar gera cores aleatorias para a paleta de cores e fixa a cor preta como primeira opcao. Referencia = https://css-tricks.com/snippets/javascript/random-hex-color/ //

window.onload = function changePallets() {
  pallets[0].style.backgroundColor = 'black';
  for (let index = 1; index < pallets.length; index += 1) {
    pallets[index].style.backgroundColor = `#${Math.floor(
      Math.random() * 16777000,
    ).toString(16)}`;
  }
};

// funcao makelines e makepixels responsavel por gerar o grid de pintura 5x5 //

let gridValue = 5;

function makeLines() {
  for (let index = 0; index < gridValue; index += 1) {
    const line = document.createElement('li');
    line.className = 'lines';
    board.appendChild(line);
  }
}
makeLines();

function makePixels() {
  for (let index = 0; index < gridValue; index += 1) {
    for (let index2 = 0; index2 < gridValue; index2 += 1) {
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
  for (let index = 0; index < pallets.length; index += 1) {
    pallets[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
function changeColor() {
  pallets[0].className = 'color selected';
  for (let index = 0; index < pallets.length; index += 1) {
    pallets[index].addEventListener('click', selectColor);
  }
}
changeColor();

// funcao getColor e paintGrid para pintar o grid com as cores armazenadas, evento target referencia = aula da tamara postada no slack obrigado tamara S2! //

function getColor(event) {
  const alvo = event.target;
  alvo.style.backgroundColor = sessionStorage.getItem('cor');
}
function paintGrid() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', getColor);
  }
}
paintGrid();

// funcao dinamicBoard para deixar o board dinamico e receber o tamanho atraves do botao input, adiciona alerta para input vazio //

function dinamicBoard() {
  if (bordS.value === '') {
    alert('Board inválido!');
  }
  if (parseInt(bordS.value, 10) > 50) {
    gridValue = 50;
  } else if (parseInt(bordS.value, 10) < 5) {
    gridValue = 5;
  } else {
    gridValue = parseInt(bordS.value, 10);
  }
  board.innerHTML = '';
  makeLines();
  makePixels();
  paintGrid();
}
button.addEventListener('click', dinamicBoard);

// adicona funcao para limpar o board //

function cleanBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
cleanGrid.addEventListener('click', cleanBoard);
