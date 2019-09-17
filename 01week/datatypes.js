//1
var now = new Date();

console.log("the time at the beep is", now);

//2
var num = 20;

console.log("output :" + num.toString(2));

//3
console.log("number:" + parseInt("20 15 10 5"));

//4
const name = "jerry";

if (typeof name === "string") {
  console.log("jerry is a string.");
}

//5

let num1 = 3;
let num2 = 9;

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

sumOfTwoNumbers(3, 9);

//or

console.log(2 + 2);

//6
let myName = "heydon";
let myHairColor = "blonde";

if ((myName = "heydon") && myHairColor == "blonde") {
  console.log("howdy");
}

//7
let myMan = "isaac";
let hisHair = "red";

if ((myMan = "isaac") || (hisHair = "red")) {
  console.log("whatsup");
}

//8
let myGirl = "allison";
let herHair = "curly";

if (myGirl != "joni" && herHair != "straight") {
  console.log("lobster");
}
