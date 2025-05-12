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

function addWordToDOM() {
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
    timeEl.innerHTML = time + "s";
  } else {
    clearInterval(countdown);
    gameOver();
  }
};


//Game over
function gameOver() {
  endgameEl.style.display = "block";
}

//Main function
text.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (text.value === randomWord) {
      updateScore();
      addWordToDOM();
      addTime();
      text.value = "";
    }
    else {
      text.value = "";
      alert("Wrong word");
    }
  }
});
//Hide settings
settingsBtn.addEventListener("click", function (e) {
  if (settings.style.display = "flex") {
    settings.style.display = "none";
  }
  else if (settings.style.display = "none") {
    settings.style.display = "flex";
  }
});
//Change settings
let difficulty = difficultySelect.value;
difficultySelect.addEventListener("change", function (e) {
  difficulty = e.target.value;
});

//Add time
function addTime() {
  if (difficulty === "easy") {
    time += 5;
  } else if (difficulty === "medium") {
    time += 3;
  } else if (difficulty === "hard") {
    time += 1;
  }
}
addWordToDOM();