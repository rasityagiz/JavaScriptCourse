function checkPrime(...numbers) {
  numbers.forEach((number) => {
    let result;
    for (let i = 2; i < number; ++i) {
      if ((number % i) === 0) {
        result = `${number} is not prime.`;
      }
    }
    if (!result) {
      result = number > 1 ? `${number} is prime.` : `${number} is not prime.`;
    }
    console.log(result);
  });
}

checkPrime(1, 45, 6, 23, 65, 2, 78);
