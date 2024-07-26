document.addEventListener('DOMContentLoaded', (event) => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    guessButton.addEventListener('click', () => {
        let guess = parseInt(guessInput.value);

        if (guess > randomNumber) {
            message.textContent = 'Too high!';
            message.style.color = 'red';
        } else if (guess < randomNumber) {
            message.textContent = 'Too low!';
            message.style.color = 'red';
        } else {
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = 'green';
        }
    });
});
