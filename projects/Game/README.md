# JavaScript Pong Game

This project is a simple implementation of the classic Pong game using JavaScript, HTML, and CSS.

## Overview

The game features:

-   A canvas for rendering the game.
-   A ball that bounces off the paddles and walls.
-   Two paddles: one controlled by the player (right) and one controlled by the computer (left).
-   Scoring system.
-   Game over condition when a player reaches a score of 5.
-   Restart functionality.

## How to Play

1.  Open the `index.html` file in your web browser.
2.  The right paddle is controlled by moving the mouse.
3.  The left paddle is controlled by a simple AI that follows the ball.
4.  The first player to reach a score of 5 wins the game.
5.  Click on the canvas after game over to restart the game.

## Files

-   `index.html`: The main HTML file that sets up the game canvas and links the JavaScript file.
-   `style.css`: The CSS file for styling the game elements.
-   `script.js`: The JavaScript file containing the game logic.

## Game Logic

### Initialization

-   The game initializes the canvas, ball position, ball speed, paddle positions, and scores.

### Game Loop

-   The `gameLoop` function is the heart of the game, which is called repeatedly using `setTimeout`.
-   It performs the following actions:
    -   Clears the canvas.
    -   Draws the ball, paddles, and scores.
    -   Updates the ball and paddle positions.
    -   Checks for collisions.
    -   Checks for game over conditions.

### Collision Detection

-   The `checkCollision` function checks for collisions between the ball and the paddles, and the ball and the walls.
-   If the ball collides with a paddle, the ball's horizontal direction is reversed, and the vertical angle is adjusted based on where the ball hits the paddle.
-   If the ball collides with the top or bottom walls, the ball's vertical direction is reversed.
-   If the ball goes out of bounds on the left or right, the corresponding player's score is incremented, and the ball is reset to the center.

### Computer AI

-   The `followBall` function implements a simple AI for the left paddle to follow the ball's vertical position.

### Game Over

-   The `isGameOver` flag is set to true when either player reaches a score of 5.
-   The `drawGameOver` function displays the "Game Over" message and the winner on the canvas.
-   A click event listener is added to the canvas to restart the game.

### Restart Game

-   The `restartGame` function resets the scores, `isGameOver` flag, ball position and restarts the game loop.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Potential Improvements

-   Add more sophisticated AI for the computer player.
-   Implement different difficulty levels.
-   Add sound effects.
-   Improve the styling and visual appeal of the game.
-   Add a menu screen.
