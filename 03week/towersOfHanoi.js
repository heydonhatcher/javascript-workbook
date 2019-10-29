"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//Moves startStack block to endStack, by popping the end block storing it in variable blockToMove
//and pushing it to the endStack, and returning the updated game.

function movePiece(startStack, endStack) {
  let blockToMove = stacks[startStack].pop();
  stacks[endStack].push(blockToMove);
  return stacks;
}

// This is called below for when and if the startBlock is greater than endBlock, it pushes
// the popped block back to their original state. Since, this is not a legal move.

function pushBlocksBack(startStack, startBlock, endStack, endBlock) {
  stacks[startStack].push(startBlock);
  stacks[endStack].push(endBlock);
  return;
}

//This checks legality of move - in all the different ways. It checks that the input is a valid input
//[a, b, or c] otherwise, the console.log will return a notification that the move is not legal, and re-
//print the board. It makes sure that there are blocks at all in the startStack since there needs to be
//blocks there in order to make a move at all. If the endStack = 0, then the move is legal, then the
//function allows the move. However, if there is a number in the string, this function then compares
//the popped startStack block to the popped endStack block. If the endStack block is larger, the movePiece
//function is called; however, if vice versa, the function calls pushBlocksBack since the move is illegal.

function isLegal(startStack, endStack) {
  console.log(startStack, typeof startStack);
  console.log(stacks[startStack]);
  if (
    !(startStack in stacks) ||
    !(endStack in stacks) ||
    startStack === endStack
  ) {
    console.log(
      "startStack or endStack provided do not exist, or are identical. Try again!"
    );
    return false;
  } else if (stacks[startStack].length === 0) {
    console.log(`no blocks on ${startStack}`);
    return false;
  } else if (stacks[endStack].length === 0) {
    return true;
  } else {
    let startBlock = stacks[startStack].pop();
    let endBlock = stacks[endStack].pop();
    let startIsLarger = startBlock > endBlock;
    if (startIsLarger) {
      pushBlocksBack(startStack, startBlock, endStack, endBlock);
      console.log("startBlock is larger than endBlock. ILLEGAL AF.");
      return false;
    } else {
      pushBlocksBack(startStack, startBlock, endStack, endBlock);
      console.log("startBlock is smaller than endBlock. LEGAL AF.");
      return true;
    }
  }
}

//This checks the b or c stack for a winning length of 4. This works in coordinance with legality to
//be valid... or in other words, because of all the previous coding on legal moves, etc, just checking
//the length on the array on b or c should be enough to checkForWin.

function checkForWin(endStack) {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("YOU ARE A WINNER!");
    return true;
  } else {
    console.log("U R LOSER.");
    return false;
  }
  return true;
}

//This calls all the prior functions to play the game!

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
