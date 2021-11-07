function checkFriendlyNumbers(first, second) {
  let sumOfFirstMultipliers = 0;
  let sumOfSecondMultipliers = 0;
  for (let i = 1; i < first; ++i) {
    if (first % i === 0) {
      sumOfFirstMultipliers += i;
    }
  }
  for (let i = 1; i < second; ++i) {
    if (second % i === 0) {
      sumOfSecondMultipliers += i;
    }
  }
  if (first === sumOfSecondMultipliers && second === sumOfFirstMultipliers) {
    console.log(`${first} and ${second} are friendly numbers.`);
  } else {
    console.log(`${first} and ${second} are NOT friendly numbers.`);
  }
}

checkFriendlyNumbers(1184, 1210);