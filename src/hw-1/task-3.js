function writePerfectNumbers(boundry = 1000) {
  let perfectNumberList = [];
  for (let i = 1; i < boundry; ++i) {
    let sum = 0;
    for (let k = 1; k < i; ++k) {
      if (i % k === 0) {
        sum += k;
      }
    }
    if (i === sum) {
      perfectNumberList.push(i);
    }
  }
  console.log(`Perfect numbers smaller than ${boundry}: ${perfectNumberList}`);
}

writePerfectNumbers(1000);