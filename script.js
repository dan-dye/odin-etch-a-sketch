const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
  let width = prompt("Enter new pixel width: ");
  createPixelMatrix(width);
})

createPixelMatrix(16);

function createPixelMatrix(pixels, color) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
    console.log('removed')
  }
  for (let i = 0; i < pixels * pixels; i++) {
    let newElement = document.createElement('div');
    newElement.textContent = i;
    newElement.style.backgroundColor = color;
    container.appendChild(newElement);
  }
}