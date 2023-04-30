const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 30;

canvas.style.border = "solid red 5px";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let is_dragging = false; //variable to set if the shape is draggin or not
let current_shape_index; //what shape we are dragging
let startX; //where we did click
let startY;

let shapes = []; //array of shapes

const randomNum = (max) => Math.floor(Math.random() * max);
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const addShapes = () => {
  //we need to charge the random shapes to the array
  for (let i = 0; i < 5; i++) {
    randomX = randomNum(canvasWidth);
    randomY = randomNum(canvasHeight);
    randomWidth = randomNum(canvasWidth / 2);
    randomHeight = randomNum(canvasHeight / 2);
    color = randomColor();
    shapes.push({
      x: randomX,
      y: randomY,
      width: randomWidth,
      height: randomHeight,
      color: color,
    });
  }
};
const draw = () => {
  //now we need to draw thats shapes
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  shapes.forEach((shape) => {
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    ctx.fillStyle = `#${shape.color}`;
  });
};

const is_mouse_on_shape = (x, y, shape) => {
  //we take the area of all shapes and compare it's with the area where
  let shapeLeft = shape.x; // we did click
  let shapeRight = shape.x + shape.width;
  let shapeTop = shape.y;
  let shapeBottom = shape.y + shape.height;

  if (x > shapeLeft && x < shapeRight && y > shapeTop && y < shapeBottom) {
    return true;
  } else {
    return false;
  }
};

const mouse_down = function (event) {
  //when we do click
  event.preventDefault();
  startX = parseInt(event.clientX); //we take the position of the click
  startY = parseInt(event.clientY);
  for (const [index, shape] of shapes.entries()) {
    //see the shapes
    if (is_mouse_on_shape(startX, startY, shape)) {
      //see if the click was on any shape
      current_shape_index = index; //change the global index to the current shape index
      //set dragging on true if we did click on any shape area
      is_dragging = true;
      return;
    }
  }
};
const mouse_move = function (event) {
  if (!is_dragging) {
    //the function doesnt do anything if its no dragging any shape
    return;
  } else {
    let mouseX = parseInt(event.clientX); //take the client X
    let mouseY = parseInt(event.clientY);

    let actualX = mouseX - startX; //difference between where the mouse is right noiw and the start point
    let actualY = mouseY - startY;

    let current_shape = shapes[current_shape_index];
    current_shape.x += actualX; //change the position adding the difference
    current_shape.y += actualY;

    draw(); //draw

    startX = mouseX;
    startY = mouseY;
  }
};

const mouse_up = function (event) {
  if (!is_dragging) {
    return;
  } else {
    event.preventDefault();
    is_dragging = false;
  }
};

canvas.onmouseup = mouse_up;
canvas.onmousedown = mouse_down;
canvas.onmousemove = mouse_move;
addShapes();
draw();
