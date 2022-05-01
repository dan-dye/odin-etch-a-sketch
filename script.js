const container = document.querySelector('.container');
const button = document.querySelector('button');


button.addEventListener('click', function (e) {
  let width = prompt("Enter new pixel width: ");
  createPixelMatrix(width);
})

createPixelMatrix(16);

function createPixelMatrix(pixels) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;

  for (let i = 0; i < pixels * pixels; i++) {
    let newElement = document.createElement('div');
    container.appendChild(newElement);
    newElement.addEventListener('mouseover', function (e) {
      newElement.classList.add('hover');
    })
  }
}