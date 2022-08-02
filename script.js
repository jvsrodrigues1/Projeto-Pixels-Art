const board = document.getElementById('pixel-board');
const linhas = document.getElementsByClassName('lines');
const pixels = document.getElementsByClassName('pixel');
const pallets = document.getElementsByClassName('color');

window.onload = function changepallets() {
  pallets[0].style.backgroundColor = 'black';
  for (let i = 1; i < pallets.length; i += 1) {
    pallets[i].style.backgroundColor = `#${Math.floor(
      Math.random() * 16777000
    ).toString(16)}`;
  }
};

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
