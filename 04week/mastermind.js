"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "abcd";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // turning guess and solution into element arrays, and ultimately comparing them.
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  let correctLetterLocations = 0;
  let correctLetters = 0;

  console.log(guessArray);
  console.log(solutionArray);
  //iterates over correctLetterLocations
  for (let i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  //moves to the *leftover* letters and iterates over them to see if there are any matches in general
  //takes the guess array letter and checks for its index in the solution array. If it is greater than -1
  //otherwise known as non-existent, increment the correctLetters variable and null in the solutionArray.
  for (let i = 0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
      console.log("correct letter locations:", correctLetterLocations);
      console.log("correct letters:", correctLetters);
      console.log("solution array:", solutionArray);
    }
  }
  return `${correctLetterLocations}-${correctLetters}`;
}

function mastermind(guess) {
  const solution = "abcd"; // Comment this out to generate a random solution
  console.log(solution);
  // your code here
  var hint = generateHint(guess);
  //created guessHint string
  var guessHint = `${guess}-${hint}`;
  board.push(guessHint);
  console.log("hint:", hint);
  if (guess === solution) {
    console.log("You guessed it!");
    //needs to return to pass test
    return "You guessed it!";
  } else if (board.length > 9) {
    console.log(board.length > 9);
    console.log(`You ran out of turns! The solution was: ${solution}`);
    return `You ran out of turns! The solution was: ${solution}`;
  } else {
    console.log("Guess again!");
    return "Guess again!";
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  //generateSolution();
  getPrompt();
}
