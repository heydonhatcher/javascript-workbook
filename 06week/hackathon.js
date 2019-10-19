function rampNumberCount(number) {
  var output = [],
    sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i++) {
    output.push(sNumber[i]);
  }

  console.log("output:", output);
  var rampCount = 0;
  for (var i = 0; i < output.length; i++) {
    if (output[i] > output[i + 1]) {
      console.log("Not a ramp number");
      return;
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
rampNumberCount(256789);
