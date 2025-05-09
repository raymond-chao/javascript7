// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addRandomWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerHTML = randomWord;
}
//Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Update time
const countdown = setInterval(updateTime,1000);

function updateTime() {
  if (time > 0) {
    time--;
  } else {
    clearInterval(countdown);
    gameOver();
  }
};
