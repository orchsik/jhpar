const factorial = (input: number): any => {
  if (input === 1) {
    return input;
  } else {
    return input * factorial(--input);
  }
};

export { factorial };

console.log(factorial(5));
