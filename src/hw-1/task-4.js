function writePrimeNumbers(boundry = 1000) {
  let primeNumberList = [];
  for (let i = 2; i < boundry; ++i) {
    let isPrime = true;
    for (let k = 2; k < i; ++k) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumberList.push(i);
    }
  }
  console.log(`Prime numbers smaller than ${boundry}: ${primeNumberList}`);
}

writePrimeNumbers();
