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

document.addEventListener("mouseover", e =>{
    rightPaddleTop = e.y - canvas.offsetTop;
})

function draw(){
    // Fill the canvas with black
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width, height);
    
    // Everything else will be white
    ctx.fillStyle = "white";

    // Draw the ball
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

    // Draw the paddles
ctx.fillRect(
    PADDLE_OFFSET, leftPaddleTop, PADDLE_WIDTH, PADDLE_HEIGHT
);

ctx.fillRect(
    width - PADDLE_OFFSET - PADDLE_WIDTH, rightPaddleTop, PADDLE_WIDTH, PADDLE_HEIGHT
)

}


function checkPaddleCollision(ball, paddle){
    // Check if the paddle and ball overlap vertically and horizontally
    return (
        ball.left < paddle.right && 
        ball.right > paddle.left &&
        ball.top < paddle.bottom &&
        ball.bottom > paddle.top
    );
}


function update(){
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

// Bouncing Near the Paddle Ends
function adjustAngle(distanceFromTop, distanceFromBottom){
    if(distanceFromTop < 0){
        // Ball is above the paddle, need to reduce the ySpeed
        ySpeed -= 0.5;
    }
    if(distanceFromBottom < 0){
        // Ball is below the paddle, need to increase the ySpeed
        ySpeed += 0.5;
    }
}

function checkCollision(){
    let ball = {
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    };
    let leftPaddle = {
        left: PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT
    };
    let rightPaddle = {
        left: width - PADDLE_WIDTH - PADDLE_OFFSET,
        right: width - PADDLE_OFFSET,
        top: rightPaddleTop,
        bottom: rightPaddleTop + PADDLE_HEIGHT
    };

    // Check for collision with left paddles
    if(checkPaddleCollision(ball, leftPaddle)){
        let distanceFromTop = ball.top - leftPaddle.top;
        let distanceFromBottom = ball.bottom - leftPaddle.bottom;
        adjustAngle(distanceFromTop, distanceFromBottom);
        xSpeed = Math.abs(xSpeed);
    }
    // Check for collision with right paddles
    if(checkPaddleCollision(ball, rightPaddle)){
        let distanceFromTop = ball.top - rightPaddle.top;
        let distanceFromBottom = ball.bottom - rightPaddle.bottom;
        adjustAngle(distanceFromTop, distanceFromBottom);

        xSpeed = -Math.abs(xSpeed);
    }

    if(ball.left<0 || ball.right > width){
        xSpeed = -xSpeed;
    };
    if(ball.top<0 || ball.bottom > height){
        ySpeed = -ySpeed;
    };
    
}
function gameLoop(){
    draw();
    update();
    checkCollision()
    setTimeout(gameLoop, 30)
}
gameLoop();
