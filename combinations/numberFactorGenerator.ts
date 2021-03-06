/// Get factors numbers of a given number
/// this a function based on ES6 generator and typescript
function* numberFactorGenerator(number: number): Generator<number> {
  let i: number = 0;
  while (i <= number) {
    if (number % i === 0) {
      yield i;
    }
    i++;
  }
}
