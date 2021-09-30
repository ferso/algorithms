/// Get factos numbers of a given number
function* numberFactorGenerator(number: number): Generator<number> {
  let i: number = 0;
  while (i <= number) {
    if (number % i === 0) {
      yield i;
    }
    i++;
  }
}
