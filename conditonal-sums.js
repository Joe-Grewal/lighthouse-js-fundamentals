const conditionalSum = function(values, condition) {
  const evenNum = [];
  const oddNum = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenNum.push(values[i]);
    } else {
        oddNum.push(values[i]);
    }
  }
  let sum = 0;
  if (condition === "even") {
      for (let j = 0; j < evenNum.length; j++) {
        sum += evenNum[j];
    }
  } else if (condition === "odd") {
    for (let k = 0; k < oddNum.length; k++) {
      sum += oddNum[k];
    }
  } else {
    return 0;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));