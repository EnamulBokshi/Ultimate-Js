/*
In this project, we will create a pong game using OOP principles.
We already have developed the game without OOP principles.
Now we will refactor the code to use OOP principles.
The target is to clear OOP principles and to use them in the game.
*/

class GameView {
    constructor() {
        let canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.offsetTop = canvas.offsetTop;
    }
    draw(...entities) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
        entities.forEach(entity => entity.draw(this.ctx));
    }
    drawScore(scores) {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px monospace';
        this.ctx.textAlign = 'left'
        this.ctx.fillText(scores.leftScore.toString(), 50, 50);
        this.ctx.textAlign = 'right';
        this.ctx.fillText(scores.rightScore.toString(), this.width - 50, 50);
    }
    drawGameOver() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("Game Over", this.width / 2, this.height / 2);
    }
}

class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    boundingBox() {
        return {
            left: this.x,
            right: this.x + this.width,
            top: this.y,
            bottom: this.y + this.height
        };
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
class Paddle extends Entity {
    static WIDTH = 5;
    static HEIGHT = 20;
    static OFFSET = 10;
    constructor(x, y) {
        super(x, y, Paddle.WIDTH, Paddle.HEIGHT)
    }
}
class Ball extends Entity {
    static SIZE = 5;

    constructor() {
        super(0, 0, Ball.SIZE, Ball.SIZE);
        this.init();
    }
    init() {
        this.x = this.gameView ? this.gameView.width / 2 : 20;
        this.y = this.gameView ? this.gameView.height / 2 : 20;
        this.xSpeed = 4;
        this.ySpeed = 2;
    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    adjustAngle(distanceFromTop, distanceFromBottom) {
        if (distanceFromTop < 0) {
            this.ySpeed -= 0.5;
        }
        else if (distanceFromBottom > 0) {
            this.ySpeed += 0.5;
        }
    }
    checkPaddleCollision(paddle, xSpeedAfterBouce) {
        let ballBox = this.boundingBox();
        let paddleBox = paddle.boundingBox();

        let collisionOccured = (
            ballBox.right > paddleBox.left &&
            ballBox.left < paddleBox.right &&
            ballBox.top < paddleBox.bottom &&
            ballBox.bottom > paddleBox.top
        );
        if (collisionOccured) {
            let distanceFromTop = ballBox.top - paddleBox.top;
            let distanceFromBottom = paddleBox.bottom - ballBox.bottom;
            this.adjustAngle(distanceFromTop, distanceFromBottom);
            this.xSpeed = xSpeedAfterBouce;
        }

    }
    checkWallCollision(width, height, scores) {
        let ballBox = this.boundingBox();

        // Hit left wall
        if (ballBox.left < 0) {
            scores.rightScore++;
            this.init();
        }
        // Hit right wall
        if (ballBox.right > width) {
            scores.leftScore++;
            this.init();
        }
        // Hit top or bottom wall
        if (ballBox.top < 0 || ballBox.bottom > height) {
            this.ySpeed = -this.ySpeed;
        }
    }
}

class Scores {
    constructor() {
        this.leftScore = 0;
        this.rightScore = 0;
    }
}
class Computer {
    static followBall(paddle, ball) {
        const MAX_SPEED = 2;
        let ballBox = ball.boundingBox();
        let paddleBox = paddle.boundingBox();

        if (ballBox.top < paddleBox.top) {
            paddle.y -= MAX_SPEED;
        }
        else if (ballBox.bottom > paddleBox.bottom) {
            paddle.y += MAX_SPEED;
        }

    }

}

class Game {
    constructor() {
        this.gameView = new GameView();
        this.ball = new Ball();
        this.ball.gameView = this.gameView; // set gameView so ball can access width and height
        this.leftPaddle = new Paddle(Paddle.OFFSET, 10)
        this.rightPaddle = new Paddle(this.gameView.width - Paddle.OFFSET - Paddle.WIDTH, 30)
        this.scores = new Scores();
        this.gameOver = false;
        document.addEventListener('mousemove', e => {
            this.rightPaddle.y = e.y - this.gameView.offsetTop - Paddle.HEIGHT/2;
        });
       
    }
    draw(){
        this.gameView.draw(this.ball, this.leftPaddle, this.rightPaddle);
        this.gameView.drawScore(this.scores);
    }
    checkCollision(){
        let xSpeedAfterBouce = Math.abs(this.ball.xSpeed) * 1.1
        this.ball.checkPaddleCollision(this.leftPaddle, xSpeedAfterBouce)
        this.ball.checkPaddleCollision(this.rightPaddle, -xSpeedAfterBouce);

        this.ball.checkWallCollision(this.gameView.width, this.gameView.height,this.scores);
        if(this.scores.leftScore > 9 || this.scores.rightScore > 9){
            this.gameOver = true;
        }
    }
    update(){
        this.ball.update();
        Computer.followBall(this.leftPaddle, this.ball);

    }
    loop(){
        this.draw();
        this.update();
        this.checkCollision();
        
        if (this.gameOver){
            this.draw();
            this.gameView.drawGameOver();
        } else{
            setTimeout(()=> this.loop(), 30)
        }

    }
}

let game = new Game();
game.loop();
