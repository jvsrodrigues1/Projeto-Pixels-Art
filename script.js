const board = document.getElementById('pixel-board');
const linhas = document.getElementsByClassName('lines');
const pixels = document.getElementsByClassName('pixel');

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
