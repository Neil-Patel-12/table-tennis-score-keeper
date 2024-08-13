const p1button = document.querySelector("#player1button");
const p2button = document.querySelector("#player2button");

const span1 = document.querySelector("#player1score");
const span2 = document.querySelector("#player2score");

const reset = document.querySelector("#reset");

const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 6;
let isGameOver = false;

let p1SCORE = 0;
let p2SCORE = 0;

function resetGame() {
    p1SCORE = 0;
    p2SCORE = 0;
    span1.innerText = p1SCORE;
    span2.innerText = p2SCORE;
    isGameOver = false;
    span1.classList.remove('winner', 'loser');
    span2.classList.remove('winner', 'loser');
}

p1button.addEventListener('click', function () {
    //code
    if (isGameOver === false) {
        p1SCORE += 1;
        if (p1SCORE === winningScore) {
            isGameOver = true;
            span1.classList.add('winner');
            span2.classList.add('loser');
        }
        span1.innerText = p1SCORE;
    }
});

p2button.addEventListener('click', function () {
    //code
    if (isGameOver === false) {
        p2SCORE += 1;
        if (p2SCORE === winningScore) {
            isGameOver = true;
            span2.classList.add('winner');
            span1.classList.add('loser');
        }
        span2.innerText = p2SCORE;
    }
});

reset.addEventListener('click', resetGame);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
});