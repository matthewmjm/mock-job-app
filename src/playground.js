export const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
};

export const multiply = (num1, num2) => {
  let total = 0;
  for (let i = 0; i < num1; i++) {
    total += num2;
  }
  return total;
};
