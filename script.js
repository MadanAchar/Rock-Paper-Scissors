document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === "new-game") {
            resetGame();
            return;
        }

        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const resultMessage = getResult(playerChoice, computerChoice);

        document.getElementById('player-choice').innerText = `You chose: ${playerChoice}`;
        document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
        document.getElementById('message').innerText = resultMessage;

        document.getElementById('modal').classList.remove('hidden');

        // Change the background to a random gradient
        document.body.style.background = getRandomGradient();
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function resetGame() {
    document.getElementById('player-choice').innerText = '';
    document.getElementById('computer-choice').innerText = '';
    document.getElementById('message').innerText = '';
    document.getElementById('modal').classList.add('hidden');
    
    // Change the background to a random gradient when starting a new game
    document.body.style.background = getRandomGradient();
}

function getRandomGradient() {
    const colors = [
        ['#ff7e5f', '#feb47b'],
        ['#00c6ff', '#0072ff'],
        ['#ff6a00', '#ee0979'],
        ['#6a11cb', '#2575fc'],
        ['#ff4e50', '#fc913a'],
        ['#00c6ff', '#ff8a00'],
        ['#f7797d', '#FBD786'],
        ['#00C9FF', '#92FE9D']
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `linear-gradient(to right, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
}
