/// return the total value of a factorial number 
/// n!=n×(n−1)!
const calculateFactorial = (number: number): number => {
  let i: number = number;
  let sum = 1;
  while (i > 0) {
    sum += sum * i;
    i--;
  }
  return sum;
};


calculateFactorial(9); 
//3628800
