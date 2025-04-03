const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;


const BALL_SIZE = 5;
let ballPosition ;

const MAX_COMPUTER_SPEED = 2;
let isGameOver = false;

let winner = null;
// Ball speed
let xSpeed;
let ySpeed;

// Ball starting position
function initBall(){
    ballPosition = {
        x:20,y:30
    };
    xSpeed = 4;
    ySpeed = 2;
}

// Paddles
const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;

let leftPaddleTop = 10;
let rightPaddleTop = 30;

let leftScore = 0;
let rightScore = 0;

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

    // Draw the scores
    ctx.font = "20px Arial";
    ctx.textAlign = "left";
    ctx.fillText(leftScore.toString(),50,50);
    ctx.textAlign = "right";
    ctx.fillText(rightScore.toString(), width - 50, 50);
}


// Computer AI logic to follow the ball
function followBall(){
    let ball = {
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE,
    }
    let paddle = {
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT,
    }
    if(ball.top < paddle.top){
        leftPaddleTop -= MAX_COMPUTER_SPEED;

    }
    if(ball.bottom > paddle.bottom){
        leftPaddleTop += MAX_COMPUTER_SPEED
    }

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
    followBall();
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
        console.log(`top: ${distanceFromTop}, bottom: ${distanceFromBottom}`);

        xSpeed = Math.abs(xSpeed);
    }

    // Check for collision with right paddles
    if(checkPaddleCollision(ball, rightPaddle)){
        let distanceFromTop = ball.top - rightPaddle.top;
        let distanceFromBottom = ball.bottom - rightPaddle.bottom;
        adjustAngle(distanceFromTop, distanceFromBottom);

        xSpeed = -Math.abs(xSpeed);
    }
    
    if(ball.left < 0){
        rightScore++;
        initBall();
    }
    if(ball.right > width){
        leftScore++;
        initBall();
    }

    if(leftScore >= 5 || rightScore >= 5){
        isGameOver = true;
        if(leftScore >= 5){
            winner = "Ops!! Computer wins";
        }
        if(rightScore >= 5){
            winner = "Congratulations, you win!";
        }
    }

    // if(ball.left<0 || ball.right > width){
    //     xSpeed = -xSpeed;
    // };

    if(ball.top<0 || ball.bottom > height){
        ySpeed = -ySpeed;
    };
    
}

function drawGameOver(){
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", width/2, height/2);
    ctx.fillStyle = "orange";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText(winner, width/2, height/2+30);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Click to Restart", width/2, height/2 + 60);
    canvas.addEventListener("click", restartGame);
}
function restartGame(){
    leftScore = 0;
    rightScore = 0;
    isGameOver = false;
    initBall();
    gameLoop();
}
function gameLoop(){
    draw();
    update();
    checkCollision()
    if(isGameOver){
        draw();
        drawGameOver();
    }else{
        setTimeout(gameLoop, 30)
    }
}
initBall();
gameLoop();
