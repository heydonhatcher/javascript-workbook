"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//

function checkForFirstVowel(vowels, word) {
  let indexes = [];
  for (const vowel of vowels) {
    console.log(vowel);
    console.log(word.indexOf(vowel));
    if (word.indexOf(vowel) === 0) {
      console.log(word + "yay");
      return word + "yay";
    } else {
      indexes.push(word.indexOf(vowel));
    }
  }
  console.log(indexes);
  return indexes;
}

function isNegOne(currentValue) {
  return currentValue === -1;
}

function noVowel(indexes) {
  return indexes.every(isNegOne);
}

function innerVowel(res) {
  if (typeof res === "object") {
    let b = noVowel(res);
    console.log(b);
    if (b == true) {
      return word + "ay";
    } else {
      for (const i of res) {
        console.log(i);
        if (i != -1) {
          return i;
        }
      }
    }
  }
}

function splitMe(word, split) {
  let str1 = word.substring(0, split);
  let str2 = word.substring(split);
  let tstr = str2 + str1 + "ay";
  console.log("translation: " + tstr);
  return tstr;
}

function pigLatin(word) {
  word = word.toLowerCase();
  word = word.replace(/ /g, "");

  let vowels = ["a", "e", "i", "o", "u"];
  let vowel = "";

  let res = checkForFirstVowel(vowels, word);
  if (typeof res === "object") {
    let newFilterArray = res.filter(function(number) {
      return number != -1;
    });
    console.log("new array: " + newFilterArray);
    let split = Math.min(...newFilterArray);
    console.log("split: " + split);

    let wordPig = splitMe(word, split);
    return wordPig;
  } else {
    let wordPig = res;
    return wordPig;
  }
}

// below is built in

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
