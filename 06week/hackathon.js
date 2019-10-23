function rampNumberCount(number) {
  var rampCount = 0;
  for (var currentNum = number - 1; currentNum > -1; currentNum--) {
    var output = [],
      sNumber = currentNum.toString();

    for (var i = 0, len = sNumber.length; i < len; i++) {
      output.push(sNumber[i]);
    }
    console.log("---------------\n", "output:", output);

    for (var i = 1; i <= output.length; i++) {
      if (output.length === 1) {
        rampCount++;
        console.log("Is ramp number: only one digit");
        console.log("(changed) current rampCount:", rampCount);
        break;
      } else if (output[i - 1] > output[i]) {
        console.log("Not a ramp number");
        console.log("(unchanged) current rampCount:", rampCount);
        break;
      } else if (output[i - 1] === output[1] || output[i - 1] < output[i]) {
        if (i + 1 === output.length) {
          rampCount++;
          console.log("Is a ramp number");
          console.log("(changed) current rampCount:", rampCount);
        }
      }
    }
  }
  console.log("ramp numbers less than", number, ":", rampCount);
}

rampNumberCount(100);
