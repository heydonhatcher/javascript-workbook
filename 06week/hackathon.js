function rampNumberCount(number) {
  var rampCount = 0;
  for (var currentNum = number - 1; currentNum > -1; currentNum--) {
    var output = [],
      sNumber = currentNum.toString();

    for (var i = 0, len = sNumber.length; i < len; i++) {
      output.push(sNumber[i]);
    }

    console.log("output:", output);
    var rampCount = 0;
    for (var i = 0; i < output.length; i++) {
      if (output[i] > output[i + 1]) {
        console.log("Not a ramp number");
      } else if (output[i] === output[i + 1]) {
        console.log("currentHighest same as next digit, no change");
      } else if (output[i] < output[i + 1]) {
        currentHighest = output[i + 1];
        console.log("new currentHighest is", currentHighest);
        // var currentHighest = output[i];
        // console.log("currentHighest:", currentHighest);
      } else {
        rampCount++;
      }
      console.log("current rampCount:", rampCount);
    }
  }
  console.log("ramp numbers less than", number, ":", rampCount);
}
rampNumberCount(2567);
