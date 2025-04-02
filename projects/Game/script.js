const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;


const BALL_SIZE = 5;
let ballPosition = {x:20, y:20};

// Ball speed
let xSpeed = 4;
let ySpeed = 2;

// Paddles
const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;

let leftPaddleTop = 10;
let rightPaddleTop = 30;


function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width, height);
    ctx.fillStyle = "white";
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);
}

function update(){
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

function checkCollision(){
    let ball  ={
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    }
    if(ball.left<0 || ball.right > width){
        xSpeed = -xSpeed;
    }
    if(ball.top<0 || ball.bottom > height){
        ySpeed = -ySpeed;
    }
}
function gameLoop(){
    draw();
    update();
    checkCollision()
    setTimeout(gameLoop, 30)
}
gameLoop();
