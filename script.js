const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
  let width = prompt("Enter new pixel width (max: 100): ");
  if(width <= 100 && width > 0) {
    createPixelMatrix(width);
  }
  else {
    alert("Invalid entry. Please use a number from 1 to 100.")
  }
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