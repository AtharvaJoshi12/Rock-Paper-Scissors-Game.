const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};
let heighScore = 0;
let SCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore(0);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(0);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(0);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

let h = localStorage.getItem("High Score");

console.log(h);

if (h == null) {
  localStorage.setItem("High Score", heighScore);
  heighScore = localStorage.getItem("High Score");
}
heighScore = localStorage.getItem("High Score");
document.querySelector("#hscore").innerText = `High Score: ${heighScore}`;

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
  // console.log(heighScore);

  if (SCORE > heighScore) {
    heighScore = SCORE;
    console.log("You made heigh score");
    console.log(heighScore);
    document.querySelector("#hscore").innerText = `High Score: ${heighScore}`;
    localStorage.setItem("High Score", heighScore);
  }
};

let name = localStorage.getItem("Name");
console.log(name);

if (name) {
  document.querySelector("#name").innerText = `Welcome ${name}`;
} else {
  name = prompt("Enter your name");
  localStorage.setItem("Name", name);
  document.querySelector("#name").innerText = `Welcome ${name}`;
}

// window.addEventListener("storage", (e) => {
//   if (e.key === "High Score") {
//     // changeTheme(e.newValue);
//     localStorage.setItem("High Score", e.newValue);
//   }

//   console.log(e);
// });
