function checkPrime(...numbers) {
  numbers.forEach((number) => {
    let result;
    for (let i = 2; i < number; ++i) {
      if ((number % i) === 0) {
        result = `${number} is NOT prime.`;
      }
    }
    if (!result) {
      result = number > 1 ? `${number} is prime.` : `${number} is NOT prime.`;
    }
    console.log(result);
  });
}

checkPrime(1, 45, 6, 23, 65, 2, 78);
