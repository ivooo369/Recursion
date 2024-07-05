function fibs(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  console.log(result);
}

fibs(8);

function fibsRec(num) {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const result = fibsRec(num - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
}

console.log(fibsRec(18));
