"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();
  hand1 = hand1.replace(/ /g, "");
  hand2 = hand2.replace(/ /g, "");

  if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 == "rock" && hand2 == "scissors") {
    return "Hand one wins!";
  } else if (hand1 == "paper" && hand2 == "scissors") {
    return "Hand two wins!";
  } else if (hand1 == "scissors" && hand2 == "paper") {
    return "Hand one wins!";
  } else if (hand1 == "paper" && hand2 == "rock") {
    return "Hand one wins!";
  } else if (hand1 == "rock" && hand2 == "paper") {
    return "Hand two wins!";
  } else if (hand1 == "scissors" && hand2 == "rock") {
    return "Hand two wins!";
  }
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
    it("should detect if user uses another word other than rock, paper, and/or scissors", () => {
      assert.equal(rockPaperScissors("hammer", "rock"), "No one wins!");
      assert.equal(rockPaperScissors("paper", "sock"), "No one wins!");
      assert.equal(rockPaperScissors("scissors", "shoe"), "No one wins!");
    });
    it("should detect if a player has left their turn empty", () => {
      assert.equal(rockPaperScissors(" ", "rock"), "Start over");
      assert.equal(rockPaperScissors("paper", " "), "Start over");
      assert.equal(rockPaperScissors("scissors", " "), "Start over");
    });
    it("should ignore weird punctuation in/before/or after word", () => {
      assert.equal(rockPaperScissors("ro,ck", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "sciss.ors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock,", "scissors"), "Hand one wins!");
    });
  });
} else {
  getPrompt();
}
