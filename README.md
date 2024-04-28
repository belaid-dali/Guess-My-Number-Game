# Guess My Number JS Game

This is a simple JavaScript game where the user has to guess a randomly generated number between 1 and 20. The game provides visual feedback and keeps track of the user's score and high score.

## How to Play

1. Open the `index.html` file in your web browser.
2. The game will display a random number between 1 and 20, and you need to guess what it is.
3. Enter your guess in the input field and click the "Check!" button.
4. The game will provide feedback based on your guess:
   - If your guess is too high, you'll see the "⬆️ Too High" message.
   - If your guess is too low, you'll see the "⬇️ Too Low!" message.
   - If your guess is correct, you'll see the "🎉 Correct Number!" message, and the game will be won.
5. If you guess the correct number, your score for that round will be recorded as the new high score if it's higher than the previous high score.
6. Your score starts at 20 and decreases by 1 for each incorrect guess.
7. If your score reaches 0, the game is over, and you'll see the "💥 You Lost The Game!" message.
8. To start a new game, click the "Again!" button.

## Files

- `index.html`: The main HTML file that structures the game interface.
- `style.css`: The CSS file that styles the game interface.
- `script.js`: The JavaScript file that contains the game logic.

## Features

- Random number generation between 1 and 20 for each new game.
- Visual feedback for too high, too low, and correct guesses.
- Score tracking and high score display.
- Responsive design for different screen sizes.
- Clean and simple user interface.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Contribute

If you'd like to contribute to this project, feel free to submit a pull request with your proposed changes. Please make sure to follow the existing code style and provide a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).
